$(function(){
  var masterArray = [];
  $("button#submit").click(function(event) {
    event.preventDefault();
    var newelement = $("#new-item").val();
    masterArray.push($("#new-item").val());
    $("#printed-list").append("<li>" + newelement + "</li>")
    $("#printed-list").show();
    console.log(masterArray);
  });
})
