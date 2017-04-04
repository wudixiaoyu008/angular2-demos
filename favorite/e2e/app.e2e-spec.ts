import { FavoritePage } from './app.po';

describe('favorite App', function() {
  let page: FavoritePage;

  beforeEach(() => {
    page = new FavoritePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
