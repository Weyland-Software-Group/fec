/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const Prev = ({ scroll, className, styles }) => {
  const { PrevComponentDiv, NavButtons } = styles;
  return (
    <PrevComponentDiv className={className}>
      <NavButtons type="btn" onClick={() => { scroll(); }}>{'<'}</NavButtons>
    </PrevComponentDiv>
  );
};

export default Prev;
