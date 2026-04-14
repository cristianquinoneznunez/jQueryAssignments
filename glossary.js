$(document).ready(function() {
  $('#container h1, #container h2').hover(function(){ 
    $(this).css("color", "pink")
  },
    function() {
      $(this).css("color", "darkgreen")
    
  });

  $('.botanic').hide();

  $('.flower').click(function() {
    $(this).children('.botanic').mousedown().show();
  });

  $('.imgdiv').hide();

  $(".pic").hover(function(evt) {
    var imgID = "#" + $(this).attr("title");
    var x = evt.pageX + 150;
    var y = evt.pageY;
    $(imgID).css({
        "left": x + "px",
        "top": y + "px"
    }).show();
    }, 
    function(evt) {
    var imgID = "#" + $(this).attr("title");
    $(imgID).hide();
    });

    $(document).keypress(function(evt) {
      var keyPressed = evt.key.toLowerCase();
      window.location = "#" + keyPressed;
    });

});