/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

const Prev = ({ scroll, className, styles }) => (
  <styles.prevComponentDiv className={className}>
    <styles.navButtons type="btn" onClick={() => { scroll(); }}>{'<'}</styles.navButtons>
  </styles.prevComponentDiv>
);

export default Prev;
