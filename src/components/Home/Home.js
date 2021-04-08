import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://arcane-shelf-91213.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="row m-4">
      {books.length === 0 && (
        <div style={style}>
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {books.map((book) => (
        <Books key={book.title} book={book}></Books>
      ))}
    </div>
  );
};

export default Home;
