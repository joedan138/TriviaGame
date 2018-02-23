var trivia = {
  1: {
    "question": "How many Earths could fit inside the Sun?",
    "correct_answer": "1,000,000",
    "incorrect_answers": [
      "10",
      "100",
      "1,000"
    ]
  },
  2: {
    "question": "Which planet does not have a solid surface?",
    "correct_answer": "Neptune",
    "incorrect_answers": [
      "Mercury",
      "Venus",
      "Pluto"
    ]
  },
  3: {
    "question": "The highest mountain known to man is found where?",
    "correct_answer": "Vesta (asteroid)",
    "incorrect_answers": [
      "Earth",
      "Mars",
      "Haley's Comet"
    ]
  },
  4: {
    "question": "The sunset on Mars appears as what color?",
    "correct_answer": "blue",
    "incorrect_answers": [
      "red",
      "yellow",
      "green"
    ]
  },
  5: {
    "question": "The first Moon landing occurred in what year?",
    "correct_answer": "1969",
    "incorrect_answers": [
      "1957",
      "1974",
      "1973"
    ]
  },
  6: {
    "question": "What is the second largest planet in our solar system?",
    "correct_answer": "Neptune",
    "incorrect_answers": [
      "Saturn",
      "Uranus",
      "Mars"
    ]
  }
}





$("#startButton").click(function () {
  $(".playArea").html("");

});


// timer function
var timeLeft = 30;
var elem = document.getElementById('seconds');
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    // $("#triviaAndTime").html("");
    
    
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}


// creating trivia page question
$(".question").text(trivia[1].question)

// creating trivia page answers
function answerGenerator() {

  // incorrect answers
  for (let i = 0; i < trivia[1].incorrect_answers.length; i++) {
    var li = $("<li>");
    li.addClass("options");
    li.attr("data-name", "incorrect")
    li.text(trivia[1].incorrect_answers[i]);
    $(".listArea").append(li);
  }

  // correct answer
  var liCorrect = $("<li>");
  liCorrect.addClass("options");
  liCorrect.attr("data-name", "correct")
  liCorrect.text(trivia[1].correct_answer);
  $(".listArea").append(liCorrect);

}

answerGenerator();


