/// <reference types="Cypress" />

describe('Buger-Eats', function() {
    beforeEach(function(){
        cy.visit('https://buger-eats.vercel.app/')
    })

    it('Invalid CPF and no diver\'s license', function() {
        
        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get('input[name="name"]').type('Bruno')
        cy.get('input[name="cpf"]').type('0000000000000000000000000000000')
        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="whatsapp"]').type('0000000000000')
        cy.get('input[name="postalcode"]').type('15500000')
        cy.get('[type="button"]').first().click()
        cy.get('input[name="address-number"]').type('123')
        cy.get('input[name="address-details"]').type('123')
        cy.contains("Bicicleta").click()
        cy.get('[type="submit"]').click()

        cy.contains('Oops! CPF inválido').should('be.visible')

    })

    it('Complete registration', function() {
        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get('input[name="name"]').type('Bruno')
        cy.get('input[name="cpf"]').type('59387197042')
        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="whatsapp"]').type('0000000000000')
        cy.get('input[name="postalcode"]').type('15500000')
        cy.get('[type="button"]').first().click()
        cy.get('input[name="address-number"]').type('123')
        cy.get('input[name="address-details"]').type('123')
        cy.contains("Bicicleta").click()
        cy.get('.dropzone > input').invoke('show').selectFile('cypress/e2e/bug.jpg')
        cy.get('.dropzone > input').invoke('hide')
        cy.get('[type="submit"]').click()

        cy.contains('Recebemos os seus dados').should('be.visible')
    })

})