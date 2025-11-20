import React from "react";
import MapWrapper from "./MapWrapper";

function ItemPage({ item, onBack }) {
  // Debug: verificar que el item llegue correctamente
  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-4">Objeto no encontrado</p>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  // Asegurar que tenemos los datos necesarios
  const safeItem = {
    name: item.name || "Sin nombre",
    category: item.category || "Sin categoría",
    description: item.description || "Sin descripción",
    recycling: item.recycling || "Información no disponible",
    impact: item.impact || "Información no disponible",
    centers: item.centers || [],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Botón de volver */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-green-700 hover:text-green-800 font-semibold transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </button>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Información del producto */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                {safeItem.name}
              </h2>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">
                    Categoría:
                  </span>
                  <span className="ml-2 text-gray-600">
                    {safeItem.category}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-gray-700">
                    Descripción:
                  </span>
                  <p className="mt-1 text-gray-600">{safeItem.description}</p>
                </div>

                <div>
                  <span className="font-semibold text-gray-700">
                    Cómo reciclar:
                  </span>
                  <p className="mt-1 text-gray-600">{safeItem.recycling}</p>
                </div>

                <div>
                  <span className="font-semibold text-gray-700">
                    Impacto ambiental:
                  </span>
                  <p className="mt-1 text-gray-600">{safeItem.impact}</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Centros de reciclaje cercanos
              </h3>
              {Array.isArray(safeItem.centers) &&
              safeItem.centers.length > 0 ? (
                <div className="h-80 md:h-96 rounded-lg overflow-hidden border border-gray-200">
                  <MapWrapper centers={safeItem.centers} />
                </div>
              ) : (
                <div className="h-80 md:h-96 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-500">
                    No hay centros de reciclaje disponibles
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
