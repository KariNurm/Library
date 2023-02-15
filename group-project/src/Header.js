import "./Header.css";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
  const navigate = useNavigate();
  const [logoutPopOpen, setLogoutPopOpen] = useState(false);
  const customStyles = {
    content: {
      inset: "50% auto auto 50%", // Stock style for modal
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      background: "linear-gradient(to bottom, #05421f, green)",
    },
  };

  const handleClick = () => {
    navigate("/");
    localStorage.setItem("user", JSON.stringify({ login: false }))
    setLogoutPopOpen(false);
  };

  return (
    <header className="header">
      <Link className="navLink" to="/"> HOME </Link>
      <Link className="navLink" to="/search"> SEARCH </Link>
      {currentUser.login === true 
                                  ? <>
                                      <Link className="navLink" to="/mypage"> MYPAGE </Link>
                                      <button
                                        className="logout-button"
                                        onClick={() => setLogoutPopOpen(true)}> LOGOUT </button>
                                    </>
                                  : <Link className="navLink" to="/login"> LOGIN </Link> 
      }
      <Modal
        isOpen={logoutPopOpen}
        contentLabel="want to log out?"
        style={customStyles}
      >
        <div className="logoutPopup">
          <h3 className="text-name">Are you sure you want to log out?</h3>
          <button className="yes-no-button" onClick={handleClick}>
            Yes
          </button>
          <button
            className="yes-no-button"
            onClick={() => setLogoutPopOpen(false)}
          >
            No
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
