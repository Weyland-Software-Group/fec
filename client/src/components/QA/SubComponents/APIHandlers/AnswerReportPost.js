import $ from 'jquery';

const AnswerReportPost = (answerID, callback) => {
  $.ajax({
    url: `/qa/answers/${answerID}/report`,
    type: 'PUT',
    success: (data) => callback(data),
    error: () => console.log('Could not post to server'),
 });
};

export default AnswerReportPost;

