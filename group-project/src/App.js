import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LandingPage = () => {} ;
const SearchPage = () => {} ;
const Header = () => {} ;


const App = () => { 
  
  
 return ( 
  <div className='App'>
    <Router>

    <Header /> { /* <Link> elements goes to Header component*/ }

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  </div>
)
}

export default App