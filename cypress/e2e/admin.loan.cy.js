/// <reference types='Cypress' />
import { date } from 'assert-plus'
import AdminLandingPage from '../pageObjects/AdminLandingPage'
import AdminLoanPage from '../pageObjects/AdminLoanPage'

const data = require('../fixtures/data.json');

describe('admin.loan.cy.js', () => {

  const landingPage = new AdminLandingPage()
  const loanDetails = new AdminLoanPage()
 

  it('should visit admin panel', () => {


    landingPage.launchAdmin()
    landingPage.getLoan()
  })

  it('should visit loan details', () => {
    
    loanDetails.filterByMobile(data.mobile);
    

  })

})