import { FormComplexPage } from './app.po';

describe('form-complex App', function() {
  let page: FormComplexPage;

  beforeEach(() => {
    page = new FormComplexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
