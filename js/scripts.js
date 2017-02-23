// Back-end

var encrypt = function(input) {

  var inputArray = input.toLowerCase().match(/[a-z]/g);
  console.log(inputArray);

  return result;
}

$(function() {
  $("form#form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    var result = encrypt(userInput);
    $("#result").text(result);
  });
});
