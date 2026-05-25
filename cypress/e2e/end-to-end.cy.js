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

        cadastroPage.PreencherCadastro(name, email, fone, senha, senha)
        cy.url('include', 'dashboard')
        cy.get('.user-actions > .btn-outline-danger > .fas').click()
        cadastroPage.FazerLogin(email, senha)
        cy.url().should('include', 'dashboard')



    });




});