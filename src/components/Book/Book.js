import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Book = () => {
  const { _id } = useParams();

  const [checkout, setCheckout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckout(data);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {checkout.map((book) => (
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{book.title}</td>
              <td>1</td>
              <td> $ {book.price}</td>
            </tr>

            <tr>
              <td colSpan="2">Total</td>
              <td> $ {book.price}</td>
            </tr>
          </tbody>
        </Table>
      ))}

      <button className="btn btn-primary">Checkout</button>

      <p>
        Want a <Link to="/home">different book?</Link>{' '}
      </p>
    </div>
  );
};

export default Book;
