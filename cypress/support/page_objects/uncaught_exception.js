export class UncaughtExceptions{
    SkipUnexpectedTokenErrorMessage(){
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Unexpected token')) {
                console.log('Application Error Javascript Token')
                return false
            }
            return true
        })
    }
}

export const uncaughtExceptions = new UncaughtExceptions()