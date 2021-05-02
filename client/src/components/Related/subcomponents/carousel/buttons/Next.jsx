/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const Next = ({ scroll, className, styles }) => {
  const { NextComponentDiv, NavButtons } = styles;
  return (
    <NextComponentDiv className={className}>
      <NavButtons type="btn" onClick={() => { scroll(); }}>{'>'}</NavButtons>
    </NextComponentDiv>
  );
};

export default Next;
