import React from 'react';

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.changeSelected(e.target.value);
  }

  render() {
    return (
      <div className="sort-by-container">
        <label className="sort-by-label" htmlFor="sort-by">{this.props.data.reviews.reviews.results.length} reviews, sorted by</label>
        <select onChange={this.change} name="sort-by" className="sort-by" value={this.props.selected}>
          <option value="relavance">relavence</option>
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
        </select>
      </div>
    );
  }
}

export default ReviewPosts;