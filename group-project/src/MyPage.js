import { UserContext } from "./App";
import { useContext, useState } from "react";
// import './MyPage.css'
import Modal from "react-modal";
Modal.setAppElement('#root');


const MyPage = () => {
  
  const data = useContext(UserContext);
  const user = data.loginStatus.user;
  console.log("data to my page", data)
  const [isOpen, setIsOpen] = useState(false);

  return <div className="mypage">
      <Modal className="mypagemodal"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="MyPage element"
                >
      <h3>Logged out successfully.</h3>
      <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
          <h2>Welcome to your page {user.name}</h2>
          {user.book_history.length === 0 ? <h2>You have no loans</h2>
                                          : <h2>Your current loans: {user.book_history.length}</h2>}
          <h1>list of books here...</h1>
          <Link to="/">
          <button onClick={() => setIsOpen(true)}>Sign Out</button>
          </Link>
         </div>
}

export default MyPage;