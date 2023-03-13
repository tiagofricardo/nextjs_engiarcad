import { useEffect } from "react";

function PortfolioFilterCategory({
  filterCategory,
  categories,
  setFiltered,
  activeCategory,
  setActiveCategory,
}) {
  useEffect(() => {
    if (activeCategory === filterCategory[0].id) {
      setFiltered(categories);
      return;
    }
    const filtered = categories.filter((category) =>
      category.filterId.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <ul className="list-filter ">
      {filterCategory.map((filter) => (
        <li
          key={filter.id}
          className={`list-filter-link ${
            filter.id === activeCategory ? "list-filter-link-active" : ""
          }`}
          onClick={() => {
            setActiveCategory(filter.id);
          }}
        >
          {filter.description}
        </li>
      ))}
    </ul>
  );
}

export default PortfolioFilterCategory;
