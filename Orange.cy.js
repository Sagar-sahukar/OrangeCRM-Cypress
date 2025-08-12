import LoginPage from '../pages/Login';

describe('Login Test using POM', () => {
  const loginPage = new LoginPage();

  it('Should login successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

    cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click(); //Navigating to PIM

    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); 
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("sagar");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("sahukar");
    cy.get('.oxd-button--secondary').click(); //Adding 1st employee

    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); 
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("sagar 2");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("sahukar 2");
    cy.get('.oxd-button--secondary').click(); //Adding 2nd employee

    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); 
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("sagar 3");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("sahukar 3");
    cy.get('.oxd-button--secondary').click(); //Adding 3rd employee

    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); 
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("sagar 4");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("sahukar 4");
    cy.get('.oxd-button--secondary').click(); //Adding 4th employee
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click();

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("sagar");
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.contains("sagar").should('be.visible');
    cy.log(`sagar- Name Verified`); //Verifying Names

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); 
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); //Logging out from dashboard
  });
})


