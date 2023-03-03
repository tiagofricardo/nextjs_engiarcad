import { useEffect } from "react";

function FilterCategory({
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
          className={`list-filter-link ${
            filter.id === activeCategory ? "list-filter-link-active" : ""
          }`}
          href={"/"}
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

export default FilterCategory;
