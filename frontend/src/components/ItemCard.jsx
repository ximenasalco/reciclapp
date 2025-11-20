import React from "react";

export default function ItemCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all"
    >
      <div className="font-semibold text-green-700 mb-2">{item.name}</div>
      <div className="text-gray-500 text-sm">{item.category}</div>
    </div>
  );
}
