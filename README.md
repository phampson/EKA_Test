#EKA QA CHALLENGE

##Introduction
The objective of this challenge from the company perspective, is to get a good grasp of the technical ability of a candidate. To do so, we would like you to build a complementing suite of tests using Nightwatch.js so that you can put us on full blast for our company website, which can be found at www.go-eka.com.

Your objective, as a candidate, will be to develop a test suite to cover features that you can find within our site.

##Directions
As mentioned in the introduction, we would like you to develop a test suite that complements the workflow that we've described below.

To start with, we've put together the config necessary for you to start writing your tests. To set up, follow these instructions:

1. Clone the repository [https://github.com/YOO629/eka-qa-challenge-1.git]
2. Install packages using `yarn install`
3. Run `node nightwatch.conf.js`
4. Verify things are running okay by running `npm test`
5. One test should run, and it should pass

If you get stuck on any of the instructions above, e-mail us and we will do our best to help you get through it if reasonable.

If you are not familiar with Nightwatch.js, you will have to go through their docs and figure out how to put together tests on your own. This may seem harsh, but we need to know that you can be a trailblazer when the need arises.

Once you develop your tests and write your code in this project, create a Github repository for your work and push your work to the remote repo. Then, e-mail us back in the thread in which you received this challenge with the url to your Github repo.

There are a few requirements that we will impose on the tests that you write -- the most important being that you compose them using **Nightwatch.js**. Also, your tests should cover the workflow described below.

##Workflow

The basic workflow is as such:

1. User goes to www.go-eka.com
2. The EKA logo should be visible
3. The NavBar elements should be visible (Solutions/Services/Company/Contact Us/etc.)
4. Clicking on the 'Contact Us' button in the NavBar should bring up a modal with the text 'How can we help?'
5. When a user enters their email in the #join-mailinglist_input input element and clicks on the #join-mailinglist_btn, it should bring up a modal with the text 'Request a demo'

This is the basic workflow that we would like you to cover at a minimum. We would also like you to write additional tests (if you have time) so we can get a glimpse into how you approach testing as a whole. If you have time, I would **highly** suggest investing effort into this part of the challenge because this part of the challenge reflects most brightly.


##Questions?
Treat this as if you just got a steaming pile of code from your favorite developer, and you're writing tests to cover his back. Obviously, if you have questions about some features of the application, you should speak up and ask for clarification.

Questions should be sent out via the e-mail thread that you received this challenge. Don't forget to reply to all.
