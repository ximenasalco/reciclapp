import prisma from "../prisma.js";

export const getProducts = async (req, res) => {
  try {
    // Verificar conexión primero
    await prisma.$connect();

    const products = await prisma.product.findMany({
      include: {
        centers: true,
        images: true,
      },
    });

    console.log(`Productos encontrados: ${products.length}`);
    res.json(products);
  } catch (err) {
    console.error("Error en getProducts:", err);
    console.error("Stack trace:", err.stack);

    // Detectar tipos específicos de errores
    let errorMessage = "Error al obtener los productos";
    let statusCode = 500;

    if (err.code === "P1001") {
      errorMessage =
        "No se puede conectar a la base de datos. Verifica que la base de datos esté corriendo y que DATABASE_URL esté configurado correctamente.";
    } else if (err.code === "P2002") {
      errorMessage = "Error de duplicado en la base de datos";
    } else if (err.message && err.message.includes("DATABASE_URL")) {
      errorMessage =
        "DATABASE_URL no está configurado. Crea un archivo .env con la URL de conexión.";
    }

    res.status(statusCode).json({
      error: errorMessage,
      details:
        process.env.NODE_ENV === "development"
          ? {
              message: err.message,
              code: err.code,
              stack: err.stack,
            }
          : undefined,
    });
  }
};
