import React from 'react';

export default class SawCat extends React.Component {
  static propTypes = {
    amount: number,
    onClick?: Function
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}
