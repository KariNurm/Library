import React, { useState } from "react";
import { motion } from 'framer-motion'
import { useRef } from "react";
import Modal from "react-modal";
import { v4 as idv4 } from "uuid";
import "./Login_Signup.css";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const customStyles = {
    content: {
      inset: "50% auto auto 50%", // top right bottom left
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };
  Modal.setAppElement("#root"); // bind modal to root
  const subtitle = useRef(null);
  const subtitle1 = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      const newId = idv4();
      const newUser = {
        name: name,
        password: password,
        email: email,
        id: newId,
        current_loans: [],
        book_history: [],
        admin: false,
      };
      props.addNewUser(newUser);
      setIsOpen(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <motion.div
    className="container text-center  bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >
    <>
      <div className="container">
        <h2>Signup</h2>

        <Modal
          className="signup-failure"
          isOpen={isError}
          onAfterOpen={() => {
            subtitle1.style.color = "#f00";
          }}
          onRequestClose={() => setIsError(false)}
          style={customStyles}
          contentLabel="passwords do not match"
        >
          <div className="pass-not-match">
            <button
              className="popup-close-button"
              onClick={() => setIsError(false)}
            >
              {" "}
              X{" "}
            </button>
            <h2 className="text" ref={subtitle1}>
              {" "}
              Passwords do not match! Please try again{" "}
            </h2>
          </div>
        </Modal>

        <Modal
          className="signup-success"
          isOpen={isOpen}
          onAfterOpen={() => {
            subtitle.style.color = "#f00";
          }}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="successful modal"
        >
          <div className="signup-successful">
            <button
              className="popup-close-button"
              onClick={() => setIsOpen(false)}
            >
              {" "}
              X{" "}
            </button>
            <h2 className="h2-text" ref={subtitle}>
              {" "}
              Thank you for registration! You can now{" "}
              <Link
                className="link"
                onClick={() => props.onFormSwitch("login")}
              >
                {" "}
                Log-In{" "}
              </Link>{" "}
            </h2>
          </div>
        </Modal>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="login-input"
            required="required"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="login-input"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="login-input"
            required="required"
            minlength="4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="password2">Repeat password</label>
          <input
            className="login-input"
            required="required"
            minlength="4"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="********"
            id="password2"
            name="password2"
          />
          <button className="login-button" type="submit">
            Submit
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    </>
    </motion.div>
  );
};

export default Signup;
