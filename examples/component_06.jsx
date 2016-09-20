import React from 'react';

export default class CatsSeen extends React.Component {
  render() {
    const { amount, ...props } = this.props;

    return (
      <h2 {...props}>
        I've seen {amount} cats!
      </h2>
    )
  }
}
