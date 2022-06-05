/// <reference types='Cypress' />

class AdminLoanPage {

  filterByMobile() {
    cy.get('#filter_mobile').click();
    cy.get('#filter_mobile').type('9600485022');
    cy.get('.jss10').click();
    cy.wait(5000);

  }



}

export default AdminLoanPage