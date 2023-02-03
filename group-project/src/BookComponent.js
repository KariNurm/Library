import { useState } from 'react';
import './BookComponent.css'
import { setBookBorrowStatus } from './services/Communication';
import Draggable, {DraggableCore} from 'react-draggable';

const BookComponent = ({ book, setIsOpen, setCurrentElement}) => {

  const borrow = (id) => {
    const newCopies = book.copies.map(copy => {
      if (copy.id === id) {
        copy.status = "borrowed";
      }
      
    })
    
  }

  const status = book.copies.map((copy, i) => {

    return copy.status === "in_library" ? (
      <div key={copy.id}>
        {i + 1}. In library
        <button className="borrow-button" onClick={(borrow)}>Borrow</button>
      </div>
    ) : (
      <p>{i + 1}. Borrowed </p>
    );
  });

  return (
    <Draggable>
      <div className="book-component">
        <div className="wrapper">
          <div className="book-cover">
            <img src={book.cover} alt="Book cover" />
          </div>
          <div className="book-info">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close">X</button>
            <h3>Author: {book.author}</h3>
            <h3>Title: {book.title}</h3>
            {book.subtitle ? (
              <>
                <h3>Subtitle: </h3>
                <p>{book.subtitle}</p>
              </>
            ) : (
              <></>
              )}
            <h3>Description:</h3>
            <p>{book.description}</p>
            <h3>Copies: {book.copies.length}</h3>
            <div className="book-copy">{status}</div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default BookComponent;
