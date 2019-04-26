const globals = require('./settings/globals.js');

module.exports = {
  'Navigates To The EKA Site': (browser) => {
    return browser
      .url(globals.url)
      .waitForElementVisible('.nav-logo')
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.contactus-btn-link')
      .waitForElementVisible('.login-link')
      .end();
  }
}
