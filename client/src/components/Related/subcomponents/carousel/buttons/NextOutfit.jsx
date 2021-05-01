/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const NextOutfit = ({ scroll, className, styles }) => {
  const { NextComponentDiv, NavOutfitButtons } = styles;
  return (
    <NextComponentDiv className={className}>
      <NavOutfitButtons type="btn" onClick={() => { scroll(); }}>{'>'}</NavOutfitButtons>
    </NextComponentDiv>
  );
};

export default NextOutfit;
