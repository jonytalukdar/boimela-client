import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
  const { bookType } = useParams();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Let's buy a {bookType} Book.</h1>
      <p>
        Want a <Link to="/home">different book?</Link>{' '}
      </p>
    </div>
  );
};

export default Book;
