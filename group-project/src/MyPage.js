import { useContext, useState } from "react";
import './MyPage.css'
import Modal from "react-modal";
import { BooksContext, UserContext } from "./App";
import { returnBook, updateUser, setLoginStatusServer } from "./services/Communication";
import MyBorrowedBooks from "./MyBorrowedBooks";
Modal.setAppElement('#root');


const MyPage = () => {
  const data = useContext(UserContext);
  const dataBooks = useContext(BooksContext);
  const currentUser = data.loginStatus.user;
  const user = useContext(UserContext);
  const users = user.users;
  const setLoginStatus = user.setLoginStatus;
  //const login = user.loginStatus.login;
  const setUsers = user.setUsers;

  const [isOpen, setIsOpen] = useState(false);
  const borrowedBooks = currentUser.current_loans;



  const returnButton =(borrowedBook) =>{
    const currentCopyId=borrowedBook.copies;
    //console.log(currentCopyId);
    const currentBookIndex = dataBooks.books.findIndex(ele => ele.id === borrowedBook.id);
    const book = dataBooks.books[currentBookIndex];
    const currentCopyIndex = book.copies.findIndex(ele => ele.id === currentCopyId);
    const currentCopy = book.copies[currentCopyIndex];
    //console.log(currentCopy);

    const findUserIndex = users.findIndex((ele) => ele.id === currentUser.id);
    // console.log(findUserIndex);   8 - correct

    const currentBookIndexInUsers = users[findUserIndex].current_loans.findIndex(ele => ele.id === borrowedBook.id);
    //console.log(currentBookIndexInUsers); 0 and 1 - correct

    const currentBookInUsers = currentUser.current_loans[currentBookIndexInUsers];
    //console.log(currentBookInUsers); title Book ... correct

    users[findUserIndex].current_loans.splice(currentBookIndexInUsers, 1);
    console.log(users[findUserIndex].current_loans);

    const newUserState = { 
      ...users[findUserIndex]
     }
    
    const newCopies =  book.copies.map((copy) => {
      if(copy.id === currentCopyId) {
        return { ...copy,
                status: "in_library",
                borrower_id: null,
                due_date: null,
        }
      } else {
        return {...copy}
      }
    })
    //console.log(newCopies);
    const newBookStatus = { 
      ...book,
      copies: [...newCopies]
    }

    const newUserStateNoPW = (({ password, ...o }) => o)(newUserState) // remove b and c
    
    returnBook(book.id, newBookStatus)
        .then(response => {
          dataBooks.setBooks( dataBooks.books.map((ele) => {
              if(book.id === ele.id) {
                return response
              } else {
                return ele
              }
          }))
        })
        .then( response => {
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
        )
        .then( response => 
          setLoginStatusServer({
            login: true,
            user: {...newUserStateNoPW}
          }).then(response => {
             setLoginStatus(response)           
          })
        )       
  }

  return (
    <div className="mypage">
      <Modal className="mypagemodal"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="MyPage element">
      <h3>Logged out successfully.</h3>
      <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
          <h2>Welcome to your page, {currentUser.name}!</h2>
          {borrowedBooks.length === 0 ? <h2>You have no loans</h2>
                                          : <h2>Your current loans: {borrowedBooks.length}</h2>}
          {(user.current_loans.length>0) }
        
          {(borrowedBooks.length>0)?(
            <table className="myPage-table">
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Due date</th>
                </tr> 
            </thead> 
                {borrowedBooks.map (borrowedBook => 
                  
                  <tr>
                      <td>{borrowedBook.title}</td>
                      <td>{borrowedBook.author}</td>
                      <td>{borrowedBook.due_date}</td>
                    {<button className="borrow-button">Renew</button>}
                    {<button onClick={()=> returnButton(borrowedBook)} className="return-button">Return</button>}
                  </tr>)}
                </table>

          ) : (<h2></h2>) }
          
    </div>
  )
}
export default MyPage;

