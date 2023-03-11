import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const firstBook = {
  author: 'Adam Wallace',
  title: 'How to Catch a Leprechaun',
  img: 'https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
};

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illo
          distinctio corporis, dolorem tenetur iure sit, incidunt odio ullam
          alias sed delectus eum eligendi autem. Doloremque distinctio officiis
          quae repellat.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};
// a;ternative way to write the below code
// const Book = (props) => {
//   const { author, title, img } = props;
//   return (
//     <article className='book'>
//       <img src={img} alt={title} className='bookImage' />
//       <h2>{title}</h2>
//       <h2>{author}</h2>
//     </article>
//   );
// };

const Book = ({ author, title, img, children }) => {
  // console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} className='bookImage' />
      <h2>{title}</h2>
      <h2>{author}</h2>
      {children}
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
