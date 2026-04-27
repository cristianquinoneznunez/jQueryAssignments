$(document).ready(function () {


    //rollover
$("#thumbs img").hover(
  function () {
    $(this).css({
      "border": "2px solid darkgreen",
      "box-shadow": "0 0 8px rgba(0, 100, 0, 0.6)"
    });
  },
  function () {
    $(this).css({
      "border": "none",
      "box-shadow": "none"
    });
  }
);


  //replace large image and title
  $("#thumbs img").click(function () {
   var newPic = $(this).attr("src");
   var newTitle = $(this).attr("alt");

    $("#lgPic").attr("src", newPic);
    
    $("#lgTitle").text(newTitle);

    $("#thumbs img").removeClass("selected");

    $(this).addClass("selected");
  });

  //open large image in new window
  $("#lgPic").click(function () {
  var imgURL = $(this).attr("src");
  window.open(imgURL, "_blank");
});

});
