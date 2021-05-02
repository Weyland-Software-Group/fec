import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      warningText: '',
      successText: '',
    };
  }

  handleAnswer(event) {
    this.setState({ answer: event.target.value });
  }

  handleNick(event) {
    this.setState({ nickname: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  submitAnswer() {
    const { boolAnswer, boolNick, boolEmail } = this.dataIsValid();
    if (boolAnswer && boolNick && boolEmail) {
      this.setState({ warningText: '' });
      this.postAnswer();
    } else {
      let warningText = 'You must enter the following: ';
      if (!boolAnswer) {
        warningText += 'answer, ';
      }
      if (!boolNick) {
        warningText += 'nickname, ';
      }
      if (!boolEmail) {
        warningText += 'email, ';
      }
      const lastComma = warningText.lastIndexOf(', ');
      const finalWarningText = warningText.substring(0, lastComma) + '.';
      this.setState({ warningText: finalWarningText });
    }
  }

  postAnswer() {
    $.ajax({
      type: 'POST',
      url: `/qa/questions/${this.props.questionInformation.question_id}/answers`,
      data: {
        body: this.state.answer,
        name: this.state.nickname,
        email: this.state.email,
      },
      success: () => {
        this.setState({ successText: 'Your answer has been successfully submitted' });
        setTimeout(this.props.toggleView, 2000);
      },
      error: () => console.log('Could not post to server'),
    });
  }

  dataIsValid() {
    /* Checking that answer is not null */
    let boolAnswer = true;
    let boolNick = true;
    let boolEmail = true;
    if (this.state.answer.length === 0) {
      boolAnswer = false;
    }
    if (this.state.nickname.length === 0) {
      boolNick = false;
    }
    if (!this.state.email.includes('@') || !this.state.email.includes('.co')) {
      boolEmail = false;
    }
    return { boolAnswer, boolNick, boolEmail };
  }

  render() {
    if (this.props.show) {
      return (
        <this.props.styles.ModalBackdrop>
          <this.props.styles.ModalContentWrapper>
            <this.props.styles.ModalContent>
              <this.props.styles.ModalExit>
                <this.props.styles.SubTitle onClick={this.props.toggleView}>
                  x
                </this.props.styles.SubTitle>
              </this.props.styles.ModalExit>
              <this.props.styles.Title>Submit Your Answer</this.props.styles.Title>
              <this.props.styles.SubTitle>
                {this.props.productInformation.data.product.name}
                {': '}
                {this.props.questionInformation.question_body}
              </this.props.styles.SubTitle>
              <this.props.styles.TertiaryTitle>
                Your Answer*
              </this.props.styles.TertiaryTitle>
              <this.props.styles.LargeInput onChange={this.handleAnswer.bind(this)} data-testid="AnswerText"/>
              <this.props.styles.TertiaryTitle>What is your nickname?*</this.props.styles.TertiaryTitle>
              <this.props.styles.NormalInput onChange={this.handleNick.bind(this)} data-testid="Nick"/>
              <this.props.styles.QuarternaryTitle>
                For privacy reasons, do not use your full name or email address
              </this.props.styles.QuarternaryTitle>
              <this.props.styles.TertiaryTitle>Your email*</this.props.styles.TertiaryTitle>
              <this.props.styles.NormalInput onChange={this.handleEmail.bind(this)} data-testid="Email" />
              <this.props.styles.AddQuestionButton onClick={this.submitAnswer.bind(this)} data-testid="SubmitAnswer">
                Submit Answer
              </this.props.styles.AddQuestionButton>
              <this.props.styles.WarningText data-testid="WarningText">
                {this.state.warningText}
              </this.props.styles.WarningText>
              <this.props.styles.SuccessText>
                {this.state.successText}
              </this.props.styles.SuccessText>
            </this.props.styles.ModalContent>
          </this.props.styles.ModalContentWrapper>
        </this.props.styles.ModalBackdrop>
      );
    }

    return (
      <div />
    );
  }
}

export default Modal;
