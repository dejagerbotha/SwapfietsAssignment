/// <reference types="cypress" />
describe('Swapfiets Test Spec', () => {

  /* 
  Before test are executed the "setup script" is run to:
  - connect to the URL, 
  - click allow cookies pop-up, and 
  - ensure the page loaded correctly.
  */
  before(() => {
      cy.visit('https://swapfiets.com/en-GB');
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
      cy.get('.HeaderSearch_heading__PE_Us').should('contain', 'Always a working Swapfiets for a fixed monthly fee.')
  });

  it('London - Subscribe to a Power 1 bicycle', () => {

      // Scenario B
      cy.get('#city-select-14').type('London');
      cy.get('.CitySelector_container__JR5L7 > .reset-button').click();

      //Assertions scenario B
      cy.url().should('contain', 'london')
      cy.get('.ListingHeader_heading__E9nxY').should('contain', 'Our bikes in \nLondon');
      cy.get('.ProductList_list__E25Va').should('exist')
      cy.contains('Power 1').should('exist')
      cy.contains('The Swapfiets service').should('exist')
      cy.contains('Frequently Asked Questions').should('exist')

      // Scenario C
      cy.wait(2000)
      cy.contains('Power 1').click();
      cy.wait(2000)
      cy.contains('Subscribe').click();
      cy.wait(2000)

      //Assertions scenario C
      cy.url().should('contain', 'london/power-1/configure')
      cy.contains('Create your Swapfiets Power 1').should('exist')
      cy.contains('Loyal membership').should('exist')
      cy.contains('Flexible membership').should('exist')
      cy.contains('Bike usage').should('exist')
      cy.contains('£45').should('exist')


      // Scenario D
      cy.get('.HeavyUser_group__LeUv4 > :nth-child(2)').click()
      cy.contains('Order bike').click();


      // Scenario E
      // Order form URL had to be put in a wrapper due a URL redirect.
      cy.origin('https://account.swapfiets.com', () => {
          cy.get('input[name="firstname"]').type('DJ')
          cy.get('input[name="lastnamePrefix"]').type('Mr')
          cy.get('input[name="lastname"]').type('Botha')
          cy.get('select[name="Day"]').select('15')
          cy.get('select[name="Month"]').select('February')
          cy.get('select[name="Year"]').select('1986')
          cy.contains('Male').click()
          cy.get('input[name="height"]').type('188')
          cy.get('input[name="street"]').type('Bubble Street')
          cy.get('input[name="houseNumber"]').type('126')
          cy.get('input[name="houseNumberSuffix"]').type('Ext 5')
          cy.get('input[name="postalCode"]').type('SE163UP')
          cy.get('input[name="city"]').type('Cape Town')
          cy.get('input[name="email"]').type('fakeEmail@email.com')
          cy.get('input[name="telephoneNumber1"]').type('7851727744')
          cy.get('input[name="deliveryRemarks"]').type('Remarkable  Delivery')
          cy.contains('I agree').click()

          //Assertions scenario E
          cy.url().should('contain', 'https://account.swapfiets.com/registration/enroll')
          cy.contains('Personal data').should('exist')
          cy.contains('Home address').should('exist')
          cy.contains('Contact').should('exist')
          cy.contains('Comments').should('exist')

          // Scenario F
          cy.contains('Back').click()
      })

      //Assertions scenario F
      cy.url().should('contain', 'london/power-1/configure')
      cy.contains('Create your Swapfiets Power 1').should('exist')
      cy.contains('Loyal membership').should('exist')
      cy.contains('Flexible membership').should('exist')
      cy.contains('Bike usage').should('exist')
      cy.contains('£45').should('exist')

      cy.log('-- End')
      cy.end()
  });
});