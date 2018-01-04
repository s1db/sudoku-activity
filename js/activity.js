define(["sugar-web/activity/activity"], function(activity) {

  // Manipulate the DOM only when it is ready.
  require(['domReady!'], function(doc) {

    // Initialize the activity.
    activity.setup();
    var GoL = document.getElementById("Gol");
    GoL.onclick = function() {
      console.log("you clicked me!");
    }
  });

});
