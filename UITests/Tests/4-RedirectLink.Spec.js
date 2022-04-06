import BasePage from "../Pages/BasePage"
import RedirectLink from "../Pages/RedirectLink"

describe('Add/Remove Element Test Suite', () => {
    const base = new BasePage()
    const page = new RedirectLink()

    beforeEach(() => {
        //Navigate to the page
        base.navToPage()
    })

    beforeEach(() => {
        //Navigate to the test page
        base.navToMenu(36) //Pass the index
    })

    it('1-Verify the page contains a link to navigate to the page with list of links', () => {
        page.GetMainParagraph().find('a').should('have.length', 1)
    })

    
    context('after click on link', () => {
        
        beforeEach(() => {
            //Click on link
            page.GetMainParagraph().find('a').click()
        })

        it('2-Verify list of links are available in UI to test', () => {
            page.GetCodeList().find('ul').should('have.length', 1)
        })

        it('3-Verify list of codes available', () => {
            page.GetCodeList().find('ul')
            for(var i=1; i<5; i++){
                page.GetCode(i).should('exist')
            }
        })

        it('4-Verify click on link navigates to a new page', () => {
            cy.readFile('UITests/Data/data.json').then((data) => {
            
                for(var i=1; i<5; i++){
                    page.GetCode(i).then($val => {
                        var redirectLink = $val.attr('href')

                        cy.wrap($val).click()
                        cy.url().should('be.equal', data.baseUrl+redirectLink)
                        cy.go('back')
                    })
                }
            })
        })
    })
})