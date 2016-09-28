import React from 'react';

class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        `I've seen ${this.state.amount} cats`
      ),
      React.createElement(
        "button",
        { type: "button", className: "cat-button", onClick: this.sawCat },
        "Saw a Cat"
      )
    );
  }
  sawCat() {
    this.setState({
      amount: this.state.amount + 1
    });
  }
}

export default CatCounter;
