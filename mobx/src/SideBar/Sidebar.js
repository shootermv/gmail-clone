import React from "react";
import "./SideBar.css";

import { observer } from "mobx-react-lite";
import store from "../Store/store";

const SideBar = observer(({ store }) => {
  const getClass = (category) =>
    category === store.selectedCategory ? `sidebar-item--selected` : "";
  return (
    <aside className="sidebar">
      <h3>
        <span role="img" aria-label="emoj">
          ✉️
        </span>
        Gmail
      </h3>
      <ul>
        {store?.categories.map((category) => (
          <li
            className={getClass(category)}
            key={category}
            onClick={() => store.setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default () => (
  <>
    <SideBar store={store} />
  </>
);
