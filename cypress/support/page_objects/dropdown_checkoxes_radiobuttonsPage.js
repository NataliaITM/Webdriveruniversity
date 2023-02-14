export class dropdownCheckboxesRadiobuttonsPage{
    javaDropdownList = '#dropdowm-menu-1'
    eclipseDropdownList = '#dropdowm-menu-2'
    htmlDropdownList = '#dropdowm-menu-3'
    fruitDropdownList = '#fruit-selects'


    selectAllOptionsInFirstDropdownLists(){
        cy.get('[class="container"]').contains('.thumbnail', 'Dropdown Menu(s)').find(onDropdownCheckboxesRadiobuttonsPage.javaDropdownList).find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "JAVA": "java",
                "C#": "c#",
                "Python": "python",
                "SQL": "sql"
            }
            cy.get('[class="container"]').contains('.thumbnail', 'Dropdown Menu(s)').find(onDropdownCheckboxesRadiobuttonsPage.javaDropdownList).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }
    selectAllOptionsInSecondDropdownLists(){
        cy.get('[class="container"]').contains('.thumbnail', 'Dropdown Menu(s)').find(onDropdownCheckboxesRadiobuttonsPage.eclipseDropdownList).find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "Eclipse": "eclipse",
                "Maven": "maven",
                "TestNG": "testng",
                "JUnit": "junit"
            }
            cy.get('[class="container"]').contains('.thumbnail', 'Dropdown Menu(s)').find(onDropdownCheckboxesRadiobuttonsPage.eclipseDropdownList).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }
    selectAllOptionsInThirdDropdownLists(){
        cy.get('[class="container"]').contains('.thumbnail', 'Dropdown Menu(s)').find(onDropdownCheckboxesRadiobuttonsPage.htmlDropdownList).find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "HTML": "html",
                "CSS": "css",
                "JavaScript": "javascript",
                "JQuery": "jquery"
            }
            cy.get('[class="container"]').contains('.thumbnail', 'Dropdown Menu(s)').find(onDropdownCheckboxesRadiobuttonsPage.htmlDropdownList).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }

    selectAllOptionsInSelectedDisabledDropdownLists(){
        cy.get('[class="container"]').contains('.thumbnail', 'Selected & Disabled').find(onDropdownCheckboxesRadiobuttonsPage.fruitDropdownList).find('option').each((fruit, index) => {
            const fruitName = fruit.text()
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
                cy.get('[class="container"]').contains('.thumbnail', 'Selected & Disabled').find(onDropdownCheckboxesRadiobuttonsPage.fruitDropdownList).select(fruitName)
                cy.wrap(fruit).invoke('prop', 'selected').should('equal', true)
                cy.wrap(fruit).should('contain', fruitName)
                cy.wrap(fruit).invoke('prop', 'value').should('contain', fruitValue[fruitName])

            }
        })
    }

    defaultCheckOfCheckboxes(){
        cy.get('[class="container"]').contains('.thumbnail', 'Checkboxe(s)').find('[type="checkbox"]').each((checkBox, index) => {
            if(index === 2){
                cy.wrap(checkBox).should('be.checked')
            }else{
                cy.wrap(checkBox).should('not.be.checked')
            }
    })
    }
    checkAllCheckboxes(){
        cy.get('[class="container"]').contains('.thumbnail', 'Checkboxe(s)').find('[type="checkbox"]').each((checkBox, index) => {
            if (index !== 2) cy.wrap(checkBox).click({ force: true })
            cy.wrap(checkBox).should('be.checked')
        })
    }
    uncheckAllCheckboxes(){
        cy.get('[class="container"]').contains('.thumbnail', 'Checkboxe(s)').find('[type="checkbox"]').each((checkBox) => {
            cy.wrap(checkBox).click({ force: true })
            cy.wrap(checkBox).should('not.be.checked')
        })
    }
    uncheckTwoCheckboxes(checkboxesArray){
        cy.get('[class="container"]').contains('.thumbnail', 'Checkboxe(s)').find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkboxesArray).each(eqCheckbox => cy.wrap(checkBoxes).eq(eqCheckbox).click({ force: true }).should('not.be.checked'))
        })
    }
    checkedPropertyCheckForAllRadioButtons(propValue){
        cy.get('[class="container"]').contains('.thumbnail', 'Radio Button(s)').find('.section-title').find('[type="radio"]').each(item => {
            if(propValue === true) cy.wrap(item).click()
            cy.wrap(item).invoke('prop', 'checked').should('equal', propValue)
        })
    }
    defaultCheckVegetableRadioButtons(){
        cy.get('[class="container"]').contains('.thumbnail', 'Selected & Disabled').find('.section-title').find('[type="radio"]').each((item, index) => {
            if (index < 2) {
                cy.wrap(item).invoke('prop', 'checked').should('equal', false)
            } else {
                cy.wrap(item).invoke('prop', 'checked').should('equal', true)
            }
        })
    }
    clickOnAllVegetableRadioButtons(){
        cy.get('[class="container"]').contains('.thumbnail', 'Selected & Disabled').find('.section-title').find('[type="radio"]').each((item, index) => {
            if (index == 0 || index == 2) {
                cy.wrap(item).click()
                cy.wrap(item).invoke('prop', 'checked').should('equal', true)
            } else {
                cy.wrap(item).invoke('prop', 'disabled').should('equal', true)
            }
        })
    }

}

export const onDropdownCheckboxesRadiobuttonsPage = new dropdownCheckboxesRadiobuttonsPage