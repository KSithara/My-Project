class RedirectLink{

    //Elements
    GetMainParagraph(){ return cy.get('p')}
    GetCodeList(){ return cy.get('.example')}
    GetCode(index){ return cy.get('ul > :nth-child('+index+') > a')}
}

export default RedirectLink;