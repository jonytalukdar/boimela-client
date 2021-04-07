import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="row m-4">
      {books.map((book) => (
        <Books key={book.title} book={book}></Books>
      ))}
    </div>
  );
};

export default Home;
