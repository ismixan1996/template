$("#box-classs").click(function (e) {
    e.preventDefault();
    $(".box-classs-id").show();
    $(".row-classs-id").hide()
  })

  $("#row-classs").click(function (e) {
    e.preventDefault();
    $(".row-classs-id").show();
    $(".box-classs-id").hide()
  })