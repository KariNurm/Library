import "./BookComponent.css";
import { BooksContext, UserContext } from "./App";
import { useContext} from "react";
import React from "react";
import { borrowBook, setLoginStatusServer, updateUser } from "./services/Communication";
import Draggable from 'react-draggable';

const BookComponent = ({ id, setIsOpen }) => {
  
  
  const user = useContext(UserContext);
  const users = user.users;
  const login = user.loginStatus.login;
  const currentUser = user.loginStatus.user;
  const setUsers = user.setUsers;
  const setLoginStatus = user.setLoginStatus;
  const dataBooks = useContext(BooksContext);
  const currentBookIndex = dataBooks.books.findIndex(ele => ele.id === id);
  const book = dataBooks.books[currentBookIndex]
  const borrow = (copyId) => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    const newCopies =  book.copies.map((copy) => {
      if(copy.id === copyId) {
        return { ...copy,
                status: "borrowed",
                borrower_id: currentUser.id,
                due_date: date.toDateString()
        }
      } else {
        return {...copy}
      }
    })
    const newBookStatus = { 
                        ...book,
                        copies: [...newCopies],
                      }
    const findUserIndex = users.findIndex((ele) => ele.id === currentUser.id);

    const newUserState = { 
                          ...users[findUserIndex],
                          current_loans: [
                                          ...currentUser.current_loans,
                                          {
                                            ...book,
                                            copies: copyId,
                                            due_date: date
                                          }
                                         ]
                         }
    
    const newUserStateNoPW = (({ password, ...o }) => o)(newUserState) // remove b and c


      borrowBook(book.id, newBookStatus)
        .then(response => {
          dataBooks.setBooks( dataBooks.books.map((ele) => {
              if(book.id === ele.id) {
                return response
              } else {
                return ele
              }
          })    
        )

        }).then( response => {
          updateUser(currentUser.id, newUserState)
          .then(response => { 
            setUsers(
              user.users.map((ele) => {
                if(currentUser.id === ele.id){
                  return response
                } else {
                  return ele
                }
              })
            )
          }) 
        }

        ).then( response => 
          setLoginStatusServer({
            login: true,
            user: {...newUserStateNoPW}
          }).then(response => {
             setLoginStatus(response)           
          })
        )                   
  }

  const status = book.copies.map((copy, i) => {

    return copy.status === "in_library" ? (
      <div key={copy.id}>
        
        {login === true ?
                          <button 
                            className="borrow-button" 
                            onClick={() => borrow(copy.id)}
                          >Borrow</button>
                        :
                          <p key={copy.id}>{i + 1}. Available </p>
                        }
      </div>
    ) : (
      <p key={copy.id}>{i + 1}. Borrowed &nbsp; </p>
    );
  });



  return (
    <Draggable>

    <div className="book-component">
      <div className="wrapper">
        <div className="book-cover">
          <img src={book.cover} alt="Book cover" />
        </div>
        <div className="book-info">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close">X</button>
          <h3>Author: {book.author}</h3>
          <h3>Title: {book.title}</h3>
          {book.subtitle ? (
            <>
              <h3>Subtitle: </h3>
              <p>{book.subtitle}</p>
            </>
          ) : (
            <></>
            )}
          <h3>Description:</h3>
          <p>{book.description}</p>
          <h3>Copies: {book.copies.length}</h3>
          <div className="book-copy">{status}</div>
        </div>
      </div>
      </div>
    </Draggable>
  );
};
export default BookComponent;
