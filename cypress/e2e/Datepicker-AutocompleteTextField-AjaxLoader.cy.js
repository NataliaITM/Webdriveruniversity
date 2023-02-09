import { navigateTo } from "../support/page_objects/navigationPage"

describe('Datapicker', () => {
    beforeEach('open Contact Us page', () => {
        navigateTo.datepickerPage()
      })
    it('Current date', () => {

        let currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
        cy.get('input').invoke('prop', 'value').should('contain', currentDate)
    })

    it('Provide date', () => {
        let date = new Date()
        date.setDate(date.getDate() + 90)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleDateString('default', { month: 'long' })

        cy.get('.form-control').click()
        selectDayFromCurret()
        function selectDayFromCurret() {
            cy.get('.datepicker-switch').invoke('prop', 'textContent').then(monthYear => {
                if (!monthYear.includes(futureMonth)) {
                    cy.get('[class="next"]').eq(0).click()
                    selectDayFromCurret()
                } else {
                    cy.get('tbody tr').find('[class="day"]').contains(futureDay).click()
                }
            })
        }
        let futureDate = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
        cy.get('input').invoke('prop', 'value').should('contain', futureDate)
    })
})

describe('Autocomplete TextField', () => {
    beforeEach('open Contact Us page', () => {
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
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Unexpected token')) {
                console.log('Application Error Javascript Token')
                return false
            }
            return true
        })
        navigateTo.ajax_loaderPage()

        cy.get('[class="container"]').find('[style="display: none;"]', { timeout: 7000 })
        cy.get('#button1').click()
        cy.get('[class="modal-title"]').should('contain', 'Well Done For Waiting....!!!')
    })
})