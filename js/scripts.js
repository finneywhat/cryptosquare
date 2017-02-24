// Back-end

var encrypt = function(input) {
  var rows = 0;
  var columns = 0;
  var roundedSq = 0;
  var inputArray = input.toLowerCase().match(/[a-z]/g);
  var inputLength = inputArray.length;
  var sq = Math.sqrt(inputLength);
  if (Number.isInteger(sq)) {
    rows = sq;
    columns = sq;
  } else {

    var roundedSq = Math.round(sq);
    if (roundedSq < sq) {
      columns = roundedSq + 1;
    } else {
      columns = roundedSq;
    }
    rows = roundedSq;
  }


  var smushString = "";
  for (var j = 0; j < columns; j++) {
    for (var i = 0; i < (inputLength - j); i += columns) {
      smushString = smushString.concat(inputArray[i + j]);
    }
  }
debugger;
  var result = "";
  var resultArray = smushString.split("");
  console.log(resultArray);
  for (var j = 0; j < inputLength; j += 5) {
    for (var i = 0; i < 5; i++) {
      if (resultArray[i + j]) {
        result = result.concat(resultArray[i + j]);
      }
    }
    result = result.concat(" ");
  }
  console.log(resultArray);





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
