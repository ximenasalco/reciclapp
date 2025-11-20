import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/mockData";

export default function Categories({ selectCategory }) {
  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Categorías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
