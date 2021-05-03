import React from 'react';
import Styles from './styles.js';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const positionCarrot = {
      left: `${this.props.position}%`,
    };

    return (
        <Styles.SizeComfortContainer>
          <Styles.SizeComfortHeading>{this.props.detailType}</Styles.SizeComfortHeading>
          <i style={positionCarrot} className="fas fa-caret-down size-comfort-carrot"></i>
          <Styles.SizeComfort>
            <Styles.SizeComfortSubContainer>
              <Styles.SizeComfortBox />
              <Styles.Small>Too small</Styles.Small>
            </Styles.SizeComfortSubContainer>
            <Styles.SizeComfortSubContainer>
              <Styles.SizeComfortBox />
              <Styles.Small>Perfect</Styles.Small>
            </Styles.SizeComfortSubContainer>
            <Styles.SizeComfortSubContainer>
              <Styles.SizeComfortBox />
              <Styles.Small>Too large</Styles.Small>
            </Styles.SizeComfortSubContainer>
          </Styles.SizeComfort>
        </Styles.SizeComfortContainer>
    );
  }
}

export default ProductBreakdown;
