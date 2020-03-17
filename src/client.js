import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App initialText="rendered on the client side!" />,
  document.getElementById('app')
);
