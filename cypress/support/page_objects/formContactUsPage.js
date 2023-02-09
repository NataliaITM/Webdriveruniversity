export class FormContactUsPage{
    fillUpContactUsFormWithValidData(firstName,lastName, email, comment){
        cy.get('form').then(form => {
            cy.wrap(form).find('[name="first_name"]').click().type(firstName)
            cy.wrap(form).find('[name="last_name"]').click().type(lastName)
            cy.wrap(form).find('[name="email"]').click().type(email)
            cy.wrap(form).find('[name="message"]').click().type(comment)
          })
    }
}
export const onFonmContactUs = new FormContactUsPage