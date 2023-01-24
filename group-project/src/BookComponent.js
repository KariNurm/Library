import './BookComponent.css'
import bookCover from './bookCover.png'
const BookComponent = () => {
    const copies = [
		{
			"id": "1",
			"status": "in_library",
			"borrower_id": null,
			"due_date": null
		}
	]

    return (
        <div className = "book-component">
            <div className = "wrapper">
                <div className = "book-cover">
                    <img src={bookCover} alt="Book cover" />
                </div>
                <div className = "book-info">
                    <h3> the author of the book</h3>
                    <h3>Book title</h3>
                    <h3>Subtitle</h3>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut iaculis sem. 
                        Sed quis interdum turpis. Aliquam enim velit, aliquet at eros a, tempor hendrerit orci.
                        Aliquam imperdiet nisl iaculis, laoreet ex interdum, ornare elit. Phasellus ac vehicula 
                        mauris. Vestibulum faucibus ante lacus, porttitor finibus felis condimentum sagittis. 
                        Sed sodales tellus imperdiet consectetur pharetra. Proin aliquet nisl quis enim finibus 
                        aliquam. Cras consequat leo at augue laoreet, eget lacinia orci vehicula. Praesent vitae 
                        quam metus. Vestibulum dolor odio, commodo ut eleifend sit amet, consectetur a justo. 
                        Donec sit amet justo vel lacus mollis vehicula quis id lacus.</p>
            <h3>copies</h3>
            <ul>
                <p>copy1</p>
                <button>Borrow</button>
                <p>copy2</p>
                <button>Borrow</button>
            </ul>
                </div>
            </div>
        </div>
    )
}
export default BookComponent;