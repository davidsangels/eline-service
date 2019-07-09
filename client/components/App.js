import React from 'react';
import Search from './Search';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <header>
          <h4>357 Reviews</h4>
          <div>stars</div>
          <Search />
        </header>
      </div>
    )
  }
};

export default App;