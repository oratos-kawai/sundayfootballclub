$(function() {

  $("#bar").click(function() {
    $(".bars").hide();
    $(".times").show();
    $("#modal").show();
  });

  $("#times").click(function() {
    $("#modal").hide();
    $(".fa-times").hide();
    $(".bars").show();
  })











});
