
import Header from "./Header"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPageList from "./SearchPageList";

const LandingPage = () => {} ; { /* Landinpage component, will be imported */ }
const SearchPage = () => {} ; { /* Searchpage component, will be imported */ }
const App = () => { 
  
 return ( 
  <div className='App'>
    <Header /> { /* <Link> elements goes to Header component*/ }
    <Router>

   

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
    <SearchPageList/>
  </div>
)
}

export default App
