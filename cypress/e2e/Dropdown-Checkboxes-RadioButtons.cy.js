import { onDropdownCheckboxesRadiobuttonsPage } from "../support/page_objects/dropdown_checkoxes_radiobuttonsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Dropdown Menu(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Fist dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInDropdownMenuDropdownLists('#dropdowm-menu-1')
    })
    
    it('Second dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInDropdownMenuDropdownLists('#dropdowm-menu-2')
    })
    
    it('Third dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInDropdownMenuDropdownLists('#dropdowm-menu-3')
    })
})

describe('Checkboxe(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Default check of checkboxe(s)', () => {
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').each((checkBox, index) => {
                if(index === 2){
                    cy.wrap(checkBox).should('be.checked')
                }else{
                    cy.wrap(checkBox).should('not.be.checked')
                }
        })
    })
    
    it("Chceck and uncheck all checkboxe(s)", () => {
        onDropdownCheckboxesRadiobuttonsPage.checkAllCheckboxes()
        onDropdownCheckboxesRadiobuttonsPage.uncheckAllCheckboxes()
    })
    
    it('Check all checkboxe(s) and uncheck 2 and 4', () => {
        onDropdownCheckboxesRadiobuttonsPage.checkAllCheckboxes()
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(1).click({ force: true }).should('not.be.checked')
            cy.wrap(checkBoxes).eq(3).click({ force: true }).should('not.be.checked')
        })
    })
})

describe('Radio Button(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Default check of radio buttons', () => {
        onDropdownCheckboxesRadiobuttonsPage.checkedPropertyCheckForAllRadioButtons(false)
    })

    it('Click and check every radio button', () => {
        onDropdownCheckboxesRadiobuttonsPage.checkedPropertyCheckForAllRadioButtons(true)
    })
})

describe('Selected & Disabled window', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
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
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInSelectedDisabledDropdownLists()
    })
})