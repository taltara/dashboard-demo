import React, { useState } from "react";

import { ReactComponent as DashboardIcon } from "../../assets/img/dashboard.svg";
import { ReactComponent as UserIcon } from "../../assets/img/user.svg";
import { ReactComponent as HistoryIcon } from "../../assets/img/history.svg";
import { ReactComponent as PaymentIcon } from "../../assets/img/payment.svg";
import { ReactComponent as SettingsIcon } from "../../assets/img/settings.svg";

import SideMenuRow from "./SideMenuRow";

const SideMenu = (props) => {
  const { isOpen, toggleMenu } = props;

  const [activeTab, setActiveTab] = useState(0);

  const sideMenuClass = isOpen ? "side-menu-open" : "";

  const menuTabs = [
    { Icon: DashboardIcon, label: "Dashboard" },
    { Icon: UserIcon, label: "User Management" },
    { Icon: HistoryIcon, label: "History" },
    { Icon: PaymentIcon, label: "Payment" },
    { Icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <div
      className={`side-menu ${sideMenuClass} flex column align-center space-start`}
    >
      <p>Secret Dashboard</p>
      <ul className="menu-rows-container">
        {menuTabs.length &&
          menuTabs.map((tab, index) => {
            return <SideMenuRow key={index} data={tab} tabIndex={index} />;
          })}
      </ul>
    </div>
  );
};

export default SideMenu;
