import BorrowButton from './BorrowButton'
const BookCopy = () => {
    const copies = [
		{
			"id": "1",
			"status": "in_library",
			"borrower_id": null,
			"due_date": null
		}
	]
    return(
    <>
        
        {copies.status}
        <p>tämä on kirja, jonka voi lainata</p>
        if (copies.status === "in_library") {
        <BorrowButton/>
        
        }
    </>
    )
}
export default BookCopy;