import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Page = () => {
  const Navigate = useNavigate();

  const goToRegister = () => Navigate("register");
  const goToLogin = () => Navigate("login");

  return (
    <>
      <h1>Welcome to the Panel</h1>
      <button onClick={goToRegister}>Go to Register</button>
      <button onClick={goToLogin}>Go to Login</button>
      {/* This renders nested routes */}
      <Outlet />
    </>
  );
};

export default Page;



























    