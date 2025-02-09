import React from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
import ClientsActivity from "./ClientsActivity";
import MainContainer from "./MainContainer";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContainer />
      <ClientsActivity />
    </div>
  );
};

export default Dashboard;
