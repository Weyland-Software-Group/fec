/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* for overview / overview / header */
import styled from 'styled-components';

const dark_mode = styled.div`
  background-color: #353131;
  color: white;
`;

const overview_default = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 8vh 82vh 15vh;
  grid-gap: 10px;
  grid-template-areas:
    "header header header header header header"
    "main main main main sidebar sidebar"
    "footer footer footer footer footer footer"
`;

const header = styled.div`
  grid-area: header;
  text-align: center;
  font-size: medium;
  padding-bottom: 3px;
`;

const main = styled.div`
  grid-area: main;
  padding: 5px;
  margin: 5px;
`;

const sidebar = styled.div`
  grid-area: sidebar;
  padding: 5px;
  margin: 5px;
`;

const footer = styled.div`
  grid-area: footer;
  padding: 5px;
  margin: 5px;
`;

const overview_expanded = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 8vh 82vh 15vh;
  grid-gap: 10px;
  grid-template-areas:
    "header header header header header header"
    "main main main main main main"
    "footer footer footer footer footer footer"
`;

const main_expanded = styled.div`
  grid-area: main;
  padding: 5px;
  margin: 5px;
`;

const navbar = styled.div`
  background-color: black;
  height: 25px;
  text-align: left;
  color: white;
  padding: 10px;
`;

const navbar_dark = styled.div`
 background-color: white;
 height: 25px;
 text-align: left;
 color: black;
 padding: 3px;
`;

const button_dark = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  height: 20px;
  width: 50px;
  font-family: Helvetica;
  font-size: 0.8em;
`;

const header_right = styled.div`
  display: block;
  text-align: right;
`;

const shopping_bag = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  height: 20px;
  width: 50px;
  font-family: Helvetica;
  font-size: 0.8em;
  background-color: #2ada71;
`;

const search = styled.div`
  position: absolute;
  top: 60px;
  right: 80px;
`;

const header_below = styled.div`
  text-align: center;
  font-size: small;
  padding: 3px;
`;

const styles = {
  dark_mode,
  overview_default,
  header,
  main,
  sidebar,
  footer,
  overview_expanded,
  main_expanded,
  navbar,
  navbar_dark,
  button_dark,
  header_right,
  shopping_bag,
  search,
  header_below,
};

export default styles;
