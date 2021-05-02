/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* for overview / add to cart */
import styled from 'styled-components';

const addToCart = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
`;

const selection_box_font = styled.option`
  font-family: Helvetica, Arial;
  font-size: 0.9em;
`;

const button_outfit = styled.button`
  width: 80px;
  height: 50px;
  padding: 2px;
  margin: 2px;
`;

const shoppingContainer = styled.div`
  width: auto;
  max-height:  1000px;
  display: inline-block;
  position: relative;
  left: 350px;
`;

const shopping_button = styled.button`
  display: block;
  margin: 20px;
  width: 50px;
  height: 30px;
`;

const cart = styled.div`
  display: flex;
  top: auto;
  margin: 10px;
  padding: 3px;
  width: 450px;
  height: 200px;
  border: 1px solid black;
  background-color: white;
  text-align: right;
  font-size: small;
`;

const cartImg = styled.img`
  display: block;
  width: 120px;
  height: 200px;
`;

const cartText = styled.div`
  display: block;
  position: absolute;
  text-align: left;
  left: 200px;
  margin: 20px;
`;

const styles = {
  addToCart,
  selection_box_font,
  button_outfit,
  shoppingContainer,
  shopping_button,
  cart,
  cartImg,
  cartText,
};

export default styles;
