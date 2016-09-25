import React from 'react';
import CatsSeen from './CatsSeen';
import SawCat from './SawCat';

class CatCounter extends React.Component {
  state = { amount: 0 } // Stage 2 syntax - property initializer
  render() {
    return (
      <div>
        <CatsSeen amount={this.state.amount} />
        <SawCat className="cat-button"
          amount={this.state.amount} onClick={this.sawCats} />
      </div>
    );
  }
  // Stage 2 syntax - property initializer
  sawCats = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 1
    }));
  }
}

export default CatCounter;
