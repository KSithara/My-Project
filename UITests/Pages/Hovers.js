class Hovers{

    //Elements
    GetMainContainer(){ return cy.get('#content')}
    GetImage(index){ return cy.get(':nth-child('+index+') > img')}
}

export default Hovers;