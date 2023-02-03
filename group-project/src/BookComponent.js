import "./BookComponent.css";
import { BooksContext, UserContext } from "./App";
import { useContext} from "react";
import { borrowBook, getBooks, getUsers, setLoginStatusServer, updateUsers } from "./services/Communication";

const BookComponent = ({ id, setIsOpen }) => {
  

  const user = useContext(UserContext);
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
                due_date: date.toISOString()
        }
      } else {
        return {...copy}
      }
    })
    const newStatus = { 
                        ...book,
                        copies: [...newCopies]
                      }

    const newUserState = { 
                          ...currentUser,
                          current_loans: [
                                          ...currentUser.current_loans,
                                          {
                                            ...book,
                                            copies: copyId
                                          }
                                         ]
                         }
       

      borrowBook(book.id, newStatus)
        .then(response => console.log("borrow book", response))  // kirja objekti borrowed 
      
        
      setTimeout(() => { 
        getBooks()
        .then(response => {
          dataBooks.setBooks(response);
          console.log("getBook", response) // kirja lista arr päivitetty borrowed 
        })
      }, "500")        
             
      setTimeout(() => { 
        updateUsers(currentUser.id, newUserState)
        .then(response => console.log("update user", response)) // user objeckti loan added 
      }, "1000")     
                               
      setTimeout(() => {
        getUsers()
          .then(response => {
                              setUsers([...response]);
                              console.log("get user", response)  // ekana, vanha lista  
                            })
      }, "1500")     
  
      setTimeout(() => {
        setLoginStatusServer({
                              login: true,
                              user: {...newUserState}
                             }).then(response => {
                              setLoginStatus(response)
                              console.log("setloginstatus", response)  // loginstatus object             
                             })
      }, "2000")
                                
   
                       
  }
  console.log("borrowed")

  const status = book.copies.map((copy, i) => {
    return copy.status === "in_library" ? (
      <div key={copy.id}>
        {i + 1}. In library
        <button className="borrow-button" onClick={() => borrow(copy.id)}>Borrow</button>
      </div>
    ) : (
      <p key={copy.id}>{i + 1}. Borrowed &nbsp; </p>
    );
  });



  return (
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
          <div className="book-copy wrapper">{status}</div>
        </div>
      </div>
    </div>
  );
};
export default BookComponent;
