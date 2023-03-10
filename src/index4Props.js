import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const author = 'Adam Wallace';
const title = 'How to Catch a Leprechaun';
const img =
  'https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

// parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };

// arguments
// someFunc('hello', 'world');

// const BookList = () => {
//   return (
//     <section className='booklist'>
//       <Book job='developer' />
//       <Book bookName='random' number={22} />
//     </section>
//   );
// };

const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = ({ author, title, img }) => {
  // console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );

  // traditional with props keyword
  // const Book = (props) => {
  //   console.log(props);
  //   return (
  //     <article className='book'>
  //       <img src={img} alt={title} />
  //       <h2>{title}</h2>
  //       <h2>{author}</h2>
  //       {/* {console.log(props)} */}
  //       <p>{props.job}</p>
  //       <p>{props.bookName}</p>
  //       <p>{props.number}</p>
  //     </article>
  //   );

  // Destructuring
  // const Book = ({ job, bookName, number }) => {
  //   // console.log(props);
  //   return (
  //     <article className='book'>
  //       <img src={img} alt={title} />
  //       <h2>{title}</h2>
  //       <h2>{author}</h2>
  //       {/* {console.log(props)} */}
  //       <p>{job}</p>
  //       <p>{bookName}</p>
  //       <p>{number}</p>
  //     </article>
  //   );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
