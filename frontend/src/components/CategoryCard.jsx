import React from "react";

export default function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center"
    >
      <div className="text-2xl mb-1">{category.icon}</div>
      <div className="font-medium text-sm text-green-700">{category.name}</div>
    </div>
  );
}
