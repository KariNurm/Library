import { addUser, getBooks, getUsers } from "./services/Communication";
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
export const BooksContext = createContext();

const App = () => {
  
  
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentForm, setCurrentForm] = useState('login');
  const [loginStatus, setLoginStatus] = useState({})

useEffect(() => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  console.log(loggedInUser)
  if (loggedInUser) {
    setLoginStatus(loggedInUser);
  }

  getBooks().then((data) => {setBooks(data)});
  getUsers().then((data) => {setUsers(data)});
  
}, []);

console.log(loginStatus)

const addNewUser = (newUser) => {
  addUser(newUser).then(newUser => setUsers([newUser, ...users]));
}


const toggleForm = (formName) => {
  setCurrentForm(formName);
}

// loginStatus contains the data of the logged in user

 return ( 
  <div className='App'>
    <UserContext.Provider value={{users: users,
                                  loginStatus: loginStatus,
                                  setLoginStatus: setLoginStatus,
                                  setUsers: setUsers}}>
        <BooksContext.Provider value={{books: books,
                                       setBooks: setBooks}} >
      <Header />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/login" element={ currentForm === "login" 
                                                      ? <Login onFormSwitch={toggleForm} /> 
                                                      : <Signup addNewUser={addNewUser} onFormSwitch={toggleForm} />
                                                    }/>
        </Routes>
    </BooksContext.Provider>

    {/*This part is for testing only*/}
    </UserContext.Provider>
  </div>
)
}

export default App;





