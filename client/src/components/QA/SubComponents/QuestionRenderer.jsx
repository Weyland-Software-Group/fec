
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import QuestionHelpfulPost from './APIHandlers/QuestionHelpfulPost';
import QuestionReportPost from './APIHandlers/QuestionReportPost';
import AnswerModal from './Modals/NewAnswer.jsx';

class QuestionRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_helpfulness: this.props.question.question_helpfulness,
      showAnswerCreate: false,
      questionReport: 'Report',
    };
  }

  QuestionHelpful() {
    QuestionHelpfulPost(this.props.question.question_id, () => {
      let currentHelpfulness = this.state.question_helpfulness;
      let question_helpfulness = currentHelpfulness + 1;
      this.setState({ question_helpfulness });
    });
  }

  QuestionReport() {
    QuestionReportPost(this.props.question.question_id, () => {
      this.setState({ questionReport: 'Reported' });
    });
  }

  toggleModal() {
    const currentView = !this.state.showAnswerCreate;
    this.setState({ showAnswerCreate: currentView });
  }

  render() {
    return (
      <this.props.styles.QuestionBlock>
        <this.props.styles.QuestionLine>
          <this.props.styles.BoldedText>
            <this.props.styles.QuestionText data-testid="QuestionText">
              Q:
              {' '}
              {this.props.question.question_body}
            </this.props.styles.QuestionText>
          </this.props.styles.BoldedText>
          <this.props.styles.QuestionSubtitle>
            <div>
              Helpful?
              {' '}
              <this.props.styles.HyperLink onClick={this.QuestionHelpful.bind(this)}>
                Yes
              </this.props.styles.HyperLink>
              {' '}
              (
              {this.state.question_helpfulness}
              ) |
              {' '}
              <this.props.styles.HyperLink onClick={this.toggleModal.bind(this)}>
                Add Answer
              </this.props.styles.HyperLink>
              {'  |  '}
              <this.props.styles.HyperLink
                onClick={this.QuestionReport.bind(this)}
              >
                {this.state.questionReport}
              </this.props.styles.HyperLink>
            </div>
          </this.props.styles.QuestionSubtitle>
        </this.props.styles.QuestionLine>
        <this.props.styles.AnswerBlock>
          <AnswerRenderer
            answers={this.props.question.answers}
            key={Math.random() * 1000000}
            styles={this.props.styles}
          />
        </this.props.styles.AnswerBlock>
        <AnswerModal
          show={this.state.showAnswerCreate}
          toggleView={this.toggleModal.bind(this)}
          productInformation={this.props.productInformation}
          questionInformation={this.props.question}
          styles={this.props.styles}
          sort="helpfulness"
        />
      </this.props.styles.QuestionBlock>
    );
  }
}

export default QuestionRenderer;