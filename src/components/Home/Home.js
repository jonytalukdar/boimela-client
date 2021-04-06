import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
  // const style = {
  //   display: 'flex',
  //   margin: '40px',
  //   justifyContent: 'space-between',
  // };

  const books = [
    {
      title: 'title one',
      imgUrl: 'img1.png',
      price: 120,
      quantity: 1,
    },
    {
      title: 'title two',
      imgUrl: 'img2.png',
      price: 130,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img3.png',
      price: 320,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img4.png',
      price: 321,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img5.png',
      price: 110,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img6.png',
      price: 200,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img7.png',
      price: 310,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img8.png',
      price: 321,
      quantity: 1,
    },
    {
      title: 'title one',
      imgUrl: 'img9.png',
      price: 210,
      quantity: 1,
    },
  ];

  return (
    <div className="row">
      {books.map((book) => (
        <Books key={book.bookType} book={book}></Books>
      ))}
    </div>
  );
};

export default Home;
