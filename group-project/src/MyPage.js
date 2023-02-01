import { UserContext } from "./App";
import { useContext } from "react";
// import './MyPage.css'


const MyPage = () => {
  const data = useContext(UserContext);
  const user = data.loginStatus.user;
  console.log("data to my page", data)

  return <div className="mypage">
          <h2>Welcome to your page {user.name}</h2>
          {user.book_history.length === 0 ? <h2>You have no loans</h2>
                                          : <h2>Your current loans: {user.book_history.length}</h2>}
          <h1>list of books here...</h1>
         </div>
}

export default MyPage;