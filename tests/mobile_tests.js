const globals = require('./settings/globals.js');
  
module.exports = {
  'Navigates to the EKA site, and displays logo': (browser) => {
    return browser
      .url(globals.url)
      .resizeWindow(750, 1300)
      .waitForElementVisible('.nav-logo')
      .end();
  }
}
