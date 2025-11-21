import React from "react";

function ItemsGrid({ items, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 pt-6 pb-8">
      {items.map((item) => {
        // Obtener la primera imagen del producto, si existe
        const imageUrl =
          item.images && item.images.length > 0 ? item.images[0].url : null;

        return (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow bg-white"
            onClick={() => onSelect(item)}
          >
            {/* Imagen del producto */}
            {imageUrl ? (
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si la imagen falla al cargar, ocultarla
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("bg-gray-100");
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Sin imagen</span>
              </div>
            )}

            {/* Información del producto */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsGrid;
