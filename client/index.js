import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const styles = {
  divApp: {
    margin: '0 180px 0 180px',
    padding: '0 24px 0 24px'
  }
};

ReactDOM.render(
  <div style={styles.divApp}>
    <App/>
  </div>,
  document.getElementById('app')
);

