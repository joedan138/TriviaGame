$("#startButton").click(function() {
    $(".playArea").html("");
    
});



var timeLeft = 30;
var elem = document.getElementById('seconds');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    // insert function for expired time here
    alert("times up");
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}