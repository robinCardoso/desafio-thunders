
/// <reference types="cypress" />

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

describe('Cadastro de Clientes', () => {
    it('Criando novos cadastros de clientes e verificando se cadastro foi concluido.', () => {
        /* Acessando WEB Site */
        cy.visit('http://automationpractice.com/index.php');

        /* Clicar em Sign in */
        cy.get('div a.login').click();

        /* Verificando se a formulário para criação de conta esta visivel */
        cy.contains('Create an account').then(() => {

            /* Inserindo um e-mail */
            cy.get('div input#email_create').type(chance.email())
            cy.get('.page-heading').click();

                /* Verificar se o e-mail informado é valido */
                cy.get('div[class="form-group form-ok"]').should('be.visible').then(() => {

                    /* Clicar para registrar */
                    cy.get('button#SubmitCreate').click();

                    /* Verifica se o formulário de cadastro esta visível*/
                    cy.get('div.account_creation h3').contains('Your personal information').then(() => {

                        /* Preenchendo o formulário */

                        cy.get('#id_gender1').check();
                        cy.get('#customer_firstname').type(chance.first());
                        cy.get('#customer_lastname').type(chance.last());
                        cy.get('#passwd').type('Min759636');

                        cy.get('div#uniform-days select').select('12');
                        cy.get('div#uniform-months select').select('September');
                        cy.get('div#uniform-years select').select('1989');

                        /* Irá selecionar "newsletter!" "special offers" */
                        cy.get('#newsletter').check();
                        cy.get('#optin').check();

                        cy.get('p #firstname').type('Emilio');
                        cy.get('p #lastname').type('Cacheco');
                        cy.get('p #company').type('Roupas');
                        cy.get('p #address1').type('Rede nacional do vestúario');
                        cy.get('p #address2').type('Prédio');
                        cy.get('p #city').type('Chapecó');
                        cy.get('p #id_state').select('South Carolina');
                        cy.get('p #postcode').type('89802');
                        cy.get('p #other').type('(55)49 9999 9999');
                        cy.get('p #phone').type('(55) 49 3333 2222');
                        cy.get('p #phone_mobile').type('(55) 49 8888 5555');
                        cy.get('p #alias').type(chance.address());

                        /* Clicar em registrar */
                        cy.get('#submitAccount > span').click();

                        /* Cadastro ralizado com sucesso */
                        cy.contains('Welcome to your account').should('be.visible');
                    })
                })
        })
    });
});