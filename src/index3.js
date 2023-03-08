import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
// styling options
const Image = () => (
  // external css
  <img
    src='https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    alt='Book Cover'
  />
);
// css object
const inLineHeadingStyles = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
};
const Title = () => (
  <h2 style={{ inLineHeadingStyles }}>How to Catch a Leprechaun</h2>
);
// inline css
const Author = () => (
  <h2 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Adam Wallace
  </h2>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
