import LandingPage from "./LandingPage"; /* Landing Page Imported Here */
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SearchPage = () => {};

/* Searchpage component, will be imported */

const App = () => {
  return (
    <div className="App">
      <Header /> {/* <Link> elements goes to Header component*/}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
