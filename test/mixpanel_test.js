/*function foo() {
  console.log("FOO");
}

module("mixpanel-testing", {
    setup: function() {
         foo = sinon.spy(foo);
         //sinon.spy(jQuery, "ajax");
    },
    teardown: function() {
         //foo.restore();
         //trackAnalytics.restore();
         //jQuery.ajax.restore();
    }
});


test("testStub works", function() {

  foo();
  ok(foo.calledOnce);

});*/

test("trackAnalytics is called on page load", function() {
   // Create a spy of trackAnalytics to question if it was called.
   trackAnalytics = sinon.spy(trackAnalytics);

   var event = jQuery.Event("load");

   // trigger the window.load event
   var $doc = $(window);
   $doc.trigger(event);

   ok(trackAnalytics.calledOnce);
});

//TODO: FIXME
/*test("Mixpanel started on file include", function() {
   startMixpanel = sinon.spy(startMixpanel);

   ok(startMixpanel.calledOnce);
});*/
   

test("Mixpanel.track is called with Page Loaded after page load", function() {
   // Create a spy of mixpanel.track
   sinon.spy(mixpanel, "track");

   var event = jQuery.Event("load");

   var $doc = $(window);
   $doc.trigger(event);

   ok(mixpanel.track.calledOnce);
   ok(mixpanel.track.calledWith("Page Loaded"));

   mixpanel.track.restore();
});
