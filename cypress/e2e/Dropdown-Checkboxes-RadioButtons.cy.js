import { onDropdownCheckboxesRadiobuttonsPage } from "../support/page_objects/dropdown_checkoxes_radiobuttonsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Dropdown Menu(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('First dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInFirstDropdownLists()
    })
    
    it('Second dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInSecondDropdownLists()
    })
    
    it('Third dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInThirdDropdownLists()
    })
})

describe('Checkboxe(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })
    
    it("Chceck and uncheck all checkboxe(s)", () => {
        onDropdownCheckboxesRadiobuttonsPage.defaultCheckOfCheckboxes()
        onDropdownCheckboxesRadiobuttonsPage.checkAllCheckboxes()
        onDropdownCheckboxesRadiobuttonsPage.uncheckAllCheckboxes()
    })
    
    it('Check all checkboxe(s) and uncheck selected checkboxes', () => {
        onDropdownCheckboxesRadiobuttonsPage.checkAllCheckboxes()
        onDropdownCheckboxesRadiobuttonsPage.uncheckTwoCheckboxes(['1','3'])
    })
})

describe('Radio Button(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Click and check every radio button', () => {
        onDropdownCheckboxesRadiobuttonsPage.checkedPropertyCheckForAllRadioButtons(false)
        onDropdownCheckboxesRadiobuttonsPage.checkedPropertyCheckForAllRadioButtons(true)
    })
})

describe('Selected & Disabled window', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Default check of radio buttons', () => {
        onDropdownCheckboxesRadiobuttonsPage.defaultCheckVegetableRadioButtons()
    })
    it('Check every radio button', () => {
        onDropdownCheckboxesRadiobuttonsPage.clickOnAllVegetableRadioButtons()
    })
    it('Fruits dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectAllOptionsInSelectedDisabledDropdownLists()
    })
})