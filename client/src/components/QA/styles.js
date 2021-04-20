import styled from 'styled-components';

const primarySize = '1.1em';
const secondarySize = '0.75em';
const primaryColor = '#454444';
const secondaryColor = '#858383';
const primaryFont = 'Helvetica Neue';

const QA = styled.div`
  margin-left: 40%;
`;

const Title = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: ${primaryColor};
  font-size: ${primarySize};
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
  width: 50%;
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
  color: #858383;
`;

const AnswerBlock = styled.div`
`;

const SearchBar = styled.input`
  width: 40%;
  margin-top: 5px;
`;

const HyperLink = styled.a`
  color: ${secondaryColor};
  text-decoration: underline;
`;

const styles = {
  Title,
  BoldedText,
  QuestionBlock,
  QuestionLine,
  QuestionText,
  QuestionSubtitle,
  AnswerText,
  AnswerSubtitle,
  AnswerBlock,
  QA,
  SearchBar,
  HyperLink,
};
export default styles;