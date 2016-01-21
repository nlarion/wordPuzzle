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
   var vowel =["a", 'e', 'i', 'o', 'u']
   var newString = string
   for (var i=0; i<string.length; i++) {
    for (var j=0; j<vowel.length; j++) {
     if (string.charAt(i) === vowel[j]){
      newString = string.replace(vowel[j], "-");
   }
}
}
return newString;
}
