import { QotdPage } from './app.po';

describe('qotd App', function() {
  let page: QotdPage;

  beforeEach(() => {
    page = new QotdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
