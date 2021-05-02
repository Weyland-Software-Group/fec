import $ from 'jquery';

const QuestionHelpfulPost = (questionID, cb) => {
  $.ajax({
    url: `/qa/questions/${questionID}/helpful`,
    type: 'PUT',
    success: (data) => cb(data),
    error: () => console.log('Could not post to server'),
  });
};

export default QuestionHelpfulPost;