import React, { useState } from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ItemsGrid from "./components/ItemsGrid";
import ItemPage from "./components/ItemPage";
import { objects } from "./data/mockObjects";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = objects.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedItem) {
    return (
      <ItemPage item={selectedItem} onBack={() => setSelectedItem(null)} />
    );
  }

  return (
    <div>
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Buscar objeto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-6"
        />
      </div>

      <Categories selectCategory={setSelectedCategory} />
      <ItemsGrid items={filteredItems} onSelect={setSelectedItem} />
    </div>
  );
}

export default App;
