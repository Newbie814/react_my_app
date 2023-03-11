import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Adam Wallace',
    title: 'How to Catch a Leprechaun',
    img: 'https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book author={book.author} title={book.title} img={book.img} />;
      })}
    </section>
  );
};

const Book = ({ author, title, img }) => {
  // console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} className='bookImage' />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
