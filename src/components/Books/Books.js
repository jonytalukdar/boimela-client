import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Books = ({ book }) => {
  const history = useHistory();
  const handleBook = (bookType) => {
    history.push(`/book/${bookType}`);
  };
  return (
    <Card className="col-md-4">
      <Card.Img variant="top" src={book.imageURL} alt="" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <p>By {book.author}</p>
        <div className="d-flex justify-content-between mx-3">
          <h3> $ {book.price}</h3>
          <Button onClick={() => handleBook(book.bookType)} variant="primary">
            Buy Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Books;
