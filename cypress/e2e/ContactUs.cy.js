import { onFormContactUs } from "../support/page_objects/formContactUsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Reset of entered data', () => {
  it('Reset of entered data', () => {
    navigateTo.contactUsPage()
    onFormContactUs.fillUpContactUsForm('Jane', 'Doe', 'JaneDoe1@example.com', 'Comment')
    onFormContactUs.resetEnteredDataAndCheckContactUsForm()
  })
})

describe('Partial filling up of the form', () => {
  beforeEach('open Contact Us page', () => {
    navigateTo.contactUsPage()
  })

  it('Empty form', () => {
    onFormContactUs.submitFormWithoutAllRequiredFiles()
    cy.get('body').should('contain', 'Error: Invalid email address')
  })

  it('Field FirstName was not filled up', () => {
    onFormContactUs.fillUpContactUsForm(null, 'Doe', 'Jane.Doe@example.com', 'Comment')
    onFormContactUs.submitFormWithoutAllRequiredFiles()
  })

  it('Field LastName was not filled up', () => {
    onFormContactUs.fillUpContactUsForm('Jane', null, 'Jane.Doe@example.com', 'Comment')
    onFormContactUs.submitFormWithoutAllRequiredFiles()
  })

  it('Field Email was not filled up', () => {
    onFormContactUs.fillUpContactUsForm('Jane', 'Doe', null, 'Comment')
    onFormContactUs.submitFormWithoutAllRequiredFiles()
    cy.get('body').should('contain', 'Error: Invalid email address')
  })

  it('Field Comments was not filled up', () => {
    onFormContactUs.fillUpContactUsForm('Jane', 'Doe', 'Jane.Doe@example.com', null)
    onFormContactUs.submitFormWithoutAllRequiredFiles()
  })
})

describe('Email Adress validation', () => {
  it('Invalid Email Adresses', () => {
    const invalidEmail = ['@example.com', 'JaneDoe', 'Jane.Doeexample.com', 'Jane.Doe@', 'Jane..Doeexample.com', 'Jane@Doe@111.222.333.44444']

    cy.wrap(invalidEmail).each(invalidEmail => {
      navigateTo.contactUsPage()
      onFormContactUs.fillUpContactUsForm('Jane', 'Doe', invalidEmail, 'Comment')
      cy.get('form').submit()
      cy.get('body').should('contain', 'Error: Invalid email address')
    })
  })
})

describe('Happy path', () => {
  it('All fields filled up correct', () => {
    navigateTo.contactUsPage()
    onFormContactUs.fillUpContactUsForm('Aiden', 'Bishop', 'aiden.bishop@example.com', 'Lorem ipsum dolor sit amet.')
    cy.get('form').submit()
    cy.get('body').should('contain', 'Thank You for your Message!')
  })
})