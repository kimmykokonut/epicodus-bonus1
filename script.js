$(document).ready(function () {   //jQuery function always starts with $
  $("#comment-button").click(function () { //jQuery function click for interactivity
    //this .append adds the input to the current list when clicked
    $("#comment-box").append("<li class='comment'>" + $("#new-comment").val() + "</li>");
    $("#new-comment").val("");     //this clears the form fill
  });
});