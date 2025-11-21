import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();

async function checkDatabase() {
  console.log("🔍 Verificando configuración de la base de datos...\n");

  // 1. Verificar DATABASE_URL
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("❌ ERROR: DATABASE_URL no está configurado");
    console.log("\n📝 Crea un archivo .env en la carpeta backend con:");
    console.log("   DATABASE_URL=postgresql://usuario:password@localhost:5432/nombre_db\n");
    process.exit(1);
  }

  // Ocultar la contraseña en el log
  const safeUrl = databaseUrl.replace(/:[^:@]+@/, ":****@");
  console.log("✅ DATABASE_URL configurado:", safeUrl);

  // 2. Intentar conectar
  try {
    console.log("\n🔌 Intentando conectar a la base de datos...");
    await prisma.$connect();
    console.log("✅ Conexión exitosa a la base de datos");

    // 3. Verificar tablas
    console.log("\n📊 Verificando tablas...");
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    console.log("✅ Tablas encontradas:", tables.map(t => t.table_name).join(", "));

    // 4. Verificar productos
    const productCount = await prisma.product.count();
    console.log(`\n📦 Productos en la base de datos: ${productCount}`);

    if (productCount === 0) {
      console.log("\n⚠️  No hay productos en la base de datos.");
      console.log("   Ejecuta: node src/seed.js para poblar la base de datos");
    }

    console.log("\n✅ Todo está configurado correctamente!");
  } catch (error) {
    console.error("\n❌ Error al conectar a la base de datos:");
    console.error("   Código:", error.code);
    console.error("   Mensaje:", error.message);

    if (error.code === "P1001") {
      console.log("\n💡 Posibles soluciones:");
      console.log("   1. Verifica que PostgreSQL esté corriendo");
      console.log("   2. Verifica que la URL de conexión sea correcta");
      console.log("   3. Verifica que la base de datos exista");
    } else if (error.code === "P1017") {
      console.log("\n💡 La conexión se cerró. Verifica tu configuración de red.");
    }

    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();

