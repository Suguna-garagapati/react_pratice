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


// // task 5
// import React,{useState} from "react";

// const Data = () => {
//   const[fname,setfname] = useState("")
//   const[lname,setlname] = useState("")

//  const[FinalFirstname,setFinalFirstname] = useState("")
//  const[FinalLastname,setFinalLastname] = useState("")

//  const SubmitHandler = (e) => {
//   e.preventDefault();
//   setFinalFirstname(fname);
//   setFinalLastname(lname);

//  }

//   return (
//     <>
//     <form onSubmit={SubmitHandler}>

//       <label>first Name :</label>
//       <input type="fname" name="fname" value={fname} placeholder="enter first name" onChange={(e) =>setfname(e.target.value)}/>

//       <label>last Name :</label>
//       <input type="lname" name="lname" value={lname} placeholder="enter last name" onChange={(e) =>setlname(e.target.value)}/>

//      <input type="submit"/>
//     </form>

//     <p>first Name:{FinalFirstname}</p>
//     <p>last Name:{FinalLastname}</p>
    
//     </>
//   )
// }
//   export default Data

// // //task6
// import React,{useState} from "react";

// const Datas = () => {
//   const[Data,setData] = useState(0)
//   const[Result,setResult] = useState(0)
//   const incre = (e)=> {
//     e.preventDefault();
//     setResult(Result+parseInt(Data))
//     setData("")
//   }

//   const decre = (e) => {
//     e.preventDefault();
//     setResult(Result-parseInt(Data))
//     setData("")
//   }

//   return (
//     <>
//     <h1>{Result}</h1>
//     <form>
//     <input type="number" value={Data} onChange={(e)=>setData(e.target.value)}/>
//     <br/>
//     <button onClick={incre}>+</button>
//     <button onClick={decre}>-</button>
//     </form>
//     </>
//   )
// }

// export default Datas

// //task7
// import React,{useState} from "react";
// const FromHandling = () => {
//   const[Data,setData] = useState({
//     'FirstName':"",
//     "LastName":"",
//     'Email':"",
//     'password':"",
//   })
//     const[FinalResult,setFinalResult] = useState([])
//     console.log(FinalResult,"final")
//     const{FirstName,LastName,Email,Password} = Data

//     const EventHandler =(e) => {
//       setData({...Data,[e.target.name]:e.target.value})
//   }
   
//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     setFinalResult(Data)
//   } 
 
//   return (
//     <>
//     <form onSubmit={SubmitHandler}>
//       <label>First name :</label>
//       <input  type="text" name="FirstName" value={FirstName} onChange={EventHandler} />
//       <label>Last Name :</label>
//       <input type="text" name="LastName" value={LastName} onChange={EventHandler} />
//       <label> Email :</label>
//       <input type="email" name="Email" value={Email} onChange={EventHandler} />
//       <label>Password :</label>
//       <input type="password" name="Password" value={Password} onChange={EventHandler} />
//       <input type="submit"/>
//     </form>
//     <h1>{FinalResult.FirstName}</h1>
//     <h1>{FinalResult.LastName}</h1>
//     <h1>{FinalResult.Email}</h1>
//     <h1>{FinalResult.Password}</h1>

//     </>
//   )
// }
// export default FromHandling

//task 8
// import React, { useState } from 'react'

// const Map = () => {
//     const data = ['reactjs','nodejs','angular','vuejs']
//   return (
//     <>
//     {
//         obj.map((value)=><li>{value}</li>)
//     }
//     </>
//   )
// }

// // export default Map

import React, { useState } from 'react'

const Task1 = () => {
  const [dataInput, setdataInput] = useState("")
  const [submittedData, setsubmittedData] = useState([])
  const [buttonText, setButtonText] = useState("Submit");
  const [editdata,seteditdata]=useState(null)
  



  const display = (e) => {


    e.preventDefault();
    if(editdata===null)
    {

    
    //creating a new variable to add the current data input to existing input
    const newdata = [...submittedData, dataInput]
    localStorage.setItem("datainput", JSON.stringify(newdata))
    setsubmittedData(newdata)
    }
    else{
      
        // If we're editing, update the existing item at the editIndex
        const updatedData = [...submittedData];
        updatedData[editdata] = dataInput;  // Update the value of the item at editIndex
        setsubmittedData(updatedData);
        localStorage.setItem("datainput", JSON.stringify(updatedData));
    
        // Reset for the next action
        setButtonText("Submit");
        seteditdata(null);  //
      

    }
setdataInput("")


    // const storeddata = JSON.parse(localStorage.getItem("dataInput")) || [];
    // storeddata.push(dataInput);
    // localStorage.setItem("key", JSON.stringify(storeddata));
    //  setsubmittedData(storeddata)



  }

  const del = (index) => {
    // localStorage.removeItem('dataInput')
    const newdata = submittedData.filter((data, i) => i !== index)//data refers to items in array,index = item array position
    localStorage.setItem("dataInput", JSON.stringify(newdata))
    setsubmittedData(newdata)
  }
  const edit = (index) => {

    setdataInput(submittedData[index])
    setButtonText("update")
    seteditdata(index)


  }



  return (
    <>
      <form onSubmit={display} >
        <label>enter a name</label>
        <input type="text" placeholder='enter name' name="username" value={dataInput} onChange={(event) => setdataInput(event.target.value)} />
        <button type='submit'>{buttonText}</button>
      </form>
      {/* Display the submitted data after form submission using conditional operator  */}

      {
        submittedData.map((values, index) =>
        (
          <div key={index}>
            <h1>{values}

              <button onClick={() => edit(index)}>edit</button>
              <button onClick={() => del(index)}>delete</button>
            </h1>
          </div>
        ))
      }
    </>
  )
}

export default Task1

