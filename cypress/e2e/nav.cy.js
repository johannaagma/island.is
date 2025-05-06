describe('Navigation Test', () => {
    it('clicks the button and redirects to /about', () => {
      cy.visit('/'); // your dev server must be running
      cy.contains('EN').click();
      cy.wait(1000)
      cy.url().should('include', '/o/tax-return');
    });
  });