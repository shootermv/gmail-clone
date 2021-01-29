import React from "react";

import { useRecoilState } from "recoil";
import categoriesState from "../store/categories";
import selectedCategoryState from "../store/selectedCategory";

import "./SideBar.css";

const SideBar = () => {
  const [categories] = useRecoilState(categoriesState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const getClass = (category) =>
    category === selectedCategory ? `sidebar-item--selected` : "";
  return (
    <aside className="sidebar">
      <h3>
        <span role="img" aria-label="emoj">
          ✉️
        </span>
        Gmail
      </h3>
      <ul>
        {categories.map((category) => (
          <li
            className={getClass(category)}
            key={category}
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
