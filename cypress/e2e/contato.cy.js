/// <reference types="cypress">

describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')

  });

  it('Deve preencher o formulário contato com sucesso', () => {

    cy.get('[name="name"]').type('Nathan Menezes')
    cy.get('[name="email"]').type('nathan@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')

    
  });  

  it('teste sem preencher o nome', () => {
    cy.get('[name="email"]').type('nathan@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('teste')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo Nome.').should('exist')

    
  });
  it('Teste sem preencher o e-mail', () => {
    cy.get('[name="name"]').type('Nathan Menezes')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('teste')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo E-mail').should('exist')

  });  
  
  it('Teste sem preencher o Assunto', () => {
    cy.get('[name="name"]').type('Nathan Menezes')
    cy.get('[name="email"]').type('nathan@teste.com')
    cy.get('[name="message"]').type('teste')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, selecione o Assunto.').should('exist')

    
  });  
  it('Teste sem preencher Mensagem', () => {

    cy.get('[name="name"]').type('Nathan Menezes')
    cy.get('[name="email"]').type('nathan@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, escreva sua Mensagem').should('exist')
    
  });  

  
});
