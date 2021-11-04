/// <reference types="cypress" />

describe('DevFinance', () => {
    it('Adicionar uma nova transação de entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/');

        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Aplicativo de finanças');
        cy.get('input#amount').type('10000');
        cy.get('input#date').type('2021-11-03');
        cy.contains('button', 'Salvar').click();

        cy.get('table tbody tr').should('have.length', 1);
    });

    it('Adicionar uma nova transação de saída', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/');

        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Kit Ryzen 7');
        cy.get('input#amount').type('-8000');
        cy.get('input#date').type('2021-11-04');
        cy.contains('button', 'Salvar').click();

        cy.get('table tbody tr').should('have.length', 1);
    });

    it('Remover uma transação de adicionada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/');

        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Freela');
        cy.get('input#amount').type('12');
        cy.get('input#date').type('2021-11-03');
        cy.contains('button', 'Salvar').click();

        cy.get('table tbody tr').should('have.length', 1);

        cy.get('table tbody tr:first-child img[onclick*=remove]').click();

        cy.get('table tbody tr').should('have.length', 0);
    });
});

/*
 * Comandos
    describe = espeteste
    it = novo teste
    visit = visitar uma página específica
    get = mapeia um elemento para usar seu seletor
    contains = mapeia um elemento para usar seu texto
    type = digitar algo no elemento selecionado
    click = clicar em um elemento selecionado
    should = deve ter uma especificação ...
*/ 