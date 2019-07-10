import React from 'react';
import Search from './Search';
import Rating from './Rating'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <header>
          <h4>357 Reviews</h4>
          <Rating />
          <Search />
        </header>
      </div>
    )
  }
};

export default App;