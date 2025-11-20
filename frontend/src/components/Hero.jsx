import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">EcoScan</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-4">
          Descubre cómo reciclar correctamente y conoce el impacto de tus
          acciones.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Cada acción cuenta: separar correctamente tus residuos ayuda a reducir
          la contaminación, ahorrar recursos y mejorar la vida de todos. Conoce
          qué materiales se pueden reciclar y cómo hacerlo de manera efectiva.
        </p>
      </div>
    </section>
  );
}
