import { ActorTemplatePage } from './app.po';

describe('actor-template App', function() {
  let page: ActorTemplatePage;

  beforeEach(() => {
    page = new ActorTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('at works!');
  });
});
