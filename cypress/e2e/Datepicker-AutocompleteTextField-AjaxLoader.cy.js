describe('Datapicker', () => {
    it('Current date', () => {

        let currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('input').invoke('prop', 'value').should('contain', currentDate)
    })

    it('Provide date', () => {
        let date = new Date()
        date.setDate(date.getDate() + 90)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleDateString('default', { month: 'long' })

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
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
        console.log(date)
        let futureDate = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
        cy.get('input').invoke('prop', 'value').should('contain', futureDate)
    })
})

describe('Autocomplete TextField', () => {
    it('Corectess of autocomplete', () => {
        let inputText = ['I', 'Ba', 'Gra']
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.wrap(inputText).each(inputText => {
            cy.get('#myInput').click().clear().type(inputText)
            cy.get('#myInputautocomplete-list').find('strong').should('contain', inputText)
        })
    })
    it('Check second element from autocomplete list', () => {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
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
        cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')

        cy.get('[class="container"]').find('[style="display: none;"]', { timeout: 7000 })
        cy.get('#button1').click()
        cy.get('[class="modal-title"]').should('contain', 'Well Done For Waiting....!!!')
    })
})