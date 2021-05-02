import $ from 'jquery';

const AnswerHelpfulPost = (answerID, cb) => {
  $.ajax({
    url: `/qa/answers/${answerID}/helpful`,
    type: 'PUT',
    success: (data) => cb(data),
    error: () => console.log('Could not post to server'),
 });
};

export default AnswerHelpfulPost;

