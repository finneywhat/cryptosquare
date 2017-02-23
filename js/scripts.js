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
      rows = roundedSq + 1;
    } else {
      rows = roundedSq;
    }
    columns = roundedSq;
  }
  console.log(sq);
  console.log(roundedSq);
  console.log(rows);
  console.log(columns);

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
