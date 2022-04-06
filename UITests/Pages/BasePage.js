class BasePage
{
    navToPage(){
        cy.readFile('UITests/Data/data.json').then((data) => {
            //Get data set
            this.data = data
            cy.visit(this.data.url)
        })
    }

    navToMenu(index){
        return cy.get('ul > :nth-child('+index+') > a').click()
    }
}

export default BasePage;