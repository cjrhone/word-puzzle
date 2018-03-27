var sentence;
var letters=[];
var sortedLetters=[];
var vowels =["a", "e", "i","o","u","y" ];
var newSentence="";

var found=0;

$(document).ready(function() {
  $("button#add").click(function(){
    sentence=$("#item1").val();
    letters=sentence.split("");


    $(".result").fadeIn();

    letters.forEach (function(letter){
      found=0;
      vowels.forEach (function(vowel){
        if (letter.toString()===vowel.toString()){
          newSentence+="-";
          found++;
        }
        else{}
      });

      if (found===0)
      {
        newSentence+=letter;
      } else{}
    });

  $("#display").append(newSentence);

  });
});
