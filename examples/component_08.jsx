import React from 'react';
import CatsSeen from './CatsSeen';
import SawCat from './SawCat';

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
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
  // Stage 2 syntax - property initializer
  sawCats(amount) => {
    this.setState({ amount: amount + 1 });
  };
}
