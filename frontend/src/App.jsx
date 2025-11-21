import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ItemsGrid from "./components/ItemsGrid";
import ItemPage from "./components/ItemPage";
import LeafDecorations from "./components/LeafDecorations";
import { getProducts } from "./services/api";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos del backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const products = await getProducts();
        setItems(products);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        // Mostrar el mensaje de error específico si está disponible
        const errorMessage =
          err.message ||
          "Error al cargar los productos. Por favor, intenta de nuevo.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedItem) {
    return (
      <ItemPage item={selectedItem} onBack={() => setSelectedItem(null)} />
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mb-4"></div>
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      <LeafDecorations />
      <div className="relative z-10">
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
    </div>
  );
}

export default App;
