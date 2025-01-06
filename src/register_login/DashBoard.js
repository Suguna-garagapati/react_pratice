import React from "react";

const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <h1>Welcome, {user?.firstName || "Guest"}!</h1>
    </>
  );
};

export default DashBoard;
