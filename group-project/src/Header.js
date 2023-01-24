import './Header.css';
import { BrowserRouter as Link } from "react-router-dom"

const Header = () => {
    const padding = {padding: 15, margin: 15, color: "white"}

	return (
			<div className='header'>
				<Link style={padding} to="/"> HOME </Link>
				<Link style={padding} to="/search"> SEARCH </Link>
				<Link style={padding} to="/signup"> SIGNUP </Link>
				<Link style={padding} to="/login"> LOGIN </Link>
			</div>
	)
}

export default Header