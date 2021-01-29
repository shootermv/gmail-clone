import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../Store/actions";
import {
  categoriesSelector,
  selectedCategorySelector
} from "../Store/selectors";
import "./SideBar.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const selectedCategory = useSelector(selectedCategorySelector);
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
              dispatch(selectCategory(category));
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
