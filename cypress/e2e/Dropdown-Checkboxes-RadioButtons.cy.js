import { navigateTo } from "../support/page_objects/navigationPage"

describe('Dropdown Menu(s)', () => {
    beforeEach('open Contact Us page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Fist dropdown', () => {
        cy.contains('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-1').find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "JAVA": "java",
                "C#": "c#",
                "Python": "python",
                "SQL": "sql"
            }

            cy.contains('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-1').select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    })
    it('Second dropdown', () => {
        cy.contains('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-2').find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "Eclipse": "eclipse",
                "Maven": "maven",
                "TestNG": "testng",
                "JUnit": "junit"
            }

            cy.contains('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-2').select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    })
    it('Third dropdown', () => {
        cy.contains('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-3').find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "HTML": "html",
                "CSS": "css",
                "JavaScript": "javascript",
                "JQuery": "jquery"
            }

            cy.contains('.thumbnail', 'Dropdown Menu(s)').find('#dropdowm-menu-3').select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    })
})

describe('Checkboxe(s)', () => {
    beforeEach('open Contact Us page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Default check of checkboxe(s)', () => {
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).should('not.be.checked')
            cy.wrap(checkBoxes).eq(1).should('not.be.checked')
            cy.wrap(checkBoxes).eq(2).should('be.checked')
            cy.wrap(checkBoxes).eq(3).should('not.be.checked')
        })
    })

    it("Chceck and uncheck all checkboxe(s)", () => {
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(checkBoxes).eq(1).check({ force: true }).should('be.checked')
            cy.wrap(checkBoxes).eq(2).click({ force: true }).should('not.be.checked')
            cy.wrap(checkBoxes).eq(3).check({ force: true }).should('be.checked')

            cy.wrap(checkBoxes).eq(0).click({ force: true }).should('not.be.checked')
            cy.wrap(checkBoxes).eq(1).click({ force: true }).should('not.be.checked')
            cy.wrap(checkBoxes).eq(2).check({ force: true }).should('be.checked')
            cy.wrap(checkBoxes).eq(3).click({ force: true }).should('not.be.checked')
        })
    })
    it('Check all checkboxe(s) and uncheck 2 and 4', () => {
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(checkBoxes).eq(1).check({ force: true }).should('be.checked')
            cy.wrap(checkBoxes).eq(2).should('be.checked')
            cy.wrap(checkBoxes).eq(3).check({ force: true }).should('be.checked')

            cy.wrap(checkBoxes).eq(1).click({ force: true }).should('not.be.checked')
            cy.wrap(checkBoxes).eq(3).click({ force: true }).should('not.be.checked')
        })
    })
})

describe('Radio Button(s)', () => {
    beforeEach('open Contact Us page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Default check of radio buttons', () => {
        cy.contains('.thumbnail', 'Radio Button(s)').find('.section-title').find('[type="radio"]').each(item => {

            cy.wrap(item).invoke('prop', 'checked').should('equal', false)
        })
    })


    it('Check every radio button', () => {
        cy.contains('.thumbnail', 'Radio Button(s)').find('.section-title').find('[type="radio"]').each(item => {

            cy.wrap(item).click()
            cy.wrap(item).invoke('prop', 'checked').should('equal', true)
        })
    })
})

describe('Selected & Disabled window', () => {
    beforeEach('open Contact Us page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Default check of radio buttons', () => {
        cy.contains('.thumbnail', 'Selected & Disabled').find('.section-title').find('[type="radio"]').each((item, index) => {
            if (index < 2) {
                cy.wrap(item).invoke('prop', 'checked').should('equal', false)
            } else {
                cy.wrap(item).invoke('prop', 'checked').should('equal', true)
            }
        })
    })
    it('Check every radio button', () => {
        cy.contains('.thumbnail', 'Selected & Disabled').find('.section-title').find('[type="radio"]').each((item, index) => {
            if (index == 0 || index == 2) {
                cy.wrap(item).click()
                cy.wrap(item).invoke('prop', 'checked').should('equal', true)
            } else {
                cy.wrap(item).invoke('prop', 'disabled').should('equal', true)
            }
        })
    })
    it('Fruits dropdown', () => {
        cy.contains('.thumbnail', 'Selected & Disabled').find('#fruit-selects').find('option').each((fruit, index) => {
            const fruitName = fruit.text()
            console.log(fruitName)
            const fruitValue = {
                "Apple": "apple",
                "Orange": "orange",
                "Pear": "pear",
                "Grape": "grape"
            }
            if (index == 1) {
                cy.wrap(fruit).invoke('prop', 'value').should('contain', fruitValue[fruitName])
                cy.wrap(fruit).invoke('prop', 'disabled').should('equal', true)
            } else {
                cy.contains('.thumbnail', 'Selected & Disabled').find('#fruit-selects').select(fruitName)
                cy.wrap(fruit).invoke('prop', 'selected').should('equal', true)
                cy.wrap(fruit).should('contain', fruitName)
                cy.wrap(fruit).invoke('prop', 'value').should('contain', fruitValue[fruitName])

            }
        })
    })
})