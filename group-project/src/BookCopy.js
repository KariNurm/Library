const BookCopy = () => {
    const copies = 
		{
			"id": "1",
			"status": "in_library",
			"borrower_id": null,
			"due_date": null
		}
	
    return(
    <div className='book-copy wrapper'>
        
        <p>{copies.status}</p>
        {copies.status === "in_library" &&
            <button className="borrow-button">
            Borrow
        </button>
        }
    </div>
    )
}
export default BookCopy;