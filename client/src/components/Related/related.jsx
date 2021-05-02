/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import Carousel from './subcomponents/carousel/Carousel.jsx';
import styledLight from './CSS/styledLight.js';
import styledDark from './CSS/styledDark.js';

class Related extends React.Component {
  constructor(props) {
    super(props);

    this.colorMode = this.colorMode.bind(this);
    const { colorMode } = this.props;
    this.state = {
      colorMode,
      styles: styledLight,
    };
  }

  componentDidMount() {
    this.colorMode();
  }

  colorMode() {
    const { colorMode } = this.state;
    if (colorMode === 'dark') {
      this.setState({
        colorMode: 'dark',
        styles: styledDark,
      });
    } else {
      this.setState({
        colorMode: 'light',
        styles: styledLight,
      });
    }
  }

  render() {
    const {
      data, outfitData, refreshOutfit, addToOutfit, removeFromOutfit, clickHandler, toggleColorMode,
    } = this.props;
    const { styles } = this.state;
    return (
      <div id="related">
        <button onClick={() => { toggleColorMode(); }} type="button">Light/Dark Demo</button>
        <Carousel
          data-testid="carousel"
          data={data}
          outfitData={outfitData}
          refreshOutfit={refreshOutfit}
          addToOutfit={addToOutfit}
          removeFromOutfit={removeFromOutfit}
          clickHandler={clickHandler}
          styles={styles}
        />
      </div>
    );
  }
}

export default Related;
