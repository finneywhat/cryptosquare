// Back-end

var encrypt = function(input) {

  var inputArray = input.toLowerCase().match(/[a-z]/g);
  var inputLength = inputArray.length;
  if (Number.isInteger(Math.sqrt(inputLength))) {
    console.log("Square!");
  } else {
    console.log("NOT A SQuare");
  }

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
