import { getBooks } from "./services/axios";
import Header from "./Header"
import Login from "./Login"
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import {useEffect, useState } from 'react';
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import Signup from "./Signup";

const App = () => { 

useEffect(() => {
  getBooks().then((data) => {setBooks(data)});
}, []);
  
const [books, setBooks] = useState([]);
console.log(books)
const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}

 return ( 
  <div className='App'>
    
    <Header /> { /* <Link> elements goes to Header component*/ }
  
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />} />
    </Routes>
  
      
  </div>
)
}

export default App;





