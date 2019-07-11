import React from 'react';
import Search from './Search';
import Rating from './Rating';
import Attributes from './Attributes';
import Reviews from './Reviews';
import Pagination from './Pagination';
import {mockData} from '../sampleData';

const numBtn = Math.ceil(mockData.length/7);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeBtn: 1
    }
  }

  render(){
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h4>357 Reviews</h4>
          <Rating />
          <Search />
        </div>
        <hr />
        <Attributes />
        <Reviews reviews={mockData} />
        <Pagination
          numBtn={numBtn}
          activeBtn={this.state.activeBtn}
        />
      </div>
    )
  }
};

export default App;