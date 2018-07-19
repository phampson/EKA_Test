const globals = require('./settings/globals.js');

module.exports = {
  'Navigates To The EKA Site': (browser) => {
    return browser
      .url(globals.url)
      .waitForElementVisible('.nav-logo', 10000)
      .end();
  }
}
