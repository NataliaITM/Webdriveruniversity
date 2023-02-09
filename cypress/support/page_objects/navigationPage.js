export class NavigationPage{

    contactUsPage(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click();
    }
    datepickerPage(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr','target').click();
    }
    dropdown_checkoxes_radiobuttonsPage(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    }
    ajax_loaderPage(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#ajax-loader').invoke('removeAttr','target').click();
    }
    autocomplete_textfieldPage(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click();
    }
}

export const navigateTo = new NavigationPage()