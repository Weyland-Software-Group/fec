import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    this.props.hideForm(false);
  }

  handleSubmit() {
    alert('form submitted');
    this.hideForm(false);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <button onClick={this.hideForm} className="exit-form" type="button">X</button>
          <label>
            username:
            <input type="text" value="username" />
          </label>
          <input type="submit" value="submit" />
        </form>
        <div onClick={this.hideForm} className="form-cover"></div>
      </div>
    );
  }
};

export default ReviewForm;
