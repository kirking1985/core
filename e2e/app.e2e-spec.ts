import { CorePage } from './app.po';

describe('core App', () => {
  let page: CorePage;

  beforeEach(() => {
    page = new CorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
