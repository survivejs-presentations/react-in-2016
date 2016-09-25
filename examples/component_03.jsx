import React from 'react';

const CatsSeen = ({ amount, ...props }) => (
  <h2 {...props}>I've seen {amount} cats!</h2>
);

export default CatsSeen;
