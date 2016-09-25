import React from 'react';

class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    return (
      <div>
        <h2>I've seen {this.state.amount} cats</h2>
        <button type="button" className="cat-button" onClick={this.sawCat}>
          Saw a Cat
        </button>
      </div>
    );
  }
  sawCat() {
    this.setState({
      amount: this.state.amount + 1
    });
  }
}

export default CatCounter;
