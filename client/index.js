import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import css from './styles/index.css';

// const styles = {
//   divApp: {
//     margin: '0 180px 0 180px',
//     padding: '0 24px 0 24px'
//   }
// };

ReactDOM.render(
  <div className='reviews-module'>
    <App/>
  </div>,
  document.getElementById('app')
);

