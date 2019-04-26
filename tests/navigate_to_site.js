const globals = require('./settings/globals.js');

module.exports = {
  'Navigates to the EKA site, and displays logo': (browser) => {
    return browser
      .url(globals.url)
      .waitForElementVisible('.nav-logo')

  },

  'NavBar links are visable': (browser) => {
    return browser
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.contactus-btn-link')
      .waitForElementVisible('.login-link')
  },
  
  'Contact Us displays proper modal when clicked': (browser) => { 
    return browser
      .click('#nav-contact-us')
      .waitForElementVisible('.m-top-60')
      .assert.containsText('.m-top-60', 'HOW CAN WE HELP?')
      .end();
  }
}
