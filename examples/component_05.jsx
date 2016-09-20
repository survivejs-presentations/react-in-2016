import React from 'react';

export default React.createClass({
  displayName: 'CatsSeen',
  render() {
    const { amount, ...props } = this.props;

    return (
      <h2 {...props}>
        I've seen {amount} cats!
      </h2>
    )
  }
});
