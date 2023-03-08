import React from 'react';
import { createRoot } from 'react-dom/client';

const Greeting = () => {
  return (
    <>
      <Person />
      <Message />
      <NestedNested />
    </>
  );
};

const Person = () => <h2>Matthew Woodard</h2>;
const Message = () => {
  return <p>Software Engineer</p>;
};
const NestedNested = () => {
  return (
    <>
      <Person />
      <Message />
    </>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
