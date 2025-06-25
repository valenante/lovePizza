import React, { useState, useContext, useEffect } from "react";
import Products from "../components/Products/Products";
import { CategoriasContext } from "../context/CategoriasContext";
import ExtrasPanel from "../components/Extras/ExtrasPanel"; // Crear este componente
import "../styles/ProductsMenu.css";

const ProductsPage = () => {
  const [selectedType, setSelectedType] = useState(null); // 'bebida', 'plato' o 'extras'
  const { categories, fetchCategories } = useContext(CategoriasContext);

  useEffect(() => {
    if (selectedType && selectedType !== "extras") {
      fetchCategories(selectedType);
    }
  }, [selectedType, fetchCategories]);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="products-page--productos">
      {!selectedType ? (
        <div className="buttons--productos">
          <button onClick={() => handleTypeSelection("bebida")} className="button--productos">
            Bebidas
          </button>
          <button onClick={() => handleTypeSelection("plato")} className="button--productos">
            Platos
          </button>
          <button onClick={() => handleTypeSelection("extras")} className="button--productos extras-button">
            Extras
          </button>
        </div>
      ) : selectedType === "extras" ? (
        <ExtrasPanel onBack={() => setSelectedType(null)} />
      ) : (
        <Products type={selectedType} categories={categories} />
      )}
    </div>
  );
};

export default ProductsPage;
