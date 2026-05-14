/// <reference types="cypress"/>

import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: catálogo de busca', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.input-group-text').click()
        cy.contains('1984').should('exist')
    });

    it('Deve fazer a busca de um livro com sucesso', () => {
        cy.get('#search-input').type(catalogo[Math.floor(Math.random() * 3)].livro)
        cy.get('.input-group-text').click()
        cy.contains(catalogo[Math.floor(Math.random() * 3)].livro).should('exist')


          
    });

});