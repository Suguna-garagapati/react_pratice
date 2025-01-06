// import React,{useState} from 'react'

// const Register = () => {
//   const [Panel,setPanel] = useState("");

//   const handleChange = (e) => {
//     setPanel(e.target.value);
//   };
//     const[Data,setData] = useState({
//             'FirstName':"",
//             "LastName":"",
//             'Email':"",
//             'password':"",
//             'Panel':"",
//           })
// const{FirstName,LastName,Email,Password,Panel} = Data

//   const handleInputChange = (e) => {
//        const { name, value } = e.target;
//         setData({ ...Data, [name]: value });
//        };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const randomId = Math.random().toString(36).substring(2, 9);

//     // Create a new data object with the random ID
//     const newEntry = { id: randomId, ...Data };

//     // Update the state and local storage
//     const updatedData = [...Data, newEntry];
//     setData(updatedData);

//     localStorage.setItem("Data", JSON.stringify(updatedData));

//     // Clear the form
//     setData({ FirstName : "", LastName : "" , Email : "", password : "" ,Panel : ""});
//   };
   




//   return (
//     <>
//     <form onSubmit={handleSubmit}>

//       <label>First name :</label>
//       <input  type="text" name="FirstName" value={FirstName}  onChange={handleInputChange} required  />
//       <br/>

//       <label>Last Name :</label>
//       <input type="text" name="LastName" value={LastName}   onChange={handleInputChange} required />
//       <br/>

//       <label> Email :</label>
//       <input type="email" name="Email"   value={Email} onChange={handleInputChange} required />
//       <br/>

//       <label>Password :</label>
//       <input type="password" name="Password"  value={Password}  onChange={handleInputChange} required  />
//       <br/>

//       <label>Confirm Password :</label>
//       <input type='password' name='password' />
//       <br/>

//       <label htmlFor="dropdown" >panel :</label>
//       <select id="dropdown" value={Panel} onChange={handleChange}  >
// <option value="" disabled/>
//        <option value="admin">Admin</option>
//        <option value="user">User</option>
//                 </select>
//         <br/>

//       <button type='submit'>Submit</button>
//      </form>
//      </>
//   )
// }

// export default Register

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     panel: "user",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const id = Math.random().toString(36).substr(2, 9);
//     const userData = { ...formData, id };
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     users.push(userData);
//     localStorage.setItem("users", JSON.stringify(users));
//     navigate("/login");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="firstName" placeholder="First Name" onChange={handleChange} required />
//       <br />
//       <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
//       <br />
//       <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
//       <br />
//       <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
//       <br />
//       <input name="confirmPassword" placeholder="Confirm Password" type="password" onChange={handleChange} required />
//       <br />
//       <select name="panel" onChange={handleChange}>
//         <option value="user">User</option>
//         <option value="admin">Admin</option>
//       </select>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Register;

