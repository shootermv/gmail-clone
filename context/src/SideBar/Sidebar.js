import React, { useContext } from "react";
import { EmailsContext } from "../Context/EmailsContext";

import "./SideBar.css";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory, categories } = useContext(
    EmailsContext
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
