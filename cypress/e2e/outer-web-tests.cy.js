describe('Responsive image visibility', () => {
  it('shows the people_on_laptop image on mobile layout', () => {
    // Set the viewport to a mobile size
    cy.viewport('iphone-6');

    // Visit the page where the image exists
    cy.visit('/'); // Change to the correct path if needed

    // Check that the image is visible
    cy.get('img[alt="Two people sitting and working on their laptops"]')
      .should('be.visible');
  });
});

describe('Navigation Test', () => {
    it('clicks the button and redirects to /about', () => {
      cy.visit('/'); // your dev server must be running
      cy.contains('EN').click();
      cy.wait(1000)
      cy.url().should('include', '/o/tax-return');
    });
  });


  describe('Language Toggle Test', () => {
    it('changes text content when switching languages', () => {
      cy.visit('/');
  
      // Assert default language text
      cy.get('[data-testid="heading1"]').should('contain', 'Framtal og álagning');
 
      // Waiting for browser to navigate
      cy.wait(1000)

      // Click the language toggle to switch to English
      cy.contains('EN').click();
  
      // Assert the text changed
      cy.get('[data-testid="heading1"]').should('contain', 'Tax return and levy');
    });
  });
  