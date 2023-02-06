describe('Datapicker', () => {
    it('Current date', () => {
        let date = new Date()
        let day = date.getDate()
        let month = date.toLocaleDateString('default', {month: 'long'})
        let year = date.getFullYear()
        let todayMonthAndYear = month + ' ' + year
        
    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    cy.get('.form-control').click()
    cy.get('thead tr').find('th').eq(1).should('contain', todayMonthAndYear)
    cy.get('tbody tr').find('[class="today day"]').should('contain', day)
    })

    it('Provide date', () => {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    
    })
})