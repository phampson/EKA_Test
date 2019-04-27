const globals = require('./settings/globals.js');
  
module.exports = {
  'Navigates to the EKA site, and displays logo': (browser) => {
    return browser
      .url(globals.url)
      .resizeWindow(750, 1300)
      .waitForElementVisible('.nav-logo')
  },

  'Collapsed NavBar links are visable for mobile': (browser) => {
    return browser
      .click('.navbar-toggle')
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.contactUs-link')
      .waitForElementVisible('.login-link')
      .end();
  }
}
