/// <reference types="Cypress" />

describe('Buger-Eats', function() {
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/IFrame/')
    })

    const getIframeDocument = () => {
        return cy
        .get('#frame')
       .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
    }

    it('Complete submition', function() {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('Bruno');
        cy.get('input[name="last_name"]').type('Prado');
        cy.get('input[name="email"]').type('test@test.com');
        cy.get('textarea[name="message"]').type('Message');
        cy.get('input[type="submit"]').click()
        
        cy.contains('Thank You for your Message!').should('be.visible')

    })

})