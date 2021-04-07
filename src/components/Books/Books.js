import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Books.css';

const Books = ({ book }) => {
  const history = useHistory();

  const handleBook = (_id) => {
    history.push(`/book/${_id}`);
  };
  return (
    <div className="col-md-4">
      <Card className="my-2">
        <img className="img" src={book.imageURL} alt="" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <p>By {book.author}</p>
          <div className="d-flex justify-content-between">
            <h3> $ {book.price}</h3>
            <Button onClick={() => handleBook(book._id)} variant="primary">
              Buy Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Books;
