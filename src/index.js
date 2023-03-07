import React from 'react';
import { createRoot } from 'react-dom/client';

const Greeting = () => {
  return <h1>Hello World</h1>;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
