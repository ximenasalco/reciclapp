export const objects = [
  {
    id: 1,
    name: "Botella de vidrio",
    category: "Vidrio",
    description: "Botella utilizada para bebidas.",
    recycling:
      "Deposítala en el contenedor verde de vidrio. Lava y quita la tapa antes.",
    impact:
      "Reciclar vidrio reduce la extracción de arena y el consumo energético en la fabricación.",
    centers: [
      { lat: 32.5, lng: -117.0, name: "Centro de reciclaje A" },
      { lat: 32.51, lng: -117.01, name: "Centro de reciclaje B" },
    ],
  },
  {
    id: 2,
    name: "Cartón",
    category: "Cartón",
    description: "Cajas de cartón de empaques.",
    recycling: "Dobla y deposita en contenedor azul de cartón.",
    impact: "Reciclar cartón evita la tala de árboles y ahorra agua.",
    centers: [{ lat: 32.52, lng: -117.02, name: "Centro de reciclaje C" }],
  },
  {
    id: 3,
    name: "Papel",
    category: "Papel",
    description: "Papeles usados, periódicos, cuadernos.",
    recycling: "Deposítalo en el contenedor azul de papel.",
    impact: "Reciclar papel reduce la deforestación y el consumo de energía.",
    centers: [{ lat: 32.53, lng: -117.03, name: "Centro de reciclaje D" }],
  },
  {
    id: 4,
    name: "Lata de aluminio",
    category: "Metales",
    description: "Latas de bebidas y alimentos.",
    recycling: "Enjuaga y deposita en contenedor amarillo de metales.",
    impact:
      "Reciclar aluminio ahorra hasta un 95% de energía comparado con producirlo desde cero.",
    centers: [{ lat: 32.54, lng: -117.04, name: "Centro de reciclaje E" }],
  },
  {
    id: 5,
    name: "Botella de plástico",
    category: "Plástico",
    description: "Botellas de agua, refresco o jugos.",
    recycling: "Enjuaga y deposita en contenedor rojo de plástico.",
    impact: "Reciclar plástico reduce la contaminación de ríos y mares.",
    centers: [{ lat: 32.55, lng: -117.05, name: "Centro de reciclaje F" }],
  },
  {
    id: 6,
    name: "Residuos orgánicos",
    category: "Orgánico",
    description: "Restos de comida y vegetales.",
    recycling: "Deposítalos en contenedor marrón u orgánico.",
    impact:
      "Reciclar materia orgánica evita emisiones de metano en rellenos sanitarios.",
    centers: [{ lat: 32.56, lng: -117.06, name: "Centro de compostaje G" }],
  },
  {
    id: 7,
    name: "Tetra Pak",
    category: "Mixto",
    description: "Empaques de jugos o leche.",
    recycling:
      "Separa el cartón del plástico y metal, deposítalo en contenedor mixto.",
    impact:
      "Reciclar empaques mixtos evita que estos materiales lleguen a vertederos.",
    centers: [{ lat: 32.57, lng: -117.07, name: "Centro de reciclaje H" }],
  },
];
