import { ItemProdutoPage } from './app.po';

describe('item-produto App', () => {
  let page: ItemProdutoPage;

  beforeEach(() => {
    page = new ItemProdutoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
