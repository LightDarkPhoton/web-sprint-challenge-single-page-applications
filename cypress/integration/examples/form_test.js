describe('Pizza', () => {

    describe('Testing', () => {

        it('Navigate to home', () => {
            cy.visit('http://localhost:3001/pizza')
            cy.url().should('include','localhost')
        })

        it('Add text to the name', () => {
            cy.get('input[name="name"]')
            .type('Andrew Ruiz')
        })


        it('special', () => {
            cy.get('input[name="specialInstructions"]')
            .type('Extra Cheese')
        })

        it('toppingOne', () => {
            cy.get('input[name="toppingsOne"')
            .click()
        })

        it('toppingTwo', () => {
            cy.get('input[name="toppingsTwo"')
            .click()
        })

        it('Submit', () => {
            cy.get("#submitButton")
            .click()
        })

    })
})