import React, { useState } from "react";
import FilterCategory from "./PortfolioFilterCategory";
import PortfolioCategory from "./PortfolioCategory";
import { motion, AnimatePresence } from "framer-motion";

function PortfolioGallery({ filterCategories, categories }) {
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

      <motion.div layout className="portfolio-gallery">
        <AnimatePresence>
          {filtered.map((category) => {
            return <PortfolioCategory key={category.id} category={category} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default PortfolioGallery;
