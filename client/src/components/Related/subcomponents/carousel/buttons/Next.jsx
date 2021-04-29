/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const Next = ({ scroll, className, styles }) => (
  <styles.nextComponentDiv className={className}>
    <styles.navButtons type="btn" onClick={() => { scroll(); }}>{'>'}</styles.navButtons>
  </styles.nextComponentDiv>
);

export default Next;
