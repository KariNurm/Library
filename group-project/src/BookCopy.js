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
        
        {copies.status === "in_library" ?
            <div>
                In library
                <button className="borrow-button">Borrow</button> 
            </div>
        : <p>{copies.status}</p>
        }
    </div>
    )
}
export default BookCopy;