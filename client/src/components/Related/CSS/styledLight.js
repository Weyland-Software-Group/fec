// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const CarouselWrapperDiv = styled.div`
background-color: #ffffff;
position: relative;
width: 100%;
height: 550px;
`;

const OutfitWrapperDiv = styled(CarouselWrapperDiv)`
`;

const CarouselDiv = styled.div`
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

const OutfitCarouselDiv = styled.div`
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

const CardComponentDiv = styled.div`
background-color: #ffffff;
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

const OutfitCardComponentDiv = styled(CardComponentDiv)``;

const AddToOutfitCard = styled(CardComponentDiv)``;

const NextComponentDiv = styled.div`
  position: absolute;
  top: 40%;
  right: 21%;
  z-index: 10;
  `;

const PrevComponentDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 19%;
  z-index: 10;
  `;

const NextOutfitDiv = styled(NextComponentDiv)`
top: 30%
`;

const PrevOutfitDiv = styled(PrevComponentDiv)`
top: 30%
`;

const CardImg = styled.img`
padding-top: 5%;
height: 72%;
width: 89%;
object-fit: cover;
margin: auto;
border-radius: 100px;
  `;

const AddToOutfitImg = styled(CardImg)`
position: relative;
top: 3%;
  `;

const NavButtons = styled.button`
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
const NavOutfitButtons = styled.button`
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

const ModalDiv = styled.div`
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

const SalePrice = styled.span`
color: red;
margin-right: 10%;
`;

const DefaultPriceStrike = styled.span`
text-decoration: line-through;
`;

const Table = styled.table`
border: 1px solid grey;
width: 100%;
height: 100%;
border-radius: 4px;
background-color: #353131;
height: fit-content;
padding: 2%;
font-size: 1rem;
`;

const ModalTitle = styled.div`
font-size: 5em;
border: 1px solid black;
border-radius: 4px;
background-color: #100e17;
color: white;
padding: 1%;
font-size: 2rem;
`;

const ModalFirstRow = styled.th`
height: 10%;
border: 1px solid grey;
border-radius: 4px;
background-color: grey;
padding: 1%;
`;

const TableData = styled.td`
border: 1px solid grey;
text-align: center;
border-radius: 4px;
background-color: white;
padding: 1%;
`;

const TableHeader = styled.th`
border: 1px solid grey;
border-radius: 4px;
background-color: grey;
padding: 1%;
`;

const CloseModal = styled.button`
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

const A = styled.a`
color: black;
`;

const styledLight = {
  A,
  AddToOutfitImg,
  AddToOutfitCard,
  ModalFirstRow,
  ModalTitle,
  CloseModal,
  OutfitWrapperDiv,
  CarouselWrapperDiv,
  CarouselDiv,
  CardComponentDiv,
  NextComponentDiv,
  PrevComponentDiv,
  CardImg,
  NavOutfitButtons,
  NavButtons,
  NextOutfitDiv,
  PrevOutfitDiv,
  ModalDiv,
  Table,
  TableData,
  TableHeader,
  SalePrice,
  DefaultPriceStrike,
  OutfitCardComponentDiv,
  OutfitCarouselDiv,
};

export default styledLight;
