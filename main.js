$(document).ready(function(){

  var img1top = $("#img1").offset().top;
  var img4top = $("#img4").offset().top;
  var xOffset = 0;

  $("#hori-wrapper").scroll(function() {
    xOffset = $("#hori-container").offset().left;
    $("#img1").css('top',(img1top+xOffset) + "px");
    $("#img4").css('top',(img4top-xOffset) + "px");
    $('#x').html(xOffset);
  });

});