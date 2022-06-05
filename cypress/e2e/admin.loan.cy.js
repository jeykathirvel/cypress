/// <reference types='Cypress' />
import AdminLandingPage from '../pageObjects/AdminLandingPage'
import AdminLoanPage from '../pageObjects/AdminLoanPage'

describe('admin.loan.cy.js', () => {

  const landingPage = new AdminLandingPage()
  const loanDetails = new AdminLoanPage()

  it('should visit admin panel', () => {


    landingPage.launchAdmin()
    landingPage.getLoan()
  })

  it('should visit loan details', () => {
    loanDetails.filterByMobile()

  })

})