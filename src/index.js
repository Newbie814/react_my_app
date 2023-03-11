import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    author: 'Adam Wallace',
    title: 'How to Catch a Leprechaun',
    img: 'https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 2,
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
];

// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         const { author, title, img, id } = book;
//         return <Book key={id} author={author} title={title} img={img} />;
//       })}
//     </section>
//   );
// };

// by spreading the book object we can pass all the properties of the book object to the Book component
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
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
