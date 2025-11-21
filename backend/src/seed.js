import prisma from "./prisma.js";

async function main() {
  console.log("Insertando productos con datos ecológicos realistas...");

  await prisma.product.create({
    data: {
      name: "Botella PET Transparente",
      category: "Plástico",
      description: "Botella típica usada en agua y refrescos, hecha de PET.",
      recycling:
        "Reciclar en centros que acepten PET limpio; no debe estar mezclada con otros plásticos.",
      impact:
        "Puede tardar hasta 450 años en degradarse si no se recicla. Además, solo 9 % del plástico se recicla a nivel global.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [
          { name: "Centro Verde Ensenada", lat: 31.866, lng: -116.596 },
          { name: "Recicla PET Baja California", lat: 31.868, lng: -116.595 },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Bolsa de Plástico HDPE",
      category: "Plástico",
      description:
        "Bolsa de supermercado hecha de HDPE, usada solo una vez muchas veces.",
      recycling:
        "Debe lavarse y depositarse en contenedores especiales para plásticos tipo 2.",
      impact:
        "El reciclaje de este tipo de plástico puede reducir significativamente la emisión de CO₂ comparado con dejarlo en un vertedero.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Punto Limpio Walmart", lat: 31.865, lng: -116.6 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Botella de Vidrio Verde",
      category: "Vidrio",
      description:
        "Botella de cerveza reutilizable, hecha de vidrio que puede reciclarse una y otra vez.",
      recycling:
        "Llevarla a centros de vidrio; este material es infinitamente reciclable si se procesa bien.",
      impact: "Reciclar vidrio ahorra energía y materias primas.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Centro de Acopio UABC", lat: 31.867, lng: -116.602 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Frasco de Vidrio Transparente",
      category: "Vidrio",
      description:
        "Frasco usado para conservas o alimentos, fabricado en vidrio claro.",
      recycling:
        "Debe enjuagarse antes y depositarse en contenedor de vidrio una vez limpio.",
      impact:
        "El vidrio puede reciclarse sin perder su calidad y su reciclaje ayuda a conservar recursos.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "ReciclaPlus", lat: 31.87, lng: -116.603 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Lata de Aluminio",
      category: "Metal",
      description:
        "Lata de refresco o cerveza fabricada con aluminio, material muy reciclable.",
      recycling:
        "Se recicla infinitamente sin perder calidad; solo se necesita 5 % de la energía original.",
      impact:
        "Reciclar aluminio ahorra hasta un 95 % de energía comparado con producirlo nuevo.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Centro Verde Ensenada", lat: 31.866, lng: -116.596 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Lata de Acero",
      category: "Metal",
      description:
        "Lata usada para alimentos en conserva, fabricada en acero reciclable.",
      recycling:
        "Puede reciclarse en centros que acepten metales ferrosos y no ferrosos.",
      impact:
        "Reciclar acero reduce la necesidad de extraer mineral nuevo y disminuye las emisiones contaminantes.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Punto Limpio Walmart", lat: 31.865, lng: -116.6 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Cartón Corrugado",
      category: "Cartón",
      description:
        "Cajas de cartón usadas para mudanzas o empaques, fabricadas con fibras reciclables.",
      recycling:
        "Debe estar limpio y seco para depositarse en contenedores de cartón/papel.",
      impact:
        "Reciclar cartón ahorra árboles y agua, además de energía comparado con cartón nuevo.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "ReciclaPlus", lat: 31.87, lng: -116.603 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Hojas de Papel Blanco",
      category: "Papel",
      description:
        "Hojas usadas en impresoras y cuadernos, reciclables si están limpias.",
      recycling:
        "Separar sin clips o grapas y depositar en contenedores de papel limpio.",
      impact:
        "Reciclar papel puede salvar más de 17 árboles por cada tonelada reciclada.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Centro Verde Ensenada", lat: 31.866, lng: -116.596 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Cáscaras de Fruta",
      category: "Orgánico",
      description: "Restos de fruta como cáscaras, ideales para compostaje.",
      recycling:
        "Se pueden compostar para producir abono natural; no deben ir a contenedor seco.",
      impact:
        "Reducen la emisión de gases de efecto invernadero cuando se compostan en lugar de ir al vertedero.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Huertos UABC", lat: 31.867, lng: -116.602 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Borras de Café",
      category: "Orgánico",
      description: "Restos utilizados de café, muy útiles para compostar.",
      recycling:
        "Compostable, especialmente útil en huertos urbanos o macetas.",
      impact:
        "Ayuda a mejorar la calidad del suelo y reducir residuos orgánicos en vertederos.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [{ name: "Huertos Comunitarios", lat: 31.868, lng: -116.598 }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Teléfono Celular",
      category: "Electrónicos",
      description:
        "Smartphone con componentes metálicos, plásticos y minerales.",
      recycling:
        "Debe entregarse en centros de e-waste para separar baterías y metales.",
      impact:
        "Contiene tierras raras y metales pesados. Su reciclaje evita contaminación y extrae materiales valiosos.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [
          { name: "Centro E‑Waste Ensenada", lat: 31.864, lng: -116.599 },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Cargador USB",
      category: "Electrónicos",
      description:
        "Cargador de dispositivos, compuesto por plásticos y metales.",
      recycling:
        "Entregar en centros de reciclaje electrónicos para separar componentes y plástico.",
      impact:
        "Residuos electrónicos como este contienen metales que pueden reciclarse para reducir minería nueva.",
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&auto=format&fit=crop",
          },
        ],
      },
      centers: {
        create: [
          { name: "Centro E‑Waste Ensenada", lat: 31.864, lng: -116.599 },
        ],
      },
    },
  });

  console.log("Productos enriquecidos insertados ✔️");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
