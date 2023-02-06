import { useContext, useState } from "react";
import './MyPage.css'
import Modal from "react-modal";
import { BooksContext, UserContext } from "./App";
import { returnBook, updateCurrentLoans, updateUser } from "./services/Communication";
Modal.setAppElement("#root");

const MyPage = () => {
  const data = useContext(UserContext);
  const user = data.loginStatus.user;
  console.log("data to my page", data);
  const [isOpen, setIsOpen] = useState(false);
  const borrowedBooks = user.current_loans;
  const returnButton =() =>{

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
          <h2>Welcome to your page, {user.name}!</h2>
          {borrowedBooks.length === 0 ? <h2>You have no loans</h2>
                                          : <h2>Your current loans: {borrowedBooks.length}</h2>}
          {(borrowedBooks.length>0)?(
            <table className="myPage-table">
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Return</th>
                  
                </tr> 
                </thead> 
                {borrowedBooks.map (borrowedBook => 
                  
                  <tr>
                      <td>{borrowedBook.title}</td>
                      <td>{borrowedBook.author}</td>
                      <td><button onClick={()=> returnButton(borrowedBook.id)} className="return-button">Return</button></td>
                      </tr>)}
                </table>

          ) : (<h2></h2>) }
          
    </div>
  )
}
export default MyPage;

