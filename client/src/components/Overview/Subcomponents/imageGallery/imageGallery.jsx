/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowsFullscreen } from 'react-icons/bs';
import ImageGalleryItem from './imageGalleryItem.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.reSetCurrent = this.reSetCurrent.bind(this);
  }

  nextSlide() {
    let { currentIndex } = this.state;
    const maxIndex = this.props.data.photos.length - 1;
    currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    this.setState({ currentIndex });
  }

  prevSlide() {
    let { currentIndex } = this.state;
    const maxIndex = this.props.data.photos.length - 1;
    currentIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    this.setState({ currentIndex });
  }

  reSetCurrent(num) {
    this.setState({
      currentIndex: num,
    });
  }

  render() {
    return (
      <div>
        <section className="slider">
          <AiOutlineArrowLeft className="left-arrow" onClick={this.prevSlide} />
          <AiOutlineArrowRight className="right-arrow" onClick={this.nextSlide} />
          <BsArrowsFullscreen className="expand-view" onClick={this.props.expandView} />

          <section className="slider-vertical">

            {this.props.data.photos.map((item, index) => (
              <ImageGalleryItem
                item={item}
                num={index}
                key={index}
                reSetCurrent={this.reSetCurrent}
              />
            ))}
          </section>

          {this.props.data.photos.map((item, index) => (

            <div className={index === this.state.currentIndex ? 'slide-active' : 'slide'} key={index}>
              {index === this.state.currentIndex && (
                <div className="img-wrapper">
                  <img alt="" src={item.url} className={this.props.defaultView === true ? 'image' : 'image-expanded'} />
                </div>
              )}
            </div>
          ))}
        </section>

      </div>

    );
  }
}

export default ImageGallery;
