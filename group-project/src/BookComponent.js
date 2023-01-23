import './BookComponent.css'
import bookCover from './bookCover.png'
const BookComponent = () => {
    return (
        <div className = "book-component">
            <div className = "wrapper">
                <div className = "book-cover">
                    <img src={bookCover} alt="Book cover" />
                </div>
                <div>
                    <h3>Author</h3>
                    <h3>Title</h3>
                    <h3>Subtitle</h3>
                    <h3>Description</h3>
                </div>
            </div>
            <h3>copies</h3>
            <ul>
                <p>copy1</p>
                <p>copy2</p>
                <button>Borrow</button>
            </ul>
        </div>
    )
}
export default BookComponent;