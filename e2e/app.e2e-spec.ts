import { DtracktestingPage } from './app.po';

describe('dtracktesting App', () => {
  let page: DtracktestingPage;

  beforeEach(() => {
    page = new DtracktestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
