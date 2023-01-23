import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"

export const Home = () => (
	<div> <h2>Home</h2> </div>
)
export const Search = () => (
	<div> <h2>Search</h2> <code></code></div>
)
export const Signup = () => (
	<div> <h2>Signup</h2></div>
)
export const Login = () => (
	<div> <h2>Login</h2></div>
)

const Header = () => {
    const padding = {padding: 15, margin: 15, color: "white"}

	return (
		<Router>
			<div className='header'>
				<Link style={padding} to="/"> HOME </Link>
				<Link style={padding} to="/search"> SEARCH </Link>
				<Link style={padding} to="/signup"> SIGNUP </Link>
				<Link style={padding} to="/login"> LOGIN </Link>
			</div>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/search" element={<Search/>} />
				<Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
			</Routes>
		</Router>
	)
}

export default Header