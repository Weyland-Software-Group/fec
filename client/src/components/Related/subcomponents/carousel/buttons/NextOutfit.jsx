/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const NextOutfit = ({ scroll, className, styles }) => {
  const { NextOutfitDiv, NavOutfitButtons } = styles;
  return (
    <NextOutfitDiv className={className}>
      <NavOutfitButtons type="btn" onClick={() => { scroll(); }}>{'>'}</NavOutfitButtons>
    </NextOutfitDiv>
  );
};

export default NextOutfit;
