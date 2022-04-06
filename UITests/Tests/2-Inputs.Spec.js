import BasePage from "../Pages/BasePage"
import Inputs from "../Pages/Inputs"

describe('Add/Remove Element Test Suite', () => {
    const base = new BasePage()
    const page = new Inputs()

    beforeEach(() => {
        //Navigate to the page
        base.navToPage()
    })

    beforeEach(() => {
        //Navigate to the test page
        base.navToMenu(27) //Pass the index
    })

    it('1-Verify UI elements available to input a value', () => {
        page.GetInputBox().should('exist')
    })

    it('2-Verify Numbers can be entered', () => {
        cy.readFile('UITests/Data/data.json').then((data) => {
            //Get data set
            page.GetInputBox().clear().type(data.number)
        })
    })

    it('3-Verify alpha neumeric characters cannot be entered', () => {
        cy.readFile('UITests/Data/data.json').then((data) => {
            //Get data set
            page.GetInputBox().clear().type(data.text)
        })
    })

    it('4-Verify numbers can be input on up arrow key click', () => {
        page.GetInputBox()
            .then(($input) => {
                const txt = cy.wrap($input).invoke('val')

                page.GetInputBox().type('{upArrow}').type('{upArrow}') //upword twice
                    .then($val => {
                        // cy.wrap($val).invoke('val').should('have.text', '2')
                        console.log(txt)
                    })

                page.GetInputBox().type('{downArrow}').type('{downArrow}').type('{downArrow}') //downwords thrise
                    .then($val => {
                        // cy.wrap($input).invoke('val').should('have.text', -1)
                        console.log(txt)
                    })
            })
    })

})