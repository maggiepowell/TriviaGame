//on page load have start button visible
var timer
var score = 0
//on start button click load first question and answer array, begin timer
$("#start").click( function(){
  //hide start button once clicked
  $('#start').addClass('hide');

  //call question and answer array to appear
  loadQuestion(); 
  });

//call question and answer array to appear
var currentQ = 0
var loadQuestion = function () {
  var counter = 12;
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
  $('#question').html(icecreamQuestion[currentQ].question) 
    for(var i=0; i < icecreamQuestion[0].choices.length ; i++) {
    $('#answer' + i).html(icecreamQuestion[currentQ].choices[i])
  console.log("test");

  //un-hide answer array
  $('#answerButtons').removeClass('hide');

  //un-hide timer
  $('#timer').removeClass('hide');
  }
};

//listen for answer selection and alert appropriate response
$("button[id^='answer']").click(function() {
  var clickedButton = $(this).val();
  console.log("correct answer: " + icecreamQuestion[currentQ].correctAnswer);
  console.log("clicked button: " + clickedButton);

  //correct answer clicked:
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
    //update score
    score++;
    //load next question after two seconds
    setTimeout( function() {
      if (currentQ != icecreamQuestion.length-1) {
        currentQ++;
        loadQuestion();  
        console.log("test else");
      }
      else if (currentQ == icecreamQuestion.length-1) {
        $('#score').html("Game Over! You answered " + score + " questions correctly!");
        clearInterval(timer);
        //un-hide start button
        $('#start').removeClass('hide');

        console.log("test else");
      }
    }
    
    , 2000);
    console.log("current question: " + currentQ);
  }
  //wrong answer clicked:
  else {
    console.log("test else");
    //stop timer
    clearInterval(timer);
    //hide timer
    $('#timer').addClass('hide');
    //hide answer array
    $('#answerButtons').addClass('hide');
    //change screen to say "Wrong!"
    $('#question').html(
      "Wrong!");
    //load next question after two seconds
    console.log("questions: " + icecreamQuestion.length);
    setTimeout( function() {
      if (currentQ != icecreamQuestion.length-1) {
        currentQ++;
        loadQuestion();  
        console.log("test else");
      }
      else if (currentQ == icecreamQuestion.length-1) {
        $('#score').html("Game Over! You answered " + score + " questions correctly!");
        clearInterval(timer);
        //un-hide start button
        $('#start').removeClass('hide');

        console.log("test else");
      }
      
    }
    
    , 2000);
    console.log(currentQ);
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

