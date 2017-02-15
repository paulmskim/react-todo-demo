describe('Integration Test: Full workflow', () => {
  it('should load the page and display the correct title', () => {
    expect(
      browser.url('/').getTitle()
    ).to.equal('React Todo Demo');
  });

  it('should add todo with text "Hello world"', () => {
    browser
      .setValue('.add-todo-input', 'Hello world')
      .click('.add-todo-button');

    expect(
      $$('.todo').length
    ).to.equal(1);

    expect(
      $('.todo-text-0').getText()
    ).to.equal('Hello world');
  });

  it('should add todo with text "Goodbye world"', () => {
    browser
      .setValue('.add-todo-input', 'Goodbye world')
      .click('.add-todo-button');

    expect(
      $$('.todo').length
    ).to.equal(2);

    expect(
      $('.todo-text-0').getText()
    ).to.equal('Hello world');

    expect(
      $('.todo-text-1').getText()
    ).to.equal('Goodbye world');
  });

  it('should toggle todo with text "Hello world"', () => {
    browser.click('.todo-text-0');

    expect(
      $$('.todo').length
    ).to.equal(2);

    browser.click('.footer-link-active');

    expect(
      $$('.todo').length
    ).to.equal(1);

    expect(
      $('.todo-text').getText()
    ).to.equal('Goodbye world');

    browser.click('.footer-link-completed');

    expect(
      $$('.todo').length
    ).to.equal(1);

    expect(
      $('.todo-text').getText()
    ).to.equal('Hello world');
  });

  it('should delete todo with text "Goodbye world"', () => {
    browser
      .click('.footer-link-all')
      .click('.todo-delete-1');

    expect(
      $$('.todo').length
    ).to.equal(1);

    expect(
      $('.todo-text').getText()
    ).to.equal('Hello world');
  });
});
