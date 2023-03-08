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

const author = 'Adam Wallace';
const Book = () => {
  const title = 'How to Catch a Leprechaun';
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        alt='Book Cover'
      />
      <h2>{title}</h2>
      <h2>{author.toUpperCase()}</h2>
      {/* must be expression, not statement. expression returns a value */}
      {/* the below throws error - statement. no value returned */}
      {/* <p>{let x = 6}</p> */}
      {/* below returns value so it works */}
      {/* <p>{6 + 6}</p> */}
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
