import React, { useState, useEffect } from "react";

import "./style/global.scss";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layout/NavBar";
import SideMenu from "./components/layout/SideMenu";

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [appClass, setAppClass] = useState("");

  useEffect(() => {
    // debugger;
    switch (sideMenuOpen) {
      case true:
        setAppClass("open-menu");
        break;

      case false:
        setAppClass("");
        break;

      default:
        setAppClass("");
        break;
    }
  }, [sideMenuOpen]);

  return (
    <div className={`App ${appClass}`}>
      <SideMenu isOpen={sideMenuOpen} toggleMenu={setSideMenuOpen} />
      <main className="app-main">
        <NavBar toggleMenu={setSideMenuOpen} />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
