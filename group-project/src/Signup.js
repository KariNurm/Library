import React, { useState } from "react";
import { v4 as idv4} from 'uuid'
import "./Login_Signup.css";

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = idv4();
        const newUser = {
            name: name,
            password: password,
            email: email,
            id: newId,
            book_history: [],
            admin: false
        }
        props.addNewUser(newUser);
        
    }

    return (
        <div className="container">
             
            <h2>Signup</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className="login-input" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input className="login-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="login-button" type="submit">Submit</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Signup