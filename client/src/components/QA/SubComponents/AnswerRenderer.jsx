/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React from 'react';
import AnswerHelpfulPost from './APIHandlers/AnswerHelpfulPost';
import AnswerReportPost from './APIHandlers/AnswerReportPost';

const moment = require('moment');

class AnswerRenderer extends React.Component {
  constructor(props) {
    super(props);
    const { answers } = props;
    const answersArray = [];
    for (let i = 0; i < Object.keys(answers).length; i += 1) {
      const currentAnswer = answers[Object.keys(answers)[i]];
      currentAnswer.answerReport = 'Report';
      answersArray.push(currentAnswer);
    }
    answersArray.sort((a, b) => b.[this.props.sort] - a.[this.props.sort]);
    this.state = {
      answersArray,
      showAllAnswers: false,
    };
  }

  AnswerHelpful(answerID, identifier) {
    AnswerHelpfulPost(answerID, () => {
      const { answersArray } = this.state;
      const currentHelpfulness = answersArray[identifier].helpfulness;
      answersArray[identifier].helpfulness = currentHelpfulness + 1;
      this.setState({ answersArray });
    });
  }

  AnswerReport(answerID, identifier) {
    AnswerReportPost(answerID, () => {
      const { answersArray } = this.state;
      answersArray[identifier].answerReport = 'Reported';
      this.setState({ answersArray });
    });
  }

  parseAnswers(answer, identifier) {
    return (
      <div key={Math.random() * 100000}>
        <this.props.styles.AnswerText data-testid="AnswerText">
          <this.props.styles.BoldedText>
            A:
            {' '}
          </this.props.styles.BoldedText>
          {answer.body}
        </this.props.styles.AnswerText>
        <this.props.styles.AnswerSubtitle>
          by
          {' '}
          {answer.answerer_name}
          ,
          {' '}
          {moment(answer.date).format('MMMM DD, YYYY')}
          {'  |  '}
          Helpful?
          {' '}
          <this.props.styles.HyperLink onClick={
            () => this.AnswerHelpful.bind(this)(answer.id, identifier)
            }
          >
            Yes
          </this.props.styles.HyperLink>
          {' '}
          (
          {answer.helpfulness}
          )
          {'  |  '}
          <this.props.styles.HyperLink onClick={
            () => this.AnswerReport.bind(this)(answer.id, identifier)
            }
          >
            {answer.answerReport}
          </this.props.styles.HyperLink>
        </this.props.styles.AnswerSubtitle>
      </div>
    );
  }

  showAllAnswers() {
    const showAnswers = this.state.showAllAnswers;
    this.setState({ showAllAnswers: !showAnswers });
  }

  render() {
    return (
      <div>
        { this.state.showAllAnswers
          ? (
            <div>
              {this.state.answersArray.map(
                (answer, i) => this.parseAnswers(answer, i),
              )}
            </div>
          )
          : (
            <div>
              {this.state.answersArray.slice(0, 2).map(
                (answer, i) => this.parseAnswers(answer, i),
              )}
            </div>
          )}
        { this.state.answersArray.length < 3
          ? <div />
          : (
            <this.props.styles.LoadMoreAnswers onClick={this.showAllAnswers.bind(this)} data-testid="LoadMoreAnswers">
              {this.state.showAllAnswers
                ? 'COLLAPSE ANSWERS'
                : 'LOAD MORE ANSWERS'}
            </this.props.styles.LoadMoreAnswers>
          )}
        {this.state.answersArray.length === 0
          ? <this.props.styles.AnswerText data-testid="NoAnswer"> No Answers Available for this Question.</this.props.styles.AnswerText>
          : <div />}
      </div>
    );
  }
}

export default AnswerRenderer;
