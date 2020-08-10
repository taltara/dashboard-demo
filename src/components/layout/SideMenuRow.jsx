import React from "react";

import { NavLink } from "react-router-dom";

const SideMenuRow = (props) => {
  const { data, tabIndex, setActiveTab, isActive } = props;
  const { Icon, label } = data;

  const rowClass = isActive ? "active-row" : "";
  return (
    <NavLink to="#" className="link-row">
      <div
        className={`menu-row flex align-center space-start ${rowClass}`}
        onClick={() => setActiveTab(tabIndex)}
      >
        <Icon className="menu-row-icon" />
        <p>{label}</p>
      </div>
    </NavLink>
  );
};

export default SideMenuRow;
