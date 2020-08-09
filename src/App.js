import React from 'react';

import "./style/global.scss";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layout/NavBar";
import SideMenu from "./components/layout/SideMenu";

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* <SideMenu /> */}
        <Dashboard />
    </div>
  );
}

export default App;
