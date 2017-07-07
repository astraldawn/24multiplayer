import { TwentyfourPage } from './app.po';

describe('twentyfour App', () => {
  let page: TwentyfourPage;

  beforeEach(() => {
    page = new TwentyfourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
