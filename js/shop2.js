$(document).ready(function () {

    $("#box-class").click(function (e) {
      e.preventDefault();
      $(".box-class-id").show();
      $(".row-class-id").hide()
    })
  
    $("#row-class").click(function (e) {
      e.preventDefault();
      $(".row-class-id").show();
      $(".box-class-id").hide()
    })
});