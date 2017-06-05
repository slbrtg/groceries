$(function(){
  var masterArray = [];
  $("button#submit").click(function(event) {
    event.preventDefault();

    // for (x = 0; x < 1; x++){
    //
    // }


    var newelement = $("#new-item").val();
    masterArray.push(newelement);
    masterArray.sort();
    // var newArray = masterArray.map(function(task) {
    //   task.toUpperCase();
    // });

    $("#printed-list").append("<li>" + newelement + "</li>");
    $("#printed-list").show();
    console.log(masterArray);

  });

  $("button#remove").click(function(event) {
    event.preventDefault();
    masterArray.pop();
    $("ul li:first-child").empty();
    console.log(masterArray);
    $("#printed-list").show();
  });
})
