export class AutocompleteTextFieldPage{
textField = '#myInput[type="text"]'
elementsOnAutocompleteList = 'strong'
submitButton = '#submit-button[type="submit"]'

typeTextandChcekAutocompleteList(inputText){
    cy.get(onAutocompleteTextFieldPage.textField).click().type(inputText)
    cy.get('#myInputautocomplete-list[class="autocomplete-items"]').find(onAutocompleteTextFieldPage.elementsOnAutocompleteList).should('contain', inputText)
}
chooseElementfromAutocompleteList(eqOfElement){
    cy.get('#myInputautocomplete-list[class="autocomplete-items"]').find(onAutocompleteTextFieldPage.elementsOnAutocompleteList).eq(eqOfElement).click()
}
submitFoodItem(){
    cy.get(onAutocompleteTextFieldPage.submitButton).click()
}

}
export const onAutocompleteTextFieldPage = new AutocompleteTextFieldPage()