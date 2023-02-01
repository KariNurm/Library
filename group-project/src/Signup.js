import React, { useState } from "react";
import { useRef } from "react";
import Modal from 'react-modal';
import { v4 as idv4} from 'uuid'
import "./Login_Signup.css";
import { Link } from "react-router-dom"

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
   
    const customStyles = {
        content: {
          inset: '50% auto auto 50%', // top right bottom left
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
        },
      };
      Modal.setAppElement('#root'); // bind modal to root
      const subtitle = useRef(null);
    
    
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
        setIsOpen(true);
    }
    return (
        <div className="container">
            <h2>Signup</h2>
      <Modal
        isOpen={isOpen}
        onAfterOpen={() => {subtitle.style.color = '#f00'}}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="signup-success">
        <h2 ref={subtitle}> Thank you for registration! You can <Link onClick={() => props.onFormSwitch('login')}> log in </Link> </h2>
        <button onClick={() => setIsOpen(false)}> X </button>
        </div>
      </Modal>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className="login-input" required="required" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input className="login-input" required="required" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input className="login-input" required="required" minlength="4" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="login-button"  type="submit">Submit</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Signup
