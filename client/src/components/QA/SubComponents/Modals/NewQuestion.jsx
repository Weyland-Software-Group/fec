import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      warningText: '',
      successText: '',
    };
  }

  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  handleNick(event) {
    this.setState({ nickname: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  submitQuestion() {
    const { boolQuestion, boolNick, boolEmail } = this.dataIsValid();
    if (boolQuestion && boolNick && boolEmail) {
      this.setState({ warningText: '' });
      this.postQuestion();
    } else {
      let warningText = 'You must enter the following: ';
      if (!boolQuestion) {
        warningText += 'question, ';
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

  postQuestion() {
    $.ajax({
      type: 'POST',
      url: '/qa/questions',
      data: {
        body: this.state.question,
        name: this.state.nickname,
        email: this.state.email,
        product_id: this.props.productInformation.data.product.id,
      },
      success: () => {
        this.setState({ successText: 'Your question has been successfully submitted' });
        setTimeout(this.props.toggleView, 2000);
      },
      error: () => console.log('Could not post to server'),
    });
  }

  dataIsValid() {
    /* Checking that question is not null */
    let boolQuestion = true;
    let boolNick = true;
    let boolEmail = true;
    if (this.state.question.length === 0) {
      boolQuestion = false;
    }
    if (this.state.nickname.length === 0) {
      boolNick = false;
    }
    if (!this.state.email.includes('@') || !this.state.email.includes('.co')) {
      boolEmail = false;
    }
    return { boolQuestion, boolNick, boolEmail };
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
              <this.props.styles.Title>Ask Your Question</this.props.styles.Title>
              <this.props.styles.SubTitle>
                About the
                {' '}
                {this.props.productInformation.data.product.name}
              </this.props.styles.SubTitle>
              <this.props.styles.TertiaryTitle>
                Your Question*
              </this.props.styles.TertiaryTitle>
              <this.props.styles.LargeInput onChange={this.handleQuestion.bind(this)} data-testid="QuestionText"/>
              <this.props.styles.TertiaryTitle>What is your nickname?*</this.props.styles.TertiaryTitle>
              <this.props.styles.NormalInput onChange={this.handleNick.bind(this)} data-testid="Nick"/>
              <this.props.styles.QuarternaryTitle>
                For privacy reasons, do not use your full name or email address
              </this.props.styles.QuarternaryTitle>
              <this.props.styles.TertiaryTitle>Your email*</this.props.styles.TertiaryTitle>
              <this.props.styles.NormalInput onChange={this.handleEmail.bind(this)} data-testid="Email" />
              <this.props.styles.SubmitButton onClick={this.submitQuestion.bind(this)} data-testid="SubmitQuestion">
                Submit Question
              </this.props.styles.SubmitButton>
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
