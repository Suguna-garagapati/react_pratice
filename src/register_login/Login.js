import React,{useState} from "react"

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData,setLoginData] = useState({
    "email":"",
    'password':"",
    'panel':"",
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {email,password,panel} = loginData;

  const changeHandler = (e) => {
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("data")) || [];

    // Check if the entered credentials exist in localStorage
    const user = storedData.find(
      (user) =>
        user.email === email && user.password === password && user.panel === panel
    );
  
    if (user) {
      setError(""); // Clear any previous errors
  
      // Redirect to the common dashboard
      navigate("/DashBoard", { state: { firstname: user.firstname, panel: user.panel } });
      } else {
      setError("Invalid email, password, or panel selection.");
    }
    // storedData.push(loginData);
    // localStorage.setItem("data",JSON.stringify(storedData));
    setLoginData({
      email:"",
      password:"",
      panel:""
    })
  }
  return (
    <>
    <form onSubmit={submitHandler}>
    <label>email</label>
    <input type="email" name="email" value={email} onChange={changeHandler}/>

    <label>password</label>
    <input type="password" name="password" value={password} onChange={changeHandler}/>

    <label>Panel:</label>
    <select name="panel" value={panel} onChange={changeHandler}>
      <option value="" disabled>
     Select Panel
      </option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>

    
    <button type="submit">Login</button>
    </form>
  
    {error && <p style={{ color: "red" }}>{error}</p>}

    </>
  )
}

export default Login
