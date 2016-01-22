// $(document).ready(function(){
//   $("form").submit(function(event) {
//   var userNumber = parseInt($("input#number").val());
//   var userCounter = parseInt($("input#counter").val());
//   var result = countUp(userNumber, userCounter);
//   $("#outPut").text(result);
//   $(".result").show();
//   event.preventDefault();
//   });
// });

function wordPuzzle(string) {
  var vowel =["a", 'e', 'i', 'o', 'u'];
  //change the string to an array of single characters
  string = string.split("");
  var newString = "";
  for (var i=0; i<string.length; i++) {
    //loop through the string array
    for (var j=0; j<vowel.length; j++) {
      //loop through the vowel array
      if (string[i] === vowel[j]){
        //if we find a match we set the array's value to "-" at index i.
        string[i] = "-";
      }
    }
  }
  //return the string array, but collapse it into a string
  return string = string.join("");
}