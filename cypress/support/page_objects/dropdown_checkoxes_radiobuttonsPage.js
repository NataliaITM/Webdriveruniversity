export class dropdownCheckboxesRadiobuttonsPage{


    selectAllOptionsInDropdownMenuDropdownLists(dropdownListid){
        /*as dropdownListid put: 
        '#dropdowm-menu-1' - for first dropdown list in Dropdown Menu(s)
        '#dropdowm-menu-2' - for second dropdown list in Dropdown Menu(s)
        '#dropdowm-menu-3' - for third dropdown list in Dropdown Menu(s)*/
        cy.contains('.thumbnail', 'Dropdown Menu(s)').find(dropdownListid).find('option').each(dropdownItem => {
            const itemName = dropdownItem.text()
            const itemValue = {
                "JAVA": "java",
                "C#": "c#",
                "Python": "python",
                "SQL": "sql",
                "Eclipse": "eclipse",
                "Maven": "maven",
                "TestNG": "testng",
                "JUnit": "junit",
                "HTML": "html",
                "CSS": "css",
                "JavaScript": "javascript",
                "JQuery": "jquery"
            }
    
            cy.contains('.thumbnail', 'Dropdown Menu(s)').find(dropdownListid).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }

    selectAllOptionsInSelectedDisabledDropdownLists(){
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
    }

    checkAllCheckboxes(){
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').each((checkBox, index) => {
            if (index !== 2) cy.wrap(checkBox).click({ force: true })
            cy.wrap(checkBox).should('be.checked')
        })
    }
    uncheckAllCheckboxes(){
        cy.contains('.thumbnail', 'Checkboxe(s)').find('.section-title').find('[type="checkbox"]').each((checkBox, index) => {
            cy.wrap(checkBox).click({ force: true })
            cy.wrap(checkBox).should('not.be.checked')
        })
    }
    checkedPropertyCheckForAllRadioButtons(propValue){
        //
        cy.contains('.thumbnail', 'Radio Button(s)').find('.section-title').find('[type="radio"]').each(item => {
            if(propValue === true) cy.wrap(item).click()
            cy.wrap(item).invoke('prop', 'checked').should('equal', propValue)
        })
    }

}

export const onDropdownCheckboxesRadiobuttonsPage = new dropdownCheckboxesRadiobuttonsPage