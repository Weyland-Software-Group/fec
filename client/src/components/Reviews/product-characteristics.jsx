import React from 'react';
import Styles from './styles.js';

class ProductCharacteristics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.description,
    };

    this.produceRadioButtons = this.produceRadioButtons.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.addToFormState = this.addToFormState.bind(this);
  }

  addToFormState(e) {
    this.props.addToParentState(this.props.name, this.state.description[e.target.value]);
  }

  setDescription(e) {
    this.setState({
      displayDescription: this.state.description[e.target.value],
    });
    this.addToFormState(e);
    this.props.handleChange(e);
  }

  produceRadioButtons() {
    const buttons = [];
    let description = '';
    const descriptionStyles = {
      fontSize: '12px',
      marginTop: '2px',
      display: 'flex',
      alignSelf: 'center',
      textAlign: 'center',
    };
    const radioStyles = {
      display: 'flex',
      alignSelf: 'center',
    };
    for (let i = 1; i < 6; i++) {
      if (i === 1 || i === 5) {
        description = this.state.description[i];
      } else if (this.state.displayDescription === this.state.description[i]) {
        description = this.state.displayDescription;
      } else {
        description = '';
      }
      buttons.push(
        <Styles.ProductCharacteristicsRadio className="product-characteristics-radio" key={Math.random() * 10000}>
          <input onClick={this.setDescription} style={radioStyles} type="radio" name={this.props.name} value={i} />
          <div style={descriptionStyles}>{description}</div>
        </Styles.ProductCharacteristicsRadio>,
      );
    }
    return buttons;
  }

  render() {
    const radioBtnRow = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
    return (
      <div style={radioBtnRow}>
        <h5 className="section-heading">{this.props.name}</h5>
        <Styles.RadioButtonRow>
          {this.produceRadioButtons()}
        </Styles.RadioButtonRow>
      </div>
    );
  }
}

export default ProductCharacteristics;
