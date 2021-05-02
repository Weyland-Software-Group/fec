import styled from 'styled-components';

const titleSize = '1.4em';
const primarySize = '1.0em';
const secondarySize = '0.8em';
const primaryColor = '#ffffff';
const secondaryColor = '#e3e2e1';
const oppositeColor = '#ffffff';
const oppositeText = '#000000';
const accentColor = '#2ada71';
const titleFont = "'Bebas Neue', cursive";
const primaryFont = 'Helvetica';

const QA = styled.div`
  padding: 0% 8%;
  margin-top: 4%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 5px;
  font-family: ${titleFont};
  font-weight: 250;
  color: ${primaryColor};
  font-size: ${titleSize};
  letter-spacing: 0.1 em;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 100;
  color: ${primaryColor};
  font-size: ${primarySize};
`;

const TertiaryTitle = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: ${primaryColor};
  font-size: ${secondarySize};
`;

const QuarternaryTitle = styled.div`
margin-top: 5px;
font-family: ${primaryFont};
font-weight: 200;
color: ${primaryColor};
font-size: 0.6em;
`;

const BoldedText = styled.div`
  font-weight: 450;
  font-style: Bold;
  padding-left: 5px;
  padding-right: 5px;
  text-align: left;
`;

const QuestionBlock = styled.div`
  font-family: ${primaryFont};
  margin-top:5px;
  margin-bottom: 10px;
  font-size: ${primarySize};
  color: ${primaryColor};
`;
const QuestionLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionText = styled.div`
  margin-bottom: 15px;
`;

const QuestionSubtitle = styled.div`
  text-align: right;
  font-size: ${secondarySize};
  color: #858383;
`;

const AnswerText = styled.div`
  font-weight: 200;
  padding-left: 10px;
  display: flex;
`;

const AnswerSubtitle = styled.div`
  padding-top: 2px;
  padding-left: 32px;
  margin-bottom: 8px;
  font-size: ${secondarySize};
  color: ${secondaryColor};
`;

const LoadMoreAnswers = styled.div`
  padding-top: 2px;
  padding-left: 32px;
  margin-bottom: 8px;
  font-size: ${secondarySize};
  color: ${secondaryColor};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const AnswerBlock = styled.div`
`;

const SearchBarWrapper = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  margin-top: 1%;
  margin-left: 5%;
  width: 90%;
  margin-bottom: 1%;
`;

const HyperLink = styled.a`
  color: ${secondaryColor};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: ${oppositeColor};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  margin-left: 10%;
`;

const AddQuestionButton = styled.div`
  margin: 5px;
  font-size: ${secondarySize};
  color: ${primaryColor};
  padding: 1%;
  border: 1.5px solid ${primaryColor};
  display: flex;
  justify-content: center;
  &:hover {
    color: ${accentColor};
    border: 1.5px solid ${accentColor};
  }
`;

const SubmitButton = styled.div`
  margin: 5px;
  width: 15%;
  font-size: ${secondarySize};
  background: white;
  color: ${oppositeText};
  padding: 1%;
  display: flex;
  justify-content: center;
  &:hover {
    background: ${accentColor};
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.2);
`;

const ModalContentWrapper = styled.div`
  position: fixed;
  width: 30%;
  height: 30%;
  background: #353131;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5%;
`;

const ModalContent = styled.div`
  font-family: ${primaryFont};
  margin-top:5px;
  margin-bottom: 10px;
  font-size: ${primarySize};
  color: ${primaryColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalExit = styled.div`
  text-align: right;
`;

const LargeInput = styled.input`
  width: 80%;
  height: 40%;
  margin-bottom: 2px;
`;

const NormalInput = styled.input`
  width: 80%;
  height: 40%;
  margin-bottom: 2px;
`;

const WarningText = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: red;
  font-size: ${secondarySize};
`;

const SuccessText = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: green;
  font-size: ${secondarySize};
`;



const darkStyles = {
  Title,
  SubTitle,
  TertiaryTitle,
  QuarternaryTitle,
  BoldedText,
  QuestionBlock,
  QuestionLine,
  QuestionText,
  QuestionSubtitle,
  AnswerText,
  AnswerSubtitle,
  AnswerBlock,
  LoadMoreAnswers,
  QA,
  SearchBarWrapper,
  SearchBar,
  HyperLink,
  ButtonContainer,
  AddQuestionButton,
  SubmitButton,
  ModalBackdrop,
  ModalContentWrapper,
  ModalContent,
  ModalExit,
  LargeInput,
  NormalInput,
  WarningText,
  SuccessText,
};
export default darkStyles;
