/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const PrevOutfit = ({ scroll, className, styles }) => (
  <styles.prevComponentDiv className={className}>
    <styles.navOutfitButtons type="button" onClick={() => { scroll(); }}>{'<'}</styles.navOutfitButtons>
  </styles.prevComponentDiv>
);

export default PrevOutfit;
