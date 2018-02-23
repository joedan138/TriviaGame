// hide Score total. this will appear when time runs out
$("#finalScore").hide();

// timer function
var timeLeft = 30;
var elem = document.getElementById('seconds');
var timerId = setInterval(countdown, 1000);
let totalCorrect = 0;


function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    // adds up the correct answers
    $("input:checked").each(function(idx, e) { if ($(e).val() === "correct") totalCorrect++; })
    // hides the questions and shows the final score
    $("#triviaAndTime").hide();
    $("#finalScore").show();
    // appends the final score of correct an incorrect answers
    $("#finalCorrect").text(totalCorrect)
    $("#finalIncorrect").text(6-totalCorrect)
    return
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}

// try again button
$(".tryAgain").on("click", function(){
    location.reload();


// can't figure out why the code below loops over and goes crazy.

    // $('input[type=radio]').attr('checked',false);
    // timeLeft = 30;
    // var timerId = setInterval(countdown, 1000);
    // countdown();
    // $("#triviaAndTime").show();
    // $("#finalScore").hide();

});





// this was code I used to figure out my jquery selector

// var incCor = 0;
// var correctTotal = 0;
// var incorrectTotal = 0;

// $( "input" ).on( "click", function() {
//     incCor = $(this).val()
    
//     if (incCor === "correct") {
//         correctTotal ++;
//         console.log('correct = ' + correctTotal)
//     }
//     else if (incCor === "incorrect") {
//         incorrectTotal ++;
//         console.log('incorrect = ' + incorrectTotal)
//     }
// });








