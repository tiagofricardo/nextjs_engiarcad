import React, { useState, useMemo, useEffect } from "react";
import FilterCategory from "./FilterCategory";
import PortfolioCategory from "./PortfolioCategory";
import { motion, AnimatePresence } from "framer-motion";

const categoryPortfolio = [
  {
    id: 1,
    number: "1",
    name: "Habitação e Turismo",
    categoryId: "cat2",
    categoryName: "Urbanismo",
  },

  {
    id: 3,
    number: "3",
    name: "Instalações comerciais e sociais",
    categoryId: "cat2",
    categoryName: "Urbanismo",
  },
  {
    id: 4,
    number: "4",
    name: "Rodovia",
    categoryId: "cat3",
    categoryName: "Postos de combustíveis",
  },
  {
    id: 2,
    number: "2",
    name: "Instalações industriais e armazéns",
    categoryId: "cat2",
    categoryName: "Urbanismo",
  },
  {
    id: 5,
    number: "5",
    name: "Marinha",
    categoryId: "cat3",
    categoryName: "Postos de combustíveis",
  },
  {
    id: 6,
    number: "6",
    name: "Aviação",
    categoryId: "cat3",
    categoryName: "Postos de combustíveis",
  },
  {
    id: 7,
    number: "7",
    name: "Reservatórios",
    categoryId: "cat5",
    categoryName: "Equipamentos",
  },
  {
    id: 8,
    number: "8",
    name: "Instalações comerciais e sociais",
    categoryId: "cat5",
    categoryName: "Equipamentos",
  },
];

function Gallery({ filterCategories, categories }) {
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("cat1");

  return (
    <div>
      <FilterCategory
        filterCategory={filterCategories}
        categories={categories}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <motion.div layout className="gallery">
        <AnimatePresence>
          {filtered.map((category) => {
            return <PortfolioCategory key={category.id} category={category} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Gallery;
