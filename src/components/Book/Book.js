import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Book = () => {
  const { _id } = useParams();
  const [checkout, setCheckout] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://arcane-shelf-91213.herokuapp.com/books/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckout(data);
      });
  }, []);

  const handleCheckOut = () => {
    const newCheckout = { ...loggedInUser, ...checkout };
    fetch('https://arcane-shelf-91213.herokuapp.com/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCheckout),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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

      <button onClick={handleCheckOut} className="btn btn-primary">
        Checkout
      </button>
    </div>
  );
};

export default Book;
