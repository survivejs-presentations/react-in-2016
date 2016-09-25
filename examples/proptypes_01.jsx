import React from 'react';

const SawCat = ({ children, onClick, ...props }) => (
  ...
);
SawCat.propTypes = {
  children: React.PropTypes.element.isRequired,
  onClick: React.PropTypes.func
};
SawCat.defaultProps = {
  onClick: () => {}
};

export default SawCat;
