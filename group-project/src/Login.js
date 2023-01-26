import React, { useState } from "react";
import "./Login_Signup.css";

const Login = (props) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(email);
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