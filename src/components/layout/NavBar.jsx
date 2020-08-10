import React, { useState, useEffect } from "react";

import { ReactComponent as MenuIcon } from "../../assets/img/menu.svg";

const NavBar = (props) => {
  const { toggleMenu } = props;
  return (
    <nav className="navbar flex align-center space-between">
        <div className="menu-icon">
            <MenuIcon onClick={() => toggleMenu((prevState) => !prevState)} />
        </div>

    </nav>
  );
};

export default NavBar;
