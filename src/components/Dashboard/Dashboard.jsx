// Dashboard.jsx
import React, { useState } from "react";
import Tracker from "./Tracker";
import Analytics from "./Analytics";
import History from "./History";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("Tracker");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button style={{height:"30px", width:"100px", backgroundColor:"green", border:"none", borderRadius:"5px", marginRight:"20px"}} onClick={() => handleComponentChange("Tracker")}>
          Tracker
        </button>
        <button style={{height:"30px", width:"100px", backgroundColor:"green", border:"none", borderRadius:"5px", marginRight:"20px"}} onClick={() => handleComponentChange("Analytics")}>
          Analytics
        </button>
        <button style={{height:"30px", width:"100px", backgroundColor:"green", border:"none", borderRadius:"5px", marginRight:"20px"}} onClick={() => handleComponentChange("History")}>
          History
        </button>
      </div>
      {selectedComponent === "Tracker" && <Tracker />}
      {selectedComponent === "Analytics" && <Analytics />}
      {selectedComponent === "History" && <History />}
    </div>
  );
};

export default Dashboard;
