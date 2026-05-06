
describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html')

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
});
