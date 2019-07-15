import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import css from './styles/index.css';

ReactDOM.render(
  <div className='reviews-module'>
    <App/>
  </div>,
  document.getElementById('reviews')
);