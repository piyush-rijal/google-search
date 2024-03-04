import React from "react";
import { NavLink } from "react-router-dom";

function SelectBar() {
  return (
    <div>
      <ul className="flex gap-8 text-base font-bold">
        <li>
          <NavLink to={"/search"} className="dark:text-secondary">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={"/news"} className="dark:text-secondary">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to={"/images"} className="dark:text-secondary">
            Images
          </NavLink>
        </li>
        <li>
          <NavLink to={"/videos"} className="dark:text-secondary">
            Videos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SelectBar;
