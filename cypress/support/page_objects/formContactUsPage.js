export class FormContactUsPage{
firstNameField = '[name="first_name"]'
lastNameField = '[name="last_name"]'
emailField = '[name="email"]'
commentField = '[name="message"]'
submitButton = '[type="submit"]'
resetButton = '[type="reset"]'

    fillUpContactUsForm(firstName,lastName, email, comment){
        cy.get('form').then(form => {
            if (firstName !== null) cy.get(onFormContactUs.firstNameField).click().type(firstName)
            if (lastName !== null) cy.get(onFormContactUs.lastNameField).click().type(lastName)
            if (email !== null) cy.get(onFormContactUs.emailField).click().type(email)
            if (comment !== null) cy.get(onFormContactUs.commentField).click().type(comment)
          })
    }
    resetEnteredDataAndCheckContactUsForm(){
        cy.get('#contact_form').find('#form_buttons').then(buttons => {
            cy.get(onFormContactUs.resetButton).click()
        })
        cy.get('form').then(form => {
            cy.get(onFormContactUs.firstNameField).should('have.value', '')
            cy.get(onFormContactUs.lastNameField).should('have.value', '')
            cy.get(onFormContactUs.emailField).should('have.value', '')
            cy.get(onFormContactUs.commentField).should('have.value', '')
          })
        
    }
    submitForm(){
        cy.get('#contact_form').find('#form_buttons').then(buttons => {
            cy.get(onFormContactUs.submitButton).click()
        })
    }
    errorMessageAllFieldsRequired(){
        cy.get('body').should('contain', 'Error: all fields are required')
    }
    errorMessageInvalidEmail(){
        cy.get('body').should('contain', 'Error: Invalid email address')
    }
    messageFormSubmitedCorrect(){
        cy.get('body').find('#contact_reply').should('contain', 'Thank You for your Message!')
    }
}
export const onFormContactUs = new FormContactUsPage