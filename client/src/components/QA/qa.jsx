/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import lightStyles from './SubComponents/lightStyles.js';
import darkStyles from './SubComponents/darkStyles.js';
import QuestionRenderer from './SubComponents/QuestionRenderer.jsx';
import Search from './SubComponents/Search.jsx';
import QuestionModal from './SubComponents/Modals/NewQuestion.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    const sortedQuestions = this.props.data.qa.results;
    sortedQuestions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    let currentStyles = this.props.colorMode === 'light' ? lightStyles : darkStyles
    this.state = {
      questionList: sortedQuestions,
      filteredQuestions: sortedQuestions,
      showAllQuestions: false,
      showQuestionCreate: false,
      styles: currentStyles,
    };
  }

  showAllQuestions() {
    this.setState({ showAllQuestions: true });
  }

  searchFilter(value) {
    const filteredQuestions = [];
    for (let i = 0; i < this.state.questionList.length; i += 1) {
      const question = this.state.questionList[i];
      if (question.question_body.toLowerCase().includes(value.toLowerCase())) {
        filteredQuestions.push(question);
      }
    }
    this.setState({ filteredQuestions });
  }

  toggleModal() {
    const currentView = !this.state.showQuestionCreate;
    this.setState({ showQuestionCreate: currentView });
  }

  render() {
    return (
      <this.state.styles.QA>
        <this.state.styles.Title>
          <div>QUESTIONS & ANSWERS</div>
        </this.state.styles.Title>
        <this.state.styles.SearchBarWrapper>
          <Search styles={this.state.styles} searchFilter={this.searchFilter.bind(this)} />
        </this.state.styles.SearchBarWrapper>
        <div>
          {this.state.showAllQuestions
            ? this.state.filteredQuestions.map((question) => (
              <QuestionRenderer
                question={question}
                productInformation={this.props}
                key={Math.random() * 100000}
                styles={this.state.styles}
              />
            ))
            : this.state.filteredQuestions.slice(0, 4).map((question) => (
              <QuestionRenderer
                question={question}
                productInformation={this.props}
                key={Math.random() * 100000}
                styles={this.state.styles}
              />
            ))}
        </div>
        <this.state.styles.ButtonContainer>
          {this.state.showAllQuestions || this.state.filteredQuestions.length < 5
            ? <div />
            : (
              <this.state.styles.AddQuestionButton onClick={this.showAllQuestions.bind(this)}>
                More Answered Questions
              </this.state.styles.AddQuestionButton>
            )}
          <this.state.styles.AddQuestionButton onClick={this.toggleModal.bind(this)}>
            Add A Question
          </this.state.styles.AddQuestionButton>
        </this.state.styles.ButtonContainer>
        <QuestionModal
          show={this.state.showQuestionCreate}
          toggleView={this.toggleModal.bind(this)}
          productInformation={this.props}
          styles={this.state.styles}
        />
      </this.state.styles.QA>
    );
  }
}

export default QA;
