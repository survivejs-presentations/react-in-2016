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
        <input type="text" ref="amount" />
        <CatsSeen amount={this.state.amount} />
        <SawCat className="cat-button"
          amount={this.state.amount} onClick={this.sawCats} />
      </div>
    );
  }
  sawCats(amount) => {
    this.setState({ amount: amount + parseInt(this.refs.amount, 10) });
  };
}
