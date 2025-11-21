import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/mockData";

export default function Categories({ selectCategory }) {
  return (
    <section className="py-4 bg-green-50/80 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-lg font-bold text-green-700 mb-3 text-center">
          Categorías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onClick={() => selectCategory(cat.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
