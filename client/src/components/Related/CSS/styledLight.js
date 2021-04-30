// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const carouselWrapperDiv = styled.div`
background-color: #f7f7f7;
position: relative;
width: 100%;
height: 550px;
`;

const OutfitWrapperDiv = styled(carouselWrapperDiv)`
`;

const carouselDiv = styled.div`
overflow-x: hidden;
overflow-y: hidden;
scroll-behavior: smooth;
position: relative;
height: 100%;
width: 52%;
top: 10%;
margin-left: 23%;
margin-right: 23%;
display: flex;
padding-top: 1%;
padding-bottom: 8%;
box-sizing: border-box;
  `;

const outfitCarouselDiv = styled.div`
top: -2%;
overflow-x: hidden;
overflow-y: hidden;
scroll-behavior: smooth;
position: relative;
height: 100%;
width: 52%;
margin-left: 23%;
margin-right: 23%;
display: flex;
padding-top: 1%;
padding-bottom: 8%;
box-sizing: border-box;
`;

const cardComponentDiv = styled.div`
background-color: #f7f7f7;
color: black;
text-align: center;
border-radius: 4px;
font-family: Verdana;
max-width: 20%;
min-width: 20%;
height: auto;
box-shadow: -1rem 2rem 3rem grey;
margin-right: 2.5%;
margin-left: 2.5%;
font-size: .2em;
  `;

const outfitCardComponentDiv = styled(cardComponentDiv)``;

const addToOutfitCard = styled(cardComponentDiv)``;

const nextComponentDiv = styled.div`
  position: absolute;
  top: 40%;
  right: 21%;
  z-index: 10;
  `;

const prevComponentDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 19%;
  z-index: 10;
  `;

const cardImg = styled.img`
padding-top: 5%;
height: 72%;
width: 89%;
object-fit: cover;
margin: auto;
border-radius: 100px;
  `;

const addToOutfitImg = styled(cardImg)`
position: relative;
top: 3%;
  `;

const navButtons = styled.button`
  background-color: midnightblue;
  border: none;
  color: white;
  padding: 40% 16px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  cursor: pointer;
  `;
const navOutfitButtons = styled.button`
  background-color: #100e17;
  border: none;
  color: white;
  padding: 40% 16px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  cursor: pointer;
  `;

const modalDiv = styled.div`
text-align: center;
border-radius: 6px;
font-family: Verdana;
height: 40%;
width: 59%;
-webkit-flex-direction: column;
padding: 20%;
z-index: 100;
position: fixed;
top: -10%;
left: 0%;
overflow-y: hidden;
`;

const salePrice = styled.span`
color: red;
margin-right: 10%;
`;

const defaultPriceStrike = styled.span`
text-decoration: line-through;
`;

const table = styled.table`
border: 1px solid grey;
width: 100%;
height: 100%;
border-radius: 4px;
background-color: #353131;
height: fit-content;
padding: 2%;
font-size: 1rem;
`;

const modalTitle = styled.div`
font-size: 5em;
border: 1px solid black;
border-radius: 4px;
background-color: #100e17;
color: white;
padding: 1%;
font-size: 2rem;
`;

const modalFirstRow = styled.th`
height: 10%;
border: 1px solid grey;
border-radius: 4px;
background-color: grey;
padding: 1%;
`;

const tableData = styled.td`
border: 1px solid grey;
text-align: center;
border-radius: 4px;
background-color: white;
padding: 1%;
`;

const tableHeader = styled.th`
border: 1px solid grey;
border-radius: 4px;
background-color: grey;
padding: 1%;
`;

const closeModal = styled.button`
background-color: maroon;
height: 3%;
font-size: 7em;
position: fixed;
top: 32.2%;
right: 22%;
color: white;
border-radius: 50% 20% / 10% 40%;
cursor: pointer;
`;

const a = styled.a`
color: black;
`;

const styledLight = {
  a,
  addToOutfitImg,
  addToOutfitCard,
  modalFirstRow,
  modalTitle,
  closeModal,
  OutfitWrapperDiv,
  carouselWrapperDiv,
  carouselDiv,
  cardComponentDiv,
  nextComponentDiv,
  prevComponentDiv,
  cardImg,
  navOutfitButtons,
  navButtons,
  modalDiv,
  table,
  tableData,
  tableHeader,
  salePrice,
  defaultPriceStrike,
  outfitCardComponentDiv,
  outfitCarouselDiv,
};

export default styledLight;
