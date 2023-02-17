export class AjaxLoaderPage{
    clickMeButton = '#button1[type="button"]'
    messegeTitle = '[class="modal-title"]'

    waitForPageToLoad(){
        cy.get('[class="container"]').find('[style="display: none;"]', { timeout: 7000 })
    }
    clickOnButtonClickMe(){
        cy.get(onAjaxLoaderPage.clickMeButton).click()
        cy.get('[class="modal-content"]').find(onAjaxLoaderPage.messegeTitle).should('contain', 'Well Done For Waiting....!!!')
    }
}
export const onAjaxLoaderPage = new AjaxLoaderPage()