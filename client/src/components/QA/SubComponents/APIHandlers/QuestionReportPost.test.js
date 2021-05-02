import 'regenerator-runtime/runtime';

import QuestionReportPost from './QuestionReportPost';

it('should make a post request to the server with the correct ID', async () => {
  const ajaxSpy = jest.spyOn($, 'ajax');
  QuestionReportPost('39839893');
  expect(ajaxSpy).toHaveBeenCalled();
  expect(ajaxSpy).toBeCalledWith(expect.anything('39839893'));
})