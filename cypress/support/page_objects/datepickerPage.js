export class DatepickerPage{

    chceckIfDefaultDateIsTodayDate(){
        let currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
            cy.get('input').invoke('prop', 'value').should('contain', currentDate)
    }

    selectDateNumberDaysFromToday(daynuber){
        let date = new Date()
        date.setDate(date.getDate() + daynuber)
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
    }

    }

export const onDatepickerPage = new DatepickerPage()