
import { useState } from "react";
import './MyPage.css'
import Modal from "react-modal";
import { motion } from 'framer-motion'
import MyBorrowedBooks from "./MyBorrowedBooks";
Modal.setAppElement('#root');


const MyPage = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const data = JSON.parse(localStorage.getItem("user"));
  const user = data.user;
  console.log("data to my page", data);
  const borrowedBooks = user.current_loans;


  return (
    <motion.div
    className="container text-center  bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >

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
                    {<button className="borrow-button">Return</button>}
                      </tr>)}
                </table>

          ) : (<h2></h2>) }
          
    </div>
  </motion.div>
  )
}
export default MyPage;
