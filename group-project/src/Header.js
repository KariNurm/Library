import './Header.css';
import { Link } from "react-router-dom"
import { useContext, useState } from 'react';
import { UserContext } from './App';
import Modal from 'react-modal';
import { setLoginStatusServer } from './services/Communication';
Modal.setAppElement('#root');

const Header = () => {
	
	const [logoutPopOpen, setLogoutPopOpen] = useState(false)

	const style = { "color": "yellow",
									"height": "2rem",
									"borderRadius": "50%",
									"backgroundColor": "green",
									"position": "relative",
									"right": "-20%"
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
		setLoginStatusServer({login: false})
			.then(response => data.setLoginStatus(response))

		setLogoutPopOpen(false)
	}


	return (
			<header className='header'>
				<Link className='navLink' to="/"> HOME </Link>
				<Link className='navLink' to="/search"> SEARCH </Link>
				{data.loginStatus.login === true 
																	?	<>	
																			<Link className='navLink' to="/mypage"> MYPAGE </Link> 
																			<button style={style} onClick={() => setLogoutPopOpen(true)}>Logout</button>
																		</>
																	: <><Link className='navLink' to="/login"> LOGIN </Link></>}
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
