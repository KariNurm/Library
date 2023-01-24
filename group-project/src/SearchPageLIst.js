import {useState} from "react";
import "./SearchPageList.css"

const SearchPageList = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");
    const [searchPageCount, setSearchPageCount] = useState("");

    const [submitted, setSubmitted] = useState("");

    const books = [
        {
            "isbn": "9781593275846",
            "title": "Eloquent JavaScript, Second Edition",
            "subtitle": "A Modern Introduction to Programming",
            "author": "Marijn Haverbeke",
            "published": "2014-12-14T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 472,
            "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
            "website": "http://eloquentjavascript.net/",
        },
        {
            "isbn": "9781449331818",
            "title": "Learning JavaScript Design Patterns",
            "subtitle": "A JavaScript and jQuery Developer's Guide",
            "author": "Addy Osmani",
            "published": "2012-07-01T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 254,
            "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
            "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
        },
        {
            "isbn": "0679722769",
            "title": "Ulysses",
            "author": "James Joyce",
            "published": "1922-02-02T00:00:00.000Z",
            "publisher": "Sylvia Beach",
            "pages": 730,
            "description": "Ulysses is a modernist novel by Irish writer James Joyce. It was first serialised in parts in the American journal The Little Review from March 1918 to December 1920 and then published in its entirety in Paris by Sylvia Beach on 2 February 1922, Joyce's 40th birthday."
        }
    ]

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

    return (
        <>
            <h1>Search for books</h1>
            <p>Title</p>
            <input
                type = "search"
                placeholder = "Search with a title"
                onChange = {handleTitle}
                value = {searchTitle}
                />
            <p>Author</p>
            <input
                type = "search"
                placeholder = "Search with an author"
                onChange = {handleAuthor}
                value = {searchAuthor}
                />
            <p>Page Count</p>
            <input
                type = "search"
                placeholder = "Search with a pagecount"
                onChange = {handlePageCount}
                value = {searchPageCount}
                />
            <button onClick={handleSubmit}>{"<="}</button>
            <button onClick={handleSubmit}>{">"}</button>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        
            <table>
                <tr>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th>Publisher</th>
                    <th>Pages</th>
                    <th>Description</th>
                    <th>Website</th>
                </tr>

                {books.filter(book => { //Filter the books on title.
                if (searchTitle === "" && searchAuthor === "") {
                        return true;
                    } else if (book.title.toLowerCase().includes(
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
                        <td>{books.published}</td>
                        <td>{books.publisher}</td>
                        <td>{books.pages}</td>
                        <td>{books.description}</td>
                        <td>{books.website}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default SearchPageList;