// Prop drilling: passing props down the component tree

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

const BookList = () => {
  const someValue = 'some value';
  const displayValue = () => {
    console.log(someValue);
  };

  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book key={book.id} {...book} displayValue={displayValue} />;
      })}
    </section>
  );
};

// events in vanilla js:
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function (e) {
//   access event object
//   do something when event fires
// });

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log('target:', e.target);
    console.log('value:', e.target.value);
    console.log('name:', e.target.name);
  };
  const handleButtonClick = (e) => {
    alert('button clicked');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(e.target.value);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit</button>
        <div>
          <button type='button' onClick={handleButtonClick}>
            Click Me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = ({ author, title, img, displayValue }) => {
  // console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} className='bookImage' />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
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
