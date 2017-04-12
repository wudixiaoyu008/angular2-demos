import { AngularForm2Page } from './app.po';

describe('angular-form2 App', function() {
  let page: AngularForm2Page;

  beforeEach(() => {
    page = new AngularForm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
