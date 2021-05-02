import 'regenerator-runtime/runtime';

import AnswerReportPost from './AnswerReportPost';

it('should make a post request to the server with the correct ID', async () => {
  const ajaxSpy = jest.spyOn($, 'ajax');
  AnswerReportPost('39839893');
  expect(ajaxSpy).toHaveBeenCalled();
  expect(ajaxSpy).toBeCalledWith(expect.anything('39839893'));
})