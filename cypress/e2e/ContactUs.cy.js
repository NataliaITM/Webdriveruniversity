describe('Reset of entered data', () => {
  it('Reset of entered data', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
      cy.wrap(form).find('[name="message"]').click().type('Comment')

      cy.get('#form_buttons').find('[type="reset"]').click()

      cy.wrap(form).find('[name="first_name"]').should('have.value', '')
      cy.wrap(form).find('[name="last_name"]').should('have.value', '')
      cy.wrap(form).find('[name="email"]').should('have.value', '')
      cy.wrap(form).find('[name="message"]').should('have.value', '')
    })
  })
})

describe('Partial filling up of the form', () => {

  it('Empty form', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('#form_buttons').find('[type="submit"]').click()
    cy.get('body').then(validationMessage => {
      cy.wrap(validationMessage).should('contain', 'Error: all fields are required')
      cy.wrap(validationMessage).should('contain', 'Error: Invalid email address')
    })
  })
  it('Field FirstName was not filled up', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('#form_buttons').find('[type="submit"]').click()
    cy.get('body').should('contain', 'Error: all fields are required')
  })
  it('Field LastName was not filled up', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('#form_buttons').find('[type="submit"]').click()
    cy.get('body').should('contain', 'Error: all fields are required')
  })
  it('Field Email was not filled up', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('#form_buttons').find('[type="submit"]').click()
    cy.get('body').then(validationMessage => {
      cy.wrap(validationMessage).should('contain', 'Error: all fields are required')
      cy.wrap(validationMessage).should('contain', 'Error: Invalid email address')
    })
  })
  it('Field Comments was not filled up', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
    })
    cy.get('#form_buttons').find('[type="submit"]').click()
    cy.get('body').should('contain', 'Error: all fields are required')
  })
})

describe('Email Adress validation', () => {

  it('Invalid Email Adresses', () => {

    const invalidEmail = ['@example.com', 'JaneDoe', 'Jane.Doeexample.com', 'Jane.Doe@', 'Jane..Doeexample.com', 'Jane@Doe@111.222.333.44444']

    cy.wrap(invalidEmail).each(invalidEmail => {
      cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('form').find('[name="first_name"]').click().type('Jane')
      cy.get('form').find('[name="last_name"]').click().type('Doe')
      cy.get('form').find('[name="email"]').click().type(invalidEmail)
      cy.get('form').find('[name="message"]').click().type('Comment')
      cy.get('#form_buttons').find('[type="submit"]').click()

      cy.get('body').should('contain', 'Error: Invalid email address')
    })
  })
})

describe('Happy path', () => {
  it('All fields filled up correct', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('#form_buttons').find('[type="submit"]').click()
    cy.get('body').should('contain', 'Thank You for your Message!')
  })
})