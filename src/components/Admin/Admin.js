import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios');

const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const bookData = {
      title: data.title,
      author: data.author,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addBook`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookData),
    }).then((res) => console.log('server side reponse', res));
  };

  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '5aaaddefebdfb8bdc581dde6185be518');
    imageData.append('image', event.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="new title" {...register('title')} />
        <input defaultValue="new author" {...register('author')} />
        <input type="number" {...register('price', { valueAsNumber: true })} />

        {/* <input defaultValue="test" {...register('example')} />
        <br />
        <input defaultValue="test" {...register('example')} />
        <br />
        <input defaultValue="test" {...register('example')} />
        <br /> */}

        <input type="file" onChange={handleImgUpload} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
