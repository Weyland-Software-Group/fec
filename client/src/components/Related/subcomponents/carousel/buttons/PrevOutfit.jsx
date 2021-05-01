/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const PrevOutfit = ({ scroll, className, styles }) => {
  const { PrevOutfitDiv, NavOutfitButtons } = styles;
  return (
    <PrevOutfitDiv className={className}>
      <NavOutfitButtons type="button" onClick={() => { scroll(); }}>{'<'}</NavOutfitButtons>
    </PrevOutfitDiv>
  );
};

export default PrevOutfit;
