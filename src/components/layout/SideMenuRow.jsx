import React from "react";

const SideMenuRow = (props) => {
  const { Icon, label } = props.data;
  return (
    <div className="menu-row flex align-center space-start">
      <Icon className="menu-row-icon" />
      <p>{label}</p>
    </div>
  );
};

export default SideMenuRow;
