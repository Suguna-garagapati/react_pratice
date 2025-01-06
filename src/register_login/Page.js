// import React from 'react'
// import {Outlet, useNavigate } from 'react-router-dom'

// const Page = () => {
//      const navigate = useNavigate();

// const goToLogin = () => navigate("/Login");
// const goToRegister = () => navigate("/Register");
// return (
//     <>
//       <button onClick={goToLogin }>Login</button>
//       <button onClick={goToRegister}>Register</button>
//       <Outlet/>
//     </>

    
//   )

// }

// export default Page
import React from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </>
  );
};

export default Page;





























    