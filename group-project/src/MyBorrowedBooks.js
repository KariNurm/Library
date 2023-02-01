import './MyBorrowedBooks.css';
import { UserContext } from './App';
import { useContext } from 'react';

const MyBorrowedBooks = () => {
    const data = useContext(UserContext);
    const user = data.loginStatus.user;
   // const myBooks = user.map
   // const BookHistory
    

    return <p>jee</p>

}