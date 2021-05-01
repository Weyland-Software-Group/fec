import React from 'react';
import Styles from './styles.js'

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.changeSelected(e.target.value);
    this.props.clickTracking(`${e.target.value} in sort-drop-down`, 'Reviews');
  }

  render() {
    return (
      <Styles.SortByContainer>
        <Styles.SortByLabel htmlFor="sort-by">{this.props.data.reviews.reviews.results.length} reviews, sorted by</Styles.SortByLabel>
        <Styles.SortBy onChange={this.change} className="sort-by" name="sort-by" value={this.props.selected}>
          <option value="relavance">relevance</option>
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
        </Styles.SortBy>
      </Styles.SortByContainer>
    );
  }
}

export default ReviewPosts;
