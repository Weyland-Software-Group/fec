import $ from 'jquery';

const QuestionReportPost = (questionID, callback) => {
  $.ajax({
    url: `/qa/questions/${questionID}/report`,
    type: 'PUT',
    success: (data) => callback(data),
    error: () => console.log('Could not post to server'),
  });
};

export default QuestionReportPost;
