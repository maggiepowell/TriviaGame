//on page load have start button visible

//once start button is clicked have times for 20 seconds and question appear with three clickable answer choices
$("#start").click( function(){
  var counter = 20;
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
//if correct answer is clicked alert "correct!" plus gif for three seconds before next question appears

//if incorrect answer is clicked alert "wrong!" plus gif for three seconds before next question appears

//if time expires alert "time's up" plus gif for three seconds before next question appears

//once final question has been answered alert with score for three seconds before returning to start button
