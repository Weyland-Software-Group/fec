import React from 'react';
// import ReactDOM from 'react-dom';
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import sampleData from './sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Overview data={sampleData} />
        <Related data={sampleData} />
        <QA data={sampleData} />
        <Reviews data={sampleData} />
      </div>
    );
  }
}

export default App;