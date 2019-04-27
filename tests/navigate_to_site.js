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
      .click('.close.btn-icon')
  },

  'Mailing list displays proper modal': (browser) => {
    return browser
      .waitForElementVisible('input[name=email2]')
      .clearValue('input[name=email2]')
      // SetValue does not always work, but when it does everything works great!
      .setValue('input[name=email2]', 'test@mail.com')
      .submitForm('#join-mailinglist_btn')
      .assert.containsText('#myModalLabel', 'REQUEST A DEMO')
      .assert.valueContains('input[name="email"]', 'test@mail.com')
      .end();
  }
}
