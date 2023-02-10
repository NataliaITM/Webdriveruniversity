import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { uncaughtExceptions } from "../support/page_objects/uncaught_exception"

describe('Datapicker', () => {
    beforeEach('open Datapicker page', () => {
        navigateTo.datepickerPage()
      })
    it('Current date', () => {
        onDatepickerPage.chceckIfDefaultDateIsTodayDate()
    })

    it('Provided date', () => {
        onDatepickerPage.selectDateNumberDaysFromToday(5)
})
})

describe('Autocomplete TextField', () => {
    beforeEach('open Autocomplete TextField page', () => {
        navigateTo.autocomplete_textfieldPage()
      })
    it('Corectess of autocomplete', () => {
        let inputText = ['I', 'Ba', 'Gra']
        cy.wrap(inputText).each(inputText => {
            cy.get('#myInput').click().clear().type(inputText)
            cy.get('#myInputautocomplete-list').find('strong').should('contain', inputText)
        })
    })
    it('Check second element from autocomplete list', () => {
        cy.get('#myInput').click().type('Gra')
        cy.get('#myInputautocomplete-list').find('strong').eq(1).should('contain', 'Gra')
    })
})

describe('Ajax-Loader', () => {
    it('Click me', () => {
        uncaughtExceptions.SkipUnexpectedTokenErrorMessage()
        navigateTo.ajax_loaderPage()

        cy.get('[class="container"]').find('[style="display: none;"]', { timeout: 7000 })
        cy.get('#button1').click()
        cy.get('[class="modal-title"]').should('contain', 'Well Done For Waiting....!!!')
    })
})