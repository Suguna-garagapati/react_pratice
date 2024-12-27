// import logo from './logo.svg';
// import './App.css';
// import Home from './component/Home';

// const { useState } = require("react");


// function App() {
//   return (
//     <>
//       <h1>hello cghj</h1>
//       <Home/>
      
//     </>
//   );
// }
// export default App;

//** *
// import React, { Component } from 'react'

// export class App extends Component {
//   constructor () {
//     super();
//     this.state = {
//       message : "welcome"
//     }
//   }
//   changeHandler =() => {
//     this.setState ({
//       message : "visted"
//     })
//   }

//   render() {
//     return (
//       <>
//       <h1>{this.state.message}</h1>
//       <button onClick={()=>this.changeHandler()}>click</button>
//       </>
//     )
//   }
// }

// export default App


//task 3
// import React,{useState} from 'react'

// const StateManage = () => {
//   const[state,setState]  = useState("welcome to my world")

//   const changeHandler = () => {
//     setState("thank you")

//   }

// return (
//   <>
//   <h1>{state}</h1>
//   <button onClick={changeHandler}>click</button>
//   </>
// )
// }
// export  default StateManage


//task 4
// import React,{useState} from "react";
// const Counter = () => {
//   const[count,setCount] = useState(0)
//   const incre = () => {
//     setCount(count+1)
//   }
//   const decre = () => {
//     setCount(count-1)
//   }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={incre}>+</button>
//     <button onClick={decre}>-</button>
//     </>
//   )
// }
// export default Counter


// task 5
import React,{useState} from "react";

const Data = () => {
  const[fname,setfname] = useState("")
  const[lname,setlname] = useState("")

 const[FinalFirstname,setFinalFirstname] = useState("")
 const[FinalLastname,setFinalLastname] = useState("")

 const SubmitHandler = (e) => {
  e.preventDefault();
  setFinalFirstname(fname);
  setFinalLastname(lname);

 }

  return (
    <>
    <form onSubmit={SubmitHandler}>

      <label>first Name :</label>
      <input type="fname" name="fname" value={fname} placeholder="enter first name" onChange={(e) =>setfname(e.target.value)}/>

      <label>last Name :</label>
      <input type="lname" name="lname" value={lname} placeholder="enter last name" onChange={(e) =>setlname(e.target.value)}/>

     <input type="submit"/>
    </form>

    <p>first Name:{FinalFirstname}</p>
    <p>last Name:{FinalLastname}</p>
    
    </>
  )
}
  export default Data



