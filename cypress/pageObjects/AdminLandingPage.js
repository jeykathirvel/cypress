/// <reference types='Cypress' />

class AdminLandingPage {

  launchAdmin() {
    cy.visit("https://admin.stage.mahila.money")
  }

  getLoan() {
    cy.get('.MuiButtonBase-root:nth-child(3) path').click({
      multiple: true
    });
  }

}

export default AdminLandingPage