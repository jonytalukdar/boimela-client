import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBook = ({ book }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://arcane-shelf-91213.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-5">
          <Link to="/admin">Add Book</Link>
        </div>
        <div className="col-md-7">
          <div className="d-flex justify-content-between mb-2">
            <strong>Book Name</strong>
            <strong>Author Name</strong>
            <strong>Price</strong>
            <strong>Action</strong>
          </div>
          {books.map((list) => (
            <div className="d-flex justify-content-between">
              <p>{list.title}</p>
              <p>{list.author}</p>
              <p>{list.price}</p>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageBook;
