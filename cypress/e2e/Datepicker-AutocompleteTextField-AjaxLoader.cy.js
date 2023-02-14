import { onAjaxLoaderPage } from "../support/page_objects/ajaxLoader"
import { onAutocompleteTextFieldPage } from "../support/page_objects/autocompleteTextFieldPage"
import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { uncaughtExceptions } from "../support/page_objects/uncaught_exception"

describe('Datapicker', () => {
    beforeEach('open Datapicker page', () => {
        navigateTo.datepickerPage()
      })
    it('Current date', () => {
        onDatepickerPage.chceckIfDefaultDateIsTodayDate()
    })

    it('Provided date', () => {
        onDatepickerPage.selectDateNumberDaysFromToday(5)
})
})

describe('Autocomplete TextField', () => {
    beforeEach('open Autocomplete TextField page', () => {
        navigateTo.autocomplete_textfieldPage()
      })
    it('Choose element from autocomplete list', () => {
    onAutocompleteTextFieldPage.typeTextandChcekAutocompleteList('Gra')
    onAutocompleteTextFieldPage.chooseElementfromAutocompleteList(1)
    onAutocompleteTextFieldPage.submitFoodItem()
    })
})

describe('Ajax-Loader', () => {
    it('Click me', () => {
        uncaughtExceptions.SkipUnexpectedTokenErrorMessage()
        navigateTo.ajax_loaderPage()
        onAjaxLoaderPage.waitForPageToLoad()
        onAjaxLoaderPage.clickOnButtonClickMe()
    })
})