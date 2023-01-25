import { getBooks } from "./services/axios";
import Header from "./Header"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPageList from "./SearchPageList";
import {useEffect, useState } from 'react';
import LandingPage from "./LandingPage";

const App = () => { 

useEffect(() => {
  getBooks().then((data) => {setBooks(data)});
}, []);
  
const [books, setBooks] = useState([]);
console.log(books)

 return ( 
  <div className='App'>
    
    <Header /> { /* <Link> elements goes to Header component*/ }
  
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  
      
  </div>
)
}

export default App;
