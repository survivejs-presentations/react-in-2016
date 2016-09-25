import React from 'react';

class CatCounter extends React.Component {
  state = { amount: 0 }
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
  sawCat = () => {
    this.setState(
      prevState => ({
        amount: prevState.amount + 1
      })
    );
  }
}

export default CatCounter;
