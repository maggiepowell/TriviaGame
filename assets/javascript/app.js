//on page load have start button visible
var timer
//on start button click load first question and answer array, begin timer
$("#start").click( function(){
  var counter = 20;
  var seconds = Math.floor((counter % (1000 * 60)) / 1000);

  //load timer
  timer = setInterval(function() {
    counter--;
     if (counter >= 0) {
        span = document.getElementById("timer");
        span.innerHTML = counter + " seconds left!";
     }
     if (counter === 0) {
        alert('Sorry, out of time!');
        clearInterval(counter);
      }
    }, 1000);
  //hide start button once clicked
  $('#start').addClass('hide');

  //call question and answer array to appear
  loadQuestion(); 
  });

//call question and answer array to appear
var currentQ = 0
var loadQuestion = function () {
  $('#question').html(icecreamQuestion[currentQ].question) 
  for(var i=0; i < icecreamQuestion[0].choices.length ; i++) {
    $('#answer' + i).html(icecreamQuestion[currentQ].choices[i])
  console.log("test");
  //un-hide answer array
  $('#answerButtons').removeClass('hide');

  }
};

//listen for answer selection and alert appropriate response
$("button[id^='answer']").click(function() {
  var clickedButton = $(this).val();
  console.log(clickedButton);
  console.log(icecreamQuestion[currentQ].correctAnswer);
  console.log("clicked button: " + clickedButton);
  if (clickedButton == icecreamQuestion[currentQ].correctAnswer) {
    //stop timer
    clearInterval(timer);
    //hide timer
    $('#timer').addClass('hide');
    //hide answer array
    $('#answerButtons').addClass('hide');
    //change screen to say "You are correct!"
    $('#question').html(
      "You are correct!");
    
    //load next question after 3 seconds
    setTimeout( function() {
      if (currentQ != icecreamQuestion.length) {
        currentQ++;
      };
      loadQuestion();
    }
    , 3000);
    console.log(currentQ);
  }
  else {
    clearInterval(timer);
    $('#timer').addClass('hide');
    //change screen to say "Wrong!"
    $('#question').html(
      "Wrong!");
    loadQuestion();
  }
});

var icecreamQuestion = [{
    question:"What year was the ice cream cone invented?",
    choices:["1904", "1905", "1914", "1915"],
    correctAnswer: 0
  },
  {
    question:"What country consumed more ice cream per person last year?",
    choices:["USA", "China", "Germany", "New Zealand"],
    correctAnswer: 3
  },
  {
    question:"How many gallons of milk does it take to make one gallon of ice cream?",
    choices:["Two", "Three", "Four", "Ten"],
    correctAnswer: 1
  },
  {
    question:"Which flavor came first?",
    choices:["Chocolate", "Vanilla", "Pistachio", "Strawberry"],
    correctAnswer: 0
    },
  {
    question:"What is a professional ice cream tasting spoon typically made of?",
    choices:["Gold", "Platinum", "Mother of Pearl", "Wood"],
    correctAnswer: 0
    },
  {
    question:"What do food stylists typically use to represent ice cream in advertising campaigns?",
    choices:["Cream Cheese", "Yogurt", "Mashed Potatoes", "Play-Doh"],
    correctAnswer: 2
}]

//once final question has been answered alert with score for three seconds before returning to start button
