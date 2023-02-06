import { UserContext } from "./App";
import { useContext, useState } from "react";
import "./MyPage.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const MyPage = () => {
  const data = useContext(UserContext);
  const user = data.loginStatus.user;
  console.log("data to my page", data);
  const [isOpen, setIsOpen] = useState(false);
  const borrowedBooks = user.current_loans;

  return (
    <div className="mypage">
      <Modal
        className="mypagemodal"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="MyPage element"
      >
        <h3>Logged out successfully.</h3>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
      <h2>Welcome to your page, {user.name}!</h2>
      {user.current_loans.length === 0 ? (
        <h2>You have no loans</h2>
      ) : (
        <h2>Your current loans: {borrowedBooks.length}</h2>
      )}
      {user.current_loans.length > 0}
      {borrowedBooks.map((borrowedBook) => (
        <table className="myPage-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tr>
            <td>{borrowedBook.title}</td>
            <td>{borrowedBook.author}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};
export default MyPage;
