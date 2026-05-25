/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';


describe('Funcionalidade: Cadastrar e Logar', () => {
    beforeEach(() => {
       cadastroPage.VisitarPáginaCadastro()
        
        
    });

    it.only('Deve cadastrar e logar com sucesso', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let fone = faker.phone.number()
        let senha = faker.internet.password()

        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(fone)
        cy.get('#password').type(senha)
        cy.get('#confirm-password').type(senha)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url('include', 'dashboard')
        cy.get('.user-actions > .btn-outline-danger > .fas').click()
        cy.get('#email').type(email)
        cy.get('#password').type(senha)
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')



    });




});