import React, { useState } from "react";

const Register = () => {
    const [data, setData] = useState({
        'firstname': "",
        'lastname': "",
        'email': "",
        'password':"",
        'confirmpassword':"",
        'panel':"",
    });

    const { firstname, lastname, email,password,confirmpassword,panel } = data;

    const changeHandler = (e) => {
        setData({
            ...data,[e.target.name]: e.target.value,
        });
    };

    const display = (e) => {
        e.preventDefault();
    
        if (!firstname || !lastname || !email || !password || !confirmpassword || !panel) {
            alert("All fields are required.");
            return;
        }
    
        if (data.password !== data.confirmpassword) {
            alert("You entered incorrect password");
            return;
        }
    
        try {
            const id = Math.floor(Math.random() * 1000000);
            const newData = { id, ...data };
            const previousData = JSON.parse(localStorage.getItem("data")) || [];
            previousData.push(newData);
            console.log(previousData);
            localStorage.setItem("data", JSON.stringify(previousData));
            alert("Registration Successful");
        } catch (error) {
            console.error("Error accessing localStorage:", error);
            alert("An error occurred while saving your data.");
        }
    
        setData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            panel: "", // Reset panel to default empty
        });
    };
    

    return (
        <>
            <form onSubmit={display}>
                <label>Firstname:</label>
                <input type="text" name="firstname" value={firstname} onChange={changeHandler} /><br />
                <label>Lastname:</label>
                <input type="text" name="lastname"value={lastname} onChange={changeHandler}/><br />
                <label>Email:</label>
                <input type="email" name="email"value={email} onChange={changeHandler}/><br />
                <label>password:</label>
                <input type="password" name="password" value={password} onChange={changeHandler}/><br />
                <label>Confirm password:</label>
                <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br />
                <label>Panel:</label>
                <select name="panel" value={panel} onChange={changeHandler}>
                    <option value="" disabled>
                        Select Panel
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                <button type="submit">Register now</button>
            </form>
        </>
    );
};

export default Register;