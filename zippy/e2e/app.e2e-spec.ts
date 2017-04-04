import { ZippyPage } from './app.po';

describe('zippy App', function() {
  let page: ZippyPage;

  beforeEach(() => {
    page = new ZippyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
