//on page load have start button visible

//once start button is clicked have timer for 20 seconds and question appear with clickable answer choices

$("#start").click( function(){
  var counter = 20;
  var seconds = Math.floor((counter % (1000 * 60)) / 1000);

  var timer = setInterval(function() {
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
  $('#question').html(icecreamQuestion[0].question) 
    for(var i=0; i < icecreamQuestion[0].choices.length ; i++) {
      $('#answer' + i).html(icecreamQuestion[0].choices[i])
    console.log("test")
  };

  //listen for answer selection and alert appropriate response
  $('button').click(function() {
    var clickedButton = $(this).val();
    console.log(clickedButton);
    console.log(icecreamQuestion[0].correctAnswer);

    if (clickedButton == icecreamQuestion[0].correctAnswer) {
      clearInterval(timer);
      setInterval(function() {
        $('#question').html(
          "You are correct!");
      }, 3000);
    }
  });
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
//if correct answer is clicked alert "correct!" plus gif for three seconds before next question appears

//if incorrect answer is clicked alert "wrong!" plus gif for three seconds before next question appears

//if time expires alert "time's up" plus gif for three seconds before next question appears

//once final question has been answered alert with score for three seconds before returning to start button
