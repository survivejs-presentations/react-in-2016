// Modified to work with webpackbin!
import React from 'react';
import SawCat from './SawCat';

class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };
    this.sawCats = this.sawCats.bind(this);
  }
  render() {
    return (
      <div>
        <input type="text" ref={e => {
          if (e) {
            this.refs.amount = e;
          }
        }} />
        <div>{this.state.amount}</ div>
        <SawCat className="cat-button" onClick={this.sawCats}>
          Saw a cat
        </SawCat>
      </div>
    );
  }
  sawCats() {
    this.setState(prevState => ({
      amount: prevState.amount + parseInt(this.refs.amount.value, 10)
    }));
  }
}

export default CatCounter;
