import { BookstoreClientSidePage } from './app.po';

describe('bookstore-client-side App', () => {
  let page: BookstoreClientSidePage;

  beforeEach(() => {
    page = new BookstoreClientSidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
