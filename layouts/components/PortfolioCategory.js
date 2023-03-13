import { motion } from "framer-motion";

function PortfolioCategory({ category }) {
  return (
    <motion.a
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="category-card"
      style={{
        backgroundImage: `url(${category.image})`,
      }}
      href={`/portfolio/${category.id}`}
    >
      <div className="category-card-container">
        <p className="mb-1 text-xs text-gray-200">
          {category.smallDescription}
        </p>
        <h5 className="text-gray-200">{category.description}</h5>
      </div>
    </motion.a>
  );
}

export default PortfolioCategory;
