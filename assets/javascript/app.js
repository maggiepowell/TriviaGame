//on page load have start button visible

//once start button is clicked have times for 20 seconds and question appear with three clickable answer choices

$("#start").click( function(){
  var counter = 20;
  var seconds = Math.floor((counter % (1000 * 60)) / 1000);

  setInterval(function() {
    counter--;
     if (counter >= 0) {
        span = document.getElementById("timer");
        span.innerHTML = counter;
     }
     if (counter === 0) {
        alert('Sorry, out of time!');
        clearInterval(counter);
      }
    }, 1000);
});

var icecreamQuestion = [{
    question:"What year was the ice cream cone invented?",
    choices:["1904", "1905", "1914", "1915"],
    validAnswer: 0
  },
  {
    question:"What country consumed more ice cream per person last year?",
    choices:["USA", "China", "Germany", "New Zealand"],
    validAnswer: 3
  },
  {
    question:"How many gallons of milk does it take to make one gallon of ice cream?",
    choices:["Two", "Three", "Four", "Ten"],
    validAnswer: 1
  },
  {
    question:"Which flavor came first, chocolate or vanilla?",
    choices:["Chocolate", "Vanilla"],
    validAnswer: 0
    },
  {
    question:"What is a professional ice cream tasting spoon typically made of?",
    choices:["Gold", "Platinum", "Mother of Pearl", "Wood"],
    validAnswer: 0
    },
  {
    question:"What do food stylists typically use to represent ice cream in advertising campaigns?",
    choices:["Cream Cheese", "Yogurt", "Mashed Potatoes"],
    validAnswer: 2
}]
//if correct answer is clicked alert "correct!" plus gif for three seconds before next question appears

//if incorrect answer is clicked alert "wrong!" plus gif for three seconds before next question appears

//if time expires alert "time's up" plus gif for three seconds before next question appears

//once final question has been answered alert with score for three seconds before returning to start button
