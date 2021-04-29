// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const carouselWrapperDiv = styled.div`
background-color: #353131;
position: relative;
width: 100%;
height: 550px;
`;

const OutfitWrapperDiv = styled(carouselWrapperDiv)`
`;

const carouselDiv = styled.div`
background-color: #353131;
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

const outfitCarouselDiv = styled(carouselDiv)``;

const cardComponentDiv = styled.div`
background-color: #353131;
color: white;
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
padding-top: 2%;
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
padding-top: 5%;
  `;

const navButtons = styled.button`
  background-color: #2ada71;
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
const navOutfitButtons = styled(navButtons)`
  background-color: ##2ada71;
  `;

const modalDiv = styled.div`
background: ##2ada71;
text-align: center;
border-radius: 40px;
font-family: Verdana;
height: 45%;
width: 45%;
flex-direction: column;
padding: 1.5rem;
z-index: 100;
position: fixed;
top: 25%;
left: 30%;
border: 2px solid;
border-color: grey;
overflow-y: scroll;
::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}
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
border-radius: 10px;
background-color: #2ada71;
height: fit-content;
padding: 2%;
`;

const modalTitle = styled.div`
font-size: 5em;
border: 1px solid black;
border-radius: 10px;
background-color: #100e17;
color: white;
`;

const modalFirstRow = styled.th`
height: 10%;
border: 1px solid grey;
border-radius: 10px;
background-color: grey;
`;

const tableData = styled.td`
border: 1px solid grey;
text-align: center;
border-radius: 10px;
background-color: black;
`;

const tableHeader = styled.th`
border: 1px solid grey;
border-radius: 10px;
background-color: grey;
`;

const closeModal = styled.div`
background-color: maroon;
height: 3%;
width: 2%;
font-size: 5em;
position: fixed;
right: 24%;
top: 25.2%;
color: white;
border-radius: 50% 20% / 10% 40%;
`;

const a = styled.a`
color: white;
`;

const styledDark = {
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

export default styledDark;
