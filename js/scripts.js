$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputWord = $("input#word").val();
    console.log(inputWord);

    var reverseInputWord = inputWord.split("").reverse().join("");
    console.log(reverseInputWord);

    if (inputWord === reverseInputWord) {
      $(".not").text("");
    } else {
      $(".not").text("not");
    }

    $(".inputWord").text(inputWord);
    $("#result").show();

  });
});
