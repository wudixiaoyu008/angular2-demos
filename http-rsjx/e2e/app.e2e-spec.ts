import { HttpRsjxPage } from './app.po';

describe('http-rsjx App', function() {
  let page: HttpRsjxPage;

  beforeEach(() => {
    page = new HttpRsjxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
