import React from "react";

function ItemsGrid({ items, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded p-4 cursor-pointer hover:shadow-lg"
          onClick={() => onSelect(item)}
        >
          <h3 className="font-bold text-lg mb-1">{item.name}</h3>
          <p className="text-gray-600">{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsGrid;
