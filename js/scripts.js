$(function(){
  var masterArray = [];
  $("button#submit").click(function(event) {
    event.preventDefault();
    $("#printed-list").empty();
    var newelement = $("#new-item").val();
    masterArray.push(newelement);
    masterArray.sort();
    masterArray.forEach(function(task){
      $("#printed-list").append("<li class='testcolor'>" + task.toUpperCase() + "<button type='button' class='btn btn-danger btn-lg active' id='remove'>Remove</button>"+"</li>");
      $("#printed-list").show();
    });
  });
});
