import React from "react";

export default function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all text-center flex flex-col items-center justify-center"
    >
      <div className="text-4xl mb-2">{category.icon}</div>
      <div className="font-semibold text-green-700">{category.name}</div>
    </div>
  );
}
