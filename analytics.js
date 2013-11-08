// Register trackAnalytics when page is loaded.
$(window).load(function() {
    trackAnalytics();
});

function trackAnalytics() {
    console.log("trackAnalytics()");
    mixpanel.track("Page Loaded");
}
