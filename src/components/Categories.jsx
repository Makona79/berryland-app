import React from "react";

export const Categories = ({ value, onClickCategory }) => {
  const categories = ["Все продукты", "Ягоды", "Суперфуд"];
  return (
    <ul className="shop__nav">
      {categories.map((categoryName, i) => (
        <li
          onClick={() => onClickCategory(i)}
          className={value === i ? "shop__list _active" : "shop__list"}
          key={i}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
};
export default Categories;
