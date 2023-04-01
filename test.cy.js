describe('Testing PracticeTestAutomation', () => {

    // Testing with a user that is wrong
    it('Do not have access to page because of the username', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('#username').type('admin');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        
        // See if username error msg exist
        cy.contains('Your username is invalid!').should('exist');
    })

    // Testing with a password that is wrong
    it('Do not have access to page because of the username', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('#username').type('student');
        cy.get('#password').type('Password12344');
        cy.get('#submit').click();

        // See if password error msg exist
        cy.contains('Your password is invalid!').should('exist');
    })

    // Testing if we can access the page with the correct username and password
    it('Do have access to page', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        // See if the 'Log out' button exist
        cy.get('.wp-block-button__link').should('exist');
    })

    // Testing if we can use the Log out button
    it('Log out button works', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        // Click on Log out button
        cy.get('.wp-block-button__link').click();

        // Check if the Log out button works
        cy.contains('Test login').should('exist');


    })


})
