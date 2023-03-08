import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const author = 'Adam Wallace';
const title = 'How to Catch a Leprechaun';
const img =
  'https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

// arguments
someFunc('hello', 'world');

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
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
