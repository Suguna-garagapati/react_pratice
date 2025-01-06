// import React from 'react'

// const login = () => {
//   return (
//     <>
//     <form>

        
//       <label> Email :</label>
//       <input type="email" name="Email"  />
//       <br/>

//       <label>Password :</label>
//       <input type="password" name="Password" />
//       <br/>

//       <label>panel :</label>
//       <select required >
//         <option value=""> </option>
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//      </select>
//      <br/>

//       <button>Login</button>

//     </form>
//     </>
//   )
// }

// export default login

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", panel: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password && u.panel === formData.panel
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <br />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <br />
      <select name="panel" onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
