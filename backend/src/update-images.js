import prisma from "./prisma.js";

// Mapeo de nombres de productos a URLs de imágenes actualizadas
const productImageMap = {
  "Botella PET Transparente":
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&auto=format&fit=crop",
  "Bolsa de Plástico HDPE":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
  "Botella de Vidrio Verde":
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop",
  "Frasco de Vidrio Transparente":
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop",
  "Lata de Aluminio":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
  "Lata de Acero":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
  "Cartón Corrugado":
    "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&auto=format&fit=crop",
  "Hojas de Papel Blanco":
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop",
  "Cáscaras de Fruta":
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop",
  "Borras de Café":
    "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&auto=format&fit=crop",
  "Teléfono Celular":
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop",
  "Cargador USB":
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&auto=format&fit=crop",
};

async function updateImages() {
  console.log("🖼️  Actualizando imágenes de productos...\n");

  try {
    // Obtener todos los productos con sus imágenes
    const products = await prisma.product.findMany({
      include: {
        images: true,
      },
    });

    console.log(`📦 Productos encontrados: ${products.length}\n`);

    let updated = 0;
    let skipped = 0;

    for (const product of products) {
      const newImageUrl = productImageMap[product.name];

      if (!newImageUrl) {
        console.log(
          `⚠️  No hay imagen definida para: "${product.name}" - Saltando...`
        );
        skipped++;
        continue;
      }

      // Si el producto tiene imágenes
      if (product.images && product.images.length > 0) {
        const firstImage = product.images[0];

        // Solo actualizar si la URL es diferente
        if (firstImage.url !== newImageUrl) {
          await prisma.image.update({
            where: { id: firstImage.id },
            data: { url: newImageUrl },
          });
          console.log(`✅ Actualizada imagen de: "${product.name}"`);
          updated++;
        } else {
          console.log(`ℹ️  Imagen ya está actualizada: "${product.name}"`);
        }
      } else {
        // Si no tiene imágenes, crear una nueva
        await prisma.image.create({
          data: {
            url: newImageUrl,
            productId: product.id,
          },
        });
        console.log(`➕ Creada nueva imagen para: "${product.name}"`);
        updated++;
      }
    }

    console.log(`\n✨ Actualización completada!`);
    console.log(`   - Actualizados: ${updated}`);
    console.log(`   - Omitidos: ${skipped}`);
  } catch (error) {
    console.error("❌ Error al actualizar imágenes:", error);
    throw error;
  }
}

updateImages()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
