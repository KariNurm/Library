import React, { useState } from "react";
import "./Login_Signup.css";
import { useContext } from "react"
import { UserContext } from "./App";

const Login = (props) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const data = useContext(UserContext)
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const findUserIndex = data.users.findIndex((ele) => ele.email === email);
            if(findUserIndex === -1) {
                console.log("no user found")
            } else {
                if(password === data.users[findUserIndex].password) {
                    data.setLoginStatus(true);
                } else {
                    console.log("wrong pw")
                }
            }
            
            console.log(findUserIndex)

            
        }
    
        return (
            <div className="container" >
             
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input className="login-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your_email@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="login-button" type="submit">Submit</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                </div>
        )
    }

export default Login