import React from 'react';

export default class SawCat extends React.Component {
  static propTypes = {
    amount: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}
