class AddRemoveElements{

    //Elements
    GetAddButton(){ return cy.get('button')}
    GetNewButton(){ return cy.get('.added-manually')}
    GetUpdatedAddButton(){ return cy.get('[onclick="addElement()"]')}
}

export default AddRemoveElements;