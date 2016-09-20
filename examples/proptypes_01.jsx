import React from 'react';

const SawCat = ({ amount, onClick, ...props }) => (
  ...
);
SawCat.propTypes = {
  amount: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
};
SawCat.defaultProps = {
  onClick: () => {}
};

export default SawCat;
