/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cadastroPage.VisitarPáginaCadastro()
    });

    it.skip('Deve fazer Cadastro com sucesso: função', () => {
        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type('Nathan Menezes')
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url('include', 'dashboard')

    });

    it('Deve fazer Cadastro com sucesso: faker', () => {
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
        cy.get('#user-name').should('contain', name)

    });

    it('não deve cadastrar por faltar o nome', () => {
        let email = faker.internet.email()
        let fone = faker.phone.number()
        let senha = faker.internet.password()

        cy.get('#email').type(email)
        cy.get('#phone').type(fone)
        cy.get('#password').type(senha)
        cy.get('#confirm-password').type(senha)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.get(':nth-child(1) > .invalid-feedback').should('exist')
    });

    it('deve impedir cadastro com e-mail duplicado', () => {

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

        cy.visit('http://localhost:3000/register.html')

        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(fone)
        cy.get('#password').type(senha)
        cy.get('#confirm-password').type(senha)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.contains('Erro ao criar conta').should('exist')

    })

    it('Deve preencher cadastro automatizado', () => {
        let email = `teste${Date.now()}@teste.com`

        cy.preencherCadastro('Nathan Menezes', email, '1111111111', 'teste123', 'teste123')
        cy.url('include', 'dashboard')

    });

    it('Deve cadastrar com sucesso - PageObjects', () => {
        let name = faker.person.fullName()
        let email = `teste${Date.now()}@teste.com`
        let fone = faker.phone.number()
        let senha = faker.internet.password()

        cadastroPage.PreencherCadastro(name, email, fone, senha, senha)
        cy.url('include', 'dashboard')


    });
    it('Deve validar mensagem de erro por falta de nome', () => {
       let name = faker.person.fullName()
        let email = faker.internet.email()
        let fone = faker.phone.number()
        let senha = faker.internet.password()

        cadastroPage.PreencherCadastro('', email, fone, senha, senha)
        cy.get(':nth-child(1) > .invalid-feedback').should('exist', 'Nome deve ter pelo menos 2 caracteres')


    });

    it('Deve validar mensagem de erro por falta de email', () => {
       let name = faker.person.fullName()
        let fone = faker.phone.number()
        let senha = faker.internet.password()

        cadastroPage.PreencherCadastro(name, '', fone, senha, senha)
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('exist', 'Email válido é obrigatório')


    });
    it('Deve validar mensagem de erro por senhas diferentes', () => {
       let name = faker.person.fullName()
        let email = faker.internet.email()
        let fone = faker.phone.number()
        let senha = faker.internet.password()

        cadastroPage.PreencherCadastro(name, email, fone, senha, 'senha123')
        cy.get(':nth-child(5) > .invalid-feedback').should('exist', 'Senhas não coincidem')


    });



});