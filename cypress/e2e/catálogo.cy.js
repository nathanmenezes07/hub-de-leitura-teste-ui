/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve adicionar o livro à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)

    });

    it('Deve adicionar todos os livros da 1a pág. à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
        cy.get('#cart-count').should('contain', 12)
    });

    it('Deve adicionar o primeiro livro à cesta', () => {
        cy.get('.btn-primary').first().click()
        cy.get('#cart-count').should('contain', 1)

    });
    it('Deve adicionar o último livro à cesta', () => {
        cy.get('.btn-primary').last().click()
        cy.get('#cart-count').should('contain', 1)

    });

    it('Deve adicionar o quinto livro à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', '"A Metamorfose" foi adicionado à cesta!')
        cy.get('#cart-count').should('contain', 1)

    });
    it('Deve entrar na página do livro e depois adicionar à cesta', () => {
        cy.contains('Pedra Filosofal').click()
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')
        cy.get('#cart-count').should('contain', 1)

    });

    
});
