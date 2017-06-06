var total = 0;

$(document).on("submit", "form#grocery-list", function(){
  event.preventDefault();
  var newElement = $("#new-item").val();
  $("#printed-list").append("<li class='item'>"+ newElement + "<button type='submit' class='btn btn-danger btn-lg active remove-btn' >Remove</button></li>");
  $("#printed-list").show();
});

$(document).on("click", ".remove-btn",function() {
  event.preventDefault();
  $(this).parent().empty();
});
