/// <reference types="cypress" />

describe('DevFinance', () => {
    // Criando um teste
    it('Adicionar uma nova transão de entrada', () => {
        // Ação de visitar a página
        cy.visit('https://devfinance-agilizei.netlify.app/');

        // comandos get e contains
        // get = mapeia um elemento para usar seu seletor
        // contains = mapeia um elemento para usar seu texto
        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Freela');
        cy.get('input#amount').type('12');
        cy.get('input#date').type('2021-11-03');
        cy.contains('button', 'Salvar').click();

        cy.get('table tbody tr').should('have.length', 1)
    });
});