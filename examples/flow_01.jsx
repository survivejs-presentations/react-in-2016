import React from 'react';

export default class SawCat extends React.Component {
  static propTypes = {
    children: any,
    onClick?: Function
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}
