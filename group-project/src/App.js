import { getBooks } from "./services/Communication";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
<<<<<<< HEAD
import BookComponent from "./BookComponent";
=======
import Login from "./Login"
import SearchPage from "./SearchPage";
import Signup from "./Signup";
import "./App.css";
>>>>>>> main

const App = () => {
  
const [books, setBooks] = useState([]);
console.log(books);
useEffect(() => {
  getBooks().then((data) => {setBooks(data)});
}, []);

const [currentForm, setCurrentForm] = useState('login');

<<<<<<< HEAD
  return (
    <div className="App">
      <Header /> {/* <Link> elements goes to Header component*/}
<BookComponent/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage books={books} />} />
      </Routes>
    </div>
  );
};
=======
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
>>>>>>> main

export default App;





