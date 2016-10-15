import { Ng2HandsOnSitePage } from './app.po';

describe('ng2-hands-on-site App', function() {
  let page: Ng2HandsOnSitePage;

  beforeEach(() => {
    page = new Ng2HandsOnSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
