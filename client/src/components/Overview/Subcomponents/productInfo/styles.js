/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* for overview / product information */
import styled from 'styled-components';

const productInformation = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
`;

const StarsOuterBefore = styled.div`
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 200;
  }
  & {
    font-size: 12px;
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;

const StarsInnerBefore = styled.div`
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #000;
  }
  & {
    size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }
`;

const titleSize = styled.h1`
  font-size: 2.3em;
  letter-spacing: 0.08em;
  font-family: 'Bebas Neue', cursive;
`;

const Rtext = styled.div`
font-size: 1rem;
color: red;
`;

const Ltext = styled.div`
font-family: "Helvetica", Arial, sans-serif;
font-size: 1.6rem;
`;

const ConInfo = styled.div`
margin: 10px;
`;

const productInformationFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
`;

const fontDescription = styled.p`
  font-family: Helvetica, Arial;
  font-size: 1em;
`;

const styles = {
  productInformation,
  StarsOuterBefore,
  StarsInnerBefore,
  titleSize,
  Rtext,
  Ltext,
  ConInfo,
  productInformationFooter,
  fontDescription,

};

export default styles;
