describe('Busca de Produtos', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Busca produto existente', () => {
    cy.get('[data-test="search-query"]').type('plier');
    cy.get('[data-test="search-submit"]').click();
    cy.get("[data-test='search-caption']").should('contain', 'Searched for: plier');
  })


    it('Busca produto que NÃO existente', () => {
    cy.get('[data-test="search-query"]').type('podutoxyz');
    cy.get('[data-test="search-submit"]').click();
    cy.get("[data-test='no-results']").should('contain', 'There are no products found.');
  })


    it('Busca produto com caracteres especiais', () => {
    cy.get('[data-test="search-query"]').type('plier@*');
    cy.get('[data-test="search-submit"]').click();
    cy.get("[data-test='no-results']").should('contain', 'There are no products found.');
  })

})

