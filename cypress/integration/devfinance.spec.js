/// <reference types="cypress" />

describe('DevFinance', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
    })

    it('Adicionar uma nova transação de entrada', () => {
        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Aplicativo de finanças');
        cy.get('input#amount').type('10000');
        cy.get('input#date').type('2021-11-03');
        cy.contains('button', 'Salvar').click();

        cy.get('#data-table tbody tr').should('have.length', 1);
    });

    it('Adicionar uma nova transação de saída', () => {
        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Kit Ryzen 7');
        cy.get('input#amount').type('-8000');
        cy.get('input#date').type('2021-11-04');
        cy.contains('button', 'Salvar').click();

        cy.get('#data-table tbody tr').should('have.length', 1);
    });

    it('Remover uma transação adicionada', () => {
        cy.get('a[onclick*=open]').click();
        cy.get('input#description').type('Freela');
        cy.get('input#amount').type('12');
        cy.get('input#date').type('2021-11-03');
        cy.contains('button', 'Salvar').click();

        cy.contains('#data-table tbody','Freela')
            .find('img[onclick*=remove]')
            .should('have.length', 1);

        cy.contains('#data-table tbody', 'Freela')
            .find('img[onclick*=remove]')
            .click();

        cy.get('#data-table tbody tr').should('have.length', 0);
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
    parent = selecione o elemento pai
    siblings = lista os elementos irmãos
    children = busca por um filho
    find = busca por elemento(s) filho(s)
    click = clicar em um elemento selecionado
    should = deve ter uma especificação ...

 * Hooks - Ações que se repetem entre os testes
    - before = antes de todos os testes (1x)
    - beforeEach = antes de cada teste
    - afterEach = depois de cada teste
    - after = depois de todos os testes
*/ 