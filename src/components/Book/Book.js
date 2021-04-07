import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Book = () => {
  const { bookType } = useParams();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Let's buy a {bookType} Book.</h1>
      <p>
        Want a <Link to="/home">different book?</Link>{' '}
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>1</td>
            <td>price</td>
          </tr>

          <tr>
            <td colSpan="2">Total</td>
            <td>Total Price</td>
          </tr>
        </tbody>
      </Table>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
};

export default Book;
