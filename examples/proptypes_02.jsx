import React from 'react';

class SawCat extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    onClick: React.PropTypes.func
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}

export default SawCat;
