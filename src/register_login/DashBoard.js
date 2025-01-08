import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { firstname, panel } = location.state || {};

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {firstname && <h2>Hello, {firstname}!</h2>}
      {panel === "admin" && <p>You are logged in as <strong>Admin</strong>.</p>}
      {panel === "user" && <p>You are logged in as <strong>User</strong>.</p>}
    </div>
  );
};

export default Dashboard;