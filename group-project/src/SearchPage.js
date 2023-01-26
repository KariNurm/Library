import {useState} from "react";
import Modal from "react-modal";
import "./SearchPage.css"
import BookComponent from "./BookComponent";

const SearchPage= ({books}) => {
    const [searchISBN, setSearchISBN] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");
    const [searchPageCount, setSearchPageCount] = useState("");

    const handleISBN = (event) => {
        event.preventDefault();
        setSearchISBN(event.target.value)
    };
    
    const handleTitle = (event) => {
        event.preventDefault();
        setSearchTitle(event.target.value)
    };
    
    const handleAuthor = (event) => {
        event.preventDefault();
        setSearchAuthor(event.target.value)
    };
    
    const handlePageCount = (event) => {
        event.preventDefault();
        setSearchPageCount(event.target.value)
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // const handleLess = (event) => {
        //     event.preventDefault();
        //     if (book.pagecount <= searchPageCount) {
    //         return true;
    //     } else {
        //         return false;
    //     }
    // }
    <BookComponent/>
    return (
        <>  
            <div className="searchPage">
            <h1>Search for books</h1> 
            <p>ISBN: </p>
            <input
                type = "search"
                placeholder = "Search with an ISBN"
                onChange = {handleISBN}
                value = {searchISBN}
                />
            <p>Title: </p>
            <input
                type = "search"
                placeholder = "Search with a title"
                onChange = {handleTitle}
                value = {searchTitle}
                />
            <p>Author: </p>
            <input
                type = "search"
                placeholder = "Search with an author"
                onChange = {handleAuthor}
                value = {searchAuthor}
                />
            <p>Page Count: </p>
            <input
                type = "search"
                placeholder = "Search with a pagecount"
                onChange = {handlePageCount}
                value = {searchPageCount}
                />
            <button onClick={handleSubmit}>{"<="}</button>
            <button onClick={handleSubmit}>{">="}</button>
            <br/>
            <button>Show booksearch results</button>

            <table>
                <tr>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Pages</th>
                </tr>

                {books.filter(book => { //Filter the books on title.
                if (searchISBN === "" && searchTitle === "" && searchAuthor === "") {
                    return false;
                } else if (
                    book.title.toLowerCase().includes(
                    searchTitle.toLowerCase()) &&
                    book.author.toLowerCase().includes(
                        searchAuthor.toLowerCase()
                        )) {
                            return true;
                        } else {
                            return false;
                        }
                    }).map((books, id) => (
                        <tr key={id}>
                        <td>{books.isbn}</td>
                        <td>{books.title}</td>
                        <td>{books.subtitle}</td>
                        <td>{books.author}</td>
                        <td>{books.publisher}</td>
                        <td>{books.pages}</td>
                    </tr>
                ))}
            </table>
    </div>
        </>
    )
}

export default SearchPage;