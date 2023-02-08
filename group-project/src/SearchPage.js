import { useState, useContext } from "react";
import Modal from "react-modal";
import "./SearchPage.css";
import BookComponent from "./BookComponent";
import { motion } from 'framer-motion'
import { BooksContext } from "./App";

Modal.setAppElement("#root");

const SearchPage = () => {
  const books = useContext(BooksContext).books;

  const [searchISBN, setSearchISBN] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [revealedBooks, setRevealedBooks] = useState([]);

  const handleISBN = (event) => {
    event.preventDefault();
    setSearchISBN(event.target.value);
  };

  const handleTitle = (event) => {
    event.preventDefault();
    setSearchTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    event.preventDefault();
    setSearchAuthor(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState({});

  const closeElement = () => setIsOpen(false);

  const filteredBooks = books.filter((book) => {
    if (searchISBN === "" && searchTitle === "" && searchAuthor === "") {
      return false;
    } else if (
      book.isbn.includes(searchISBN) &&
      book.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      book.author.toLowerCase().includes(searchAuthor.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  const showBooks = (event) => {
    event.preventDefault();
    setRevealedBooks(filteredBooks);
  };

  const clearAll = () => {
    setSearchAuthor("");
    setSearchISBN("");
    setSearchTitle("");
  };


  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   setSearchISBN(e.target.value);
  //   showBooks(e);
  //   // send state to server with e.g. `window.fetch`
  // }

  return (
    <motion.div
    className="container text-center  bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >
    <>
      <Modal
        className="modal"
        isOpen={isOpen}
        onRequestClose={closeElement}
        contentLabel="Book element"
      >
        <BookComponent setIsOpen={setIsOpen} id={currentElement} />
      </Modal>

      <div className="searchPage">
        <form>
          <h1 className="title">Search for books</h1>
          <p>ISBN: </p>
          <input
            type="search"
            placeholder="Search with an ISBN"
            onChange={handleISBN}
            value={searchISBN}
          />
          <p>Title: </p>
          <input
            type="search"
            placeholder="Search with a title"
            onChange={handleTitle}
            value={searchTitle}
          />
          <p>Author: </p>
          <input
            type="search"
            placeholder="Search with an author"
            onChange={handleAuthor}
            value={searchAuthor}
          />
        <br />

        <div className="button">
          <div>
            <button className="clear-button" onClick={clearAll}>
              Clear all the input boxes
            </button>
          </div>
          <div>
            <button className="show-button" type="button">
              Submit
            </button>
          </div>
        </div>
        </form>

        <div className="owlImage"></div>
        <div className="detectiveImage"></div>

        <p>Click on the row of the book for more info.</p>
          <table>
            {searchISBN === "" && searchTitle === "" && searchAuthor === "" ? (
              <></>
            ) : (
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Subtitle</th>
                  <th>Author</th>
                  <th>Publisher</th>
                  <th>Pages</th>
                </tr>
              </thead>
            )}

            {revealedBooks.map((books) => (
              <tbody key={books.isbn} className="tableElement">
                <tr
                  onClick={() => {
                    setCurrentElement(books.id);
                    setIsOpen(true);
                  }}
                >
                  <td>{books.isbn}</td>
                  <td>{books.title}</td>
                  <td>{books.subtitle}</td>
                  <td>{books.author}</td>
                  <td>{books.publisher}</td>
                  <td>{books.pages}</td>
                </tr>
              </tbody>
            ))}
          </table>
      </div>
    </>
    </motion.div>
  );
};

export default SearchPage;
