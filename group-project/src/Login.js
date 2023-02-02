import React, { useState, useContext } from "react";
import "./Login_Signup.css";
import  Modal  from "react-modal";
import { setLoginStatusServer } from "./services/Communication";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";
Modal.setAppElement('#root')

const customStyles = {
    content: {
      inset: '50% auto auto 50%', // top right bottom left
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
    },
  }

const Login = (props) => {
        const [wrongOpen, setWrongOpen] = useState(false);
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const data = useContext(UserContext)
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const findUserIndex = data.users.findIndex((ele) => ele.email === email);
            if(findUserIndex === -1) {
                setWrongOpen(true);
            } else {
                if(password === data.users[findUserIndex].password) {
                    setLoginStatusServer({login: true,
                                         user: {name: data.users[findUserIndex].name,
                                                email: data.users[findUserIndex].email,
                                                id: data.users[findUserIndex].id,
                                                current_loans: data.users[findUserIndex].current_loans,
                                                book_history: data.users[findUserIndex].book_history,
                                                admin: data.users[findUserIndex].admin}})
                                         .then(response => {console.log("vastaus", response);
                                                                    data.setLoginStatus(response);
                                                                    navigate("/");})
                } else {
                    setWrongOpen(true);
                }
            }
            

            
        }
    
        return (
            <div className="container" >
                
                <h2>Login</h2>
                <Modal isOpen={wrongOpen}
                       contentLabel="wrong email/password"
                       style={customStyles}
                       
                       >
                        <div className="wrong-email">
                            <h3>Wrong email address or password</h3>
                            <button onClick={() => setWrongOpen(false)}>Close</button>
                        </div>
                </Modal>
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