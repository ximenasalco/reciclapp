import express from "express";
import productsRoutes from "./routes/products.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./prisma.js";

dotenv.config();

// Verificar que DATABASE_URL esté configurado
if (!process.env.DATABASE_URL) {
  console.error(
    "❌ ERROR: DATABASE_URL no está configurado en el archivo .env"
  );
  console.log("\n📝 Crea un archivo .env en la carpeta backend con:");
  console.log(
    "   DATABASE_URL=postgresql://usuario:password@localhost:5432/nombre_db\n"
  );
  process.exit(1);
}

const app = express();

// Configurar CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Ruta de salud para verificar conexión
app.get("/health", async (req, res) => {
  try {
    // Verificar conexión a la base de datos
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
    res.status(500).json({
      status: "error",
      database: "disconnected",
      error: error.message,
    });
  }
});

app.use("/api", productsRoutes);

const PORT = process.env.PORT || 3000;

// Manejar cierre graceful
process.on("SIGINT", async () => {
  console.log("\n🛑 Cerrando servidor...");
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("\n🛑 Cerrando servidor...");
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(PORT, async () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
  console.log(`🏥 Health check disponible en http://localhost:${PORT}/health`);

  // Verificar conexión a la base de datos al iniciar
  try {
    await prisma.$connect();
    console.log("✅ Conexión a la base de datos establecida");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error.message);
    console.log("💡 Ejecuta 'npm run check-db' para diagnosticar el problema");
  }
});
