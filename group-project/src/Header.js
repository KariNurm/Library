import './Header.css';
import { Link } from "react-router-dom"
import { useContext, useState } from 'react';
import { UserContext } from './App';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Header = () => {
	
	const [logoutPopOpen, setLogoutPopOpen] = useState(false)

	const style = { "color": "yellow",
									"height": "2rem",
									"borderRadius": "50%",
									"backgroundColor": "green",
									"position": "relative",
									"right": "-25%"
	}
	const customStyles = {
    content: {
      inset: '50% auto auto 50%', // Stock style for modal
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

	const data = useContext(UserContext)
	const handleClick = () => {
		console.log("data", data)
		data.setLoginStatus({login: false});
		setLogoutPopOpen(false)
	}


	return (
			<header className='header'>
				<Link className='navLink' to="/"> HOME </Link>
				<Link className='navLink' to="/search"> SEARCH </Link>
				<Link className='navLink' to="/login"> LOGIN </Link>
				{data.loginStatus.login === true 
																	? <button style={style} onClick={() => setLogoutPopOpen(true)}>Logout</button>
																	: <></>}
				<Modal isOpen={logoutPopOpen}
							 contentLabel="want to log out?"
							 style={customStyles}>
			 <div>
					 <h3>Are you sure you want to log out?</h3>
					 <button onClick={handleClick}>Yes</button>
					 <button onClick={() => setLogoutPopOpen(false)}>No</button>
			 </div>
			</Modal>
				</header>
	)
}

export default Header
