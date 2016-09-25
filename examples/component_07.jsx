import React from 'react';
import CatsSeen from './CatsSeen';
import SawCat from './SawCat';

class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
    this.sawCats = this.sawCats.bind(this);
  }
  render() {
    return (
      <div>
        <CatsSeen amount={this.state.amount} />
        <SawCat className="cat-button"
          amount={this.state.amount} onClick={this.sawCats} />
      </div>
    );
  }
  sawCats() {
    this.setState({
      amount: this.state.amount + 1
    });
  }
}

export default CatCounter;
