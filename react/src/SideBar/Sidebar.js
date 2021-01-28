import React from "react";
import "./SideBar.css";
const SideBar = ({ categories, selected, onSelectedCat }) => {
  const getClass = (category) =>
    category === selected ? `sidebar-item--selected` : "";
  return (
    <aside className="sidebar">
      <h3>
        <span role="img" aria-label="emoj">
          ✉️
        </span>
        Gmail
      </h3>
      <ul role="categories-list">
        {categories.map((category) => (
          <li
            className={getClass(category)}
            key={category}
            onClick={() => onSelectedCat(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default SideBar;
