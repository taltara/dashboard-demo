import React, { useState, useEffect } from "react";

import UserIcon from "../../assets/img/user-icon.png";

import { ReactComponent as SettingsIcon } from "../../assets/img/settings.svg";
import { ReactComponent as MenuIcon } from "../../assets/img/menu.svg";
import { ReactComponent as NotificationsIcon } from "../../assets/img/notifications.svg";

const NavBar = (props) => {
  const { toggleMenu, isOpen } = props;

  const [utilsClass, setUtilsClass] = useState("");

  useEffect(() => {
      const classAdd = isOpen ? "slide-utils" : "";
        setTimeout(() => {
            setUtilsClass(classAdd);
        }, 200);
    
  }, [isOpen] )

  return (
    <nav className="navbar flex align-center space-between">
      <div className="menu-icon">
        <MenuIcon onClick={() => toggleMenu((prevState) => !prevState)} />
      </div>
      <aside className={`navbar-utils flex align-center space-end ${utilsClass}`}>
        <SettingsIcon className="settings-icon" />
        <div className="notifications-container">
            <div className="alerts-count flex align-center space-center">5</div>
          <NotificationsIcon className="notifications-icon" />
        </div>
        <img src={UserIcon} alt="" className="utils-user-icon" />
      </aside>
    </nav>
  );
};

export default NavBar;
