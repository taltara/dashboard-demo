import React, { useState, useEffect } from 'react';

import MenuIcon from "../../assets/img/menu.svg";

const NavBar = () => {
    return (
        <nav className="navbar flex align-center space-between">
            <img src={MenuIcon} alt="" className="menu-icon"/>
        </nav>
    )
}

export default NavBar;
