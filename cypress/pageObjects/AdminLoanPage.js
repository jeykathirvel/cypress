/// <reference types='Cypress' />

class AdminLoanPage {


  filterByMobile(mobile) {
    cy.get('#filter_mobile').click();
    cy.get('#filter_mobile').type(mobile);
    cy.get('.jss10').click();
    cy.wait(5000);

  }



}

export default AdminLoanPage