import { getBooks } from "./services/Communication";
import Header from "./Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import BookComponent from "./BookComponent";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="App">
      <Header /> {/* <Link> elements goes to Header component*/}
<BookComponent/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage books={books} />} />
      </Routes>
    </div>
  );
};

export default App;
