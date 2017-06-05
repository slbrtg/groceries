$(function(){
  var masterArray = [];

  $("button#add").click(function(event) {
    var newelement = $("#new-item").val();
    masterArray.push(newelement);
    masterArray.sort();
  });

  $("button#submit").click(function(event) {
    event.preventDefault();
    $("#printed-list").empty()
    var upperArray = [];
    masterArray.forEach(function(task){
      upperArray.push(task.toUpperCase());
      $("#printed-list").append("<li class='testcolor'>" + task.toUpperCase() + "</li>");
      $("#printed-list").show();
    });
  });
});
