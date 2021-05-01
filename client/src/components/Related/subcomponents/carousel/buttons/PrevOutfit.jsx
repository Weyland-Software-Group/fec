/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const PrevOutfit = ({ scroll, className, styles }) => {
  const { PrevComponentDiv, NavOutfitButtons } = styles;
  return (
    <PrevComponentDiv className={className}>
      <NavOutfitButtons type="button" onClick={() => { scroll(); }}>{'<'}</NavOutfitButtons>
    </PrevComponentDiv>
  );
};

export default PrevOutfit;
