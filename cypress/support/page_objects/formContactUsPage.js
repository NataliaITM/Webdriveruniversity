export class FormContactUsPage{
    fillUpContactUsForm(firstName,lastName, email, comment){
        cy.get('form').then(form => {
            if (firstName !== null) cy.wrap(form).find('[name="first_name"]').click().type(firstName)
            if (lastName !== null) cy.wrap(form).find('[name="last_name"]').click().type(lastName)
            if (email !== null) cy.wrap(form).find('[name="email"]').click().type(email)
            if (comment !== null) cy.wrap(form).find('[name="message"]').click().type(comment)
          })
    }
    resetEnteredDataAndCheckContactUsForm(){
        cy.get('#form_buttons').find('[type="reset"]').click()
        cy.get('form').then(form => {
          cy.wrap(form).find('[name="first_name"]').should('have.value', '')
          cy.wrap(form).find('[name="last_name"]').should('have.value', '')
          cy.wrap(form).find('[name="email"]').should('have.value', '')
          cy.wrap(form).find('[name="message"]').should('have.value', '')
          })
        
    }
    submitFormWithoutAllRequiredFiles(){
        cy.get('form').submit()
        cy.get('body').should('contain', 'Error: all fields are required')
    }
}
export const onFormContactUs = new FormContactUsPage