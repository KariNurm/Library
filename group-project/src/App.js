import { addUser, getBooks, getUsers, getLoginStatus } from "./services/Communication";
import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Login from "./Login"
import SearchPage from "./SearchPage";
import Signup from "./Signup";
import MyPage from "./MyPage";
import "./App.css";
export const UserContext = createContext();

const App = () => {
  
  
const [books, setBooks] = useState([]);
const [users, setUsers] = useState([]);
useEffect(() => {
  getBooks().then((data) => {setBooks(data)});
  getUsers().then((data) => {setUsers(data)});
  getLoginStatus().then((data) =>{setLoginStatus(data)})
}, []);

const addNewUser = (newUser) => {
  addUser(newUser).then(newUser => setUsers([newUser, ...users]));
}

const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}


const [loginStatus, setLoginStatus] = useState({})
// loginStatus contains the data of the logged in user

 return ( 
  <div className='App'>
    <UserContext.Provider value={{users: users, loginStatus: loginStatus, setLoginStatus: setLoginStatus}}>
      <Header /> { /* <Link> elements goes to Header component*/ }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage books={books}/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/login" element={ currentForm === "login" 
                                                    ? <Login onFormSwitch={toggleForm} /> 
                                                    : <Signup addNewUser={addNewUser} onFormSwitch={toggleForm} />
                                                    }/>
      </Routes>

    {/*This part is for testing only*/}
    </UserContext.Provider>
  </div>
)
}

export default App;





