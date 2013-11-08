####Unit Testing Mixpanel Events####

This simple example demonstrates how to unit test mixpanel events.

We use QUnit, Sinon.JS (for spies) and Karma as the test runner.

JQuery allows us to query for certain events.

The test shows how to test that mixpanel.track is called after the 
window.load event is fired from the browser.

To run:

* Install Karma Test Runner

Then type:

	karma start

Unit Tests should automatically run.
