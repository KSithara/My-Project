import BasePage from "../Pages/BasePage"
import Hovers from "../Pages/Hovers"

describe('Add/Remove Element Test Suite', () => {
    const base = new BasePage()
    const page = new Hovers()

    beforeEach(() => {
        //Navigate to the page
        base.navToPage()
    })

    beforeEach(() => {
        //Navigate to the test page
        base.navToMenu(25) //Pass the index
    })

    it('1-Verify the number of UI components to test', () => {
        page.GetMainContainer().find('img').should('have.length', 3)
    })

    it('2-Verify details appear below each UI component on hover', () => {
        for(var i=1; i<4; i++){
            page.GetImage(i+2).trigger('mouseover')
            cy.contains('name: user'+i)
            cy.contains('View profile').click({force:true})
            cy.go('back')
        }
    })

})