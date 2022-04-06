import BasePage from "../Pages/BasePage"
import AddRemoveElements from "../Pages/AddRemoveElements"

describe('Add/Remove Element Test Suite', () => {
    const base = new BasePage()
    const page = new AddRemoveElements()

    beforeEach(() => {
        //Navigate to the page
        base.navToPage()
    })

    beforeEach(() => {
        //Navigate to the test page
        base.navToMenu(2) //Pass the index
    })

    it('1-Verify add element button is available', () => {
        page.GetAddButton().should('exist')
    })

    it('2-Verify the button is labled as Add Element', () => {
        page.GetAddButton().should('contains.text', 'Add Element')
    })
    
    it('3-Verify button click generates new buttons', () => {
        page.GetAddButton().click({force:true})
            .then(($btn) => {
                cy.wrap($btn).should('exist')
            })
    })

    it('4-Verify class of Add Elements button changes on click', () => {
        page.GetAddButton().click()
            .then(($elements) => {
                cy.wrap($elements).should('not.have.class', 'button')
            })
    })


    context('with generated button', () => {
    
        beforeEach(() => {
            //Click on Add Element button
            page.GetAddButton().click()
        })

        it('5-Verify the newly generated button is labled as Delete', () => {
            page.GetAddButton().should('contains.text', 'Delete')
        })

        it('6-Verify multiple elements can be added', () => {
            page.GetNewButton()
                .then(($btn) => {
                    const cls = $btn.attr('class')
                    console.log(cls)

                    page.GetUpdatedAddButton().click()
                        .then(($elements) => {
                            cy.wrap($elements).should('not.have.class', cls)
                        })
                })
        })
        
        it('7-Verify click on newly generated button removes itself', () => {
            page.GetNewButton()
                .click()
                .should('not.exist')
        })
    })
})