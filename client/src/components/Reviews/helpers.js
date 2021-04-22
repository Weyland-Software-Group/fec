import sampleData from '.././sampleData.js'

const helpers = {
  average: (arr) => arr.reduce((acc, x) => acc + x) / arr.length,

  averageOfRatings: (ratingsObj) => {
    const toAverage = [];
    for (let rating in ratingsObj){
      if(+ratingsObj[rating] > 1) {
        for (let i = 0; i < +ratingsObj[rating]; i++) toAverage.push(+rating);
      } else {
        toAverage.push(+rating);
      }
    }
    return helpers.average(toAverage);
  },

  findReviewPercentage: (ratingsObj) => {
    let total = helpers.getTotal(ratingsObj);
    const percentages = {};
    let percentageToAdd;
    for (let rating in ratingsObj) {
      percentageToAdd = ratingsObj[rating] / total;
      percentages[rating] = percentageToAdd;
    }
    return percentages;
  },

  getTotal: (ratingsObj) => {
    let total = 0;
    for (let rating in ratingsObj) {
      total += Number(ratingsObj[rating]);
    }
    return total;
  }
};

export default helpers;
