/// <reference types="cypress"/>

describe('Funcionalidade: carrinho', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
        cy.get('.btn-primary').first().click()
        cy.get(':nth-child(2) > .nav-link').click()


    });

    it('Deve retirar item no carrinho', () => {

        cy.get('.btn-outline-danger > .fas').click()
        cy.get('#alert-container').contains(' "1984" foi removido da cesta')
        cy.get('h3').should('contain', 'Sua cesta está vazia')

    });

    it('Deve recusar adicionar item repetido no carrinho', () => {
        cy.visit('catalog.html')
        cy.get('.btn-primary').first().click()
        cy.get('#global-alert-container').should('contain', ' "1984" já está na sua cesta!')
    });


});