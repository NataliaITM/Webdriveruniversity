export class NavigationPage{

    contactUsPage(){
        cy.visit('/')
        cy.get('#contact-us').invoke('removeAttr','target').click();
    }
    datepickerPage(){
        cy.visit('/')
        cy.get('#datepicker').invoke('removeAttr','target').click();
    }
    dropdown_checkoxes_radiobuttonsPage(){
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
    }
    ajax_loaderPage(){
        cy.visit('/')
        cy.get('#ajax-loader').invoke('removeAttr','target').click();
    }
    autocomplete_textfieldPage(){
        cy.visit('/')
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click();
    }
}

export const navigateTo = new NavigationPage()