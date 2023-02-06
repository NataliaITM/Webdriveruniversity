const url = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
//Do poprawy/skrócenia
describe('Dropdown Menu(s)', () => {
    it('Fist dropdown', () => {
    cy.visit(url)
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-1').select('JAVA').should('have.value','java')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-1').select('C#').should('have.value','c#')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-1').select('Python').should('have.value','python')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-1').select('SQL').should('have.value','sql')
})
it('Second dropdown', () => {
    cy.visit(url)
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-2').select('Eclipse').should('have.value','eclipse')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-2').select('Maven').should('have.value','maven')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-2').select('JUnit').should('have.value','junit')
})
it('Third dropdown', () => {
    cy.visit(url)
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-3').select('HTML').should('have.value','html')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-3').select('CSS').should('have.value','css')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-3').select('JavaScript').should('have.value','javascript')
    cy.contains ('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-3').select('JQuery').should('have.value','jquery')
})
})

describe('Checkboxe(s)', () => {
    it('Default check of checkboxe(s)', () => {
        cy.visit(url)
        cy.contains('.thumbnail','Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).should('not.be.checked')
            cy.wrap(checkBoxes).eq(1).should('not.be.checked')
            cy.wrap(checkBoxes).eq(2).should('be.checked')
            cy.wrap(checkBoxes).eq(3).should('not.be.checked')
        })
    })

    it("Chceck and uncheck all checkboxe(s)", () => {
        cy.visit(url)
        cy.contains('.thumbnail','Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).check({force:true}).should('be.checked')
            cy.wrap(checkBoxes).eq(1).check({force:true}).should('be.checked')
            cy.wrap(checkBoxes).eq(2).click({force:true}).should('not.be.checked')
            cy.wrap(checkBoxes).eq(3).check({force:true}).should('be.checked')

            cy.wrap(checkBoxes).eq(0).click({force:true}).should('not.be.checked')
            cy.wrap(checkBoxes).eq(1).click({force:true}).should('not.be.checked')
            cy.wrap(checkBoxes).eq(2).check({force:true}).should('be.checked')
            cy.wrap(checkBoxes).eq(3).click({force:true}).should('not.be.checked') 
        })
    })
    it('Check all checkboxe(s) and uncheck 2 and 4', () => {
        cy.visit(url)
        cy.contains('.thumbnail','Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).check({force:true}).should('be.checked')
            cy.wrap(checkBoxes).eq(1).check({force:true}).should('be.checked')
            cy.wrap(checkBoxes).eq(2).should('be.checked')
            cy.wrap(checkBoxes).eq(3).check({force:true}).should('be.checked')

            cy.wrap(checkBoxes).eq(1).click({force:true}).should('not.be.checked')
            cy.wrap(checkBoxes).eq(3).click({force:true}).should('not.be.checked')
        })
    })
})

describe('Radio Button(s)', () => {

    it('Default check of radio buttons', () => {
        cy.visit(url)
        cy.contains('.thumbnail','Radio Button(s)').find('.section-title').find('[type="radio"]').each(item =>{
            
            cy.wrap(item).invoke('prop','checked').should('equal', false)
         })
    })


    it('Check every radio button', () => {
        cy.visit(url)
        cy.contains('.thumbnail','Radio Button(s)').find('.section-title').find('[type="radio"]').each(item =>{
            
            cy.wrap(item).click()
            cy.wrap(item).invoke('prop','checked').should('equal', true)
            cy.wait(500)
         })
    })
})

describe('Selected & Disabled window', () => {

    it('Default check of radio buttons', () => {
        cy.visit(url)
        cy.contains('.thumbnail','Selected & Disabled').find('.section-title').find('[type="radio"]').each((item, index) =>{
            if(index < 2 ) {
                cy.wrap(item).invoke('prop','checked').should('equal', false)
            } else {
                cy.wrap(item).invoke('prop','checked').should('equal', true)
            }
         })
    })
    it('Check every radio button', () => {
        cy.visit(url)
        cy.contains('.thumbnail','Selected & Disabled').find('.section-title').find('[type="radio"]').each((item, index) =>{
            console.log(item)
            if(index == 0 || index == 2){
            cy.wrap(item).click()
            cy.wrap(item).invoke('prop','checked').should('equal', true)
            }else {
            cy.wrap(item).invoke('prop','disabled').should('equal', true)
            }
         })
    })
    it('Fruits dropdown', () => {
        cy.visit(url)
        cy.contains('.thumbnail', 'Selected & Disabled').find('#fruit-selects').find('option').then(fruit => {
            cy.wrap(fruit).eq(0).click({force: true})
            cy.wrap(fruit).eq(0).invoke('prop','value').should('equal', 'apple')
            cy.wrap(fruit).eq(1).invoke('prop','value').should('equal', 'orange')
            cy.wrap(fruit).eq(1).invoke('prop','disabled').should('equal', true)
            cy.wrap(fruit).eq(2).click({force: true})
            cy.wrap(fruit).eq(2).invoke('prop','value').should('equal', 'pear')
            cy.wrap(fruit).eq(3).click({force: true})
            cy.wrap(fruit).eq(3).invoke('prop','value').should('equal', 'grape')
            cy.wrap(fruit).eq(3).invoke('prop','defaultSelected').should('equal', true)
        })

    })

})