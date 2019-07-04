// declare global variables 

let randNum = 0;
let losses = 0;
let wins = 0;
let counter = 0;
let images = ['assets/images/gem1.jpg', 'assets/images/gem2.jpg', 'assets/images/gem3.jpg', 'assets/images/gem4.jpg']

$(document).ready(function () {

  function gameStart() {

    // $('.crystals').empty(); 
    count = 0;
    // The random number shown at the start of the game should be between 19 - 120. 

    randNum = Math.floor(Math.random() * 120) + 19;

    // There will be four crystals displayed as buttons on the page.

    $('#randNum').html(randNum);

    for (let i = 0; i < 4; i++) {

      // Each crystal should have a random hidden value between 1 - 12.

      let random = Math.floor(Math.random() * 12) + 1;
      //console.log(random);

      // create a div and add a class of crystal with the name of crystal
      // assigns random points to each crystal

      let crystal = $('<div>');
      crystal.attr({
        'class': 'crystal',
        'randGem': random
      });

      // with each iteration of the loop a background-image is created 
      crystal.css({
        "background-image": "url('" + images[i] + "')",
        "background-size": "cover"
      })

      // append the crystal to the DOM 
      $('.crystals').append(crystal);
    }

    // Your game will hide this amount until the player clicks a crystal.

    winner = () => {
      wins++
      $("#wins").html(wins);
    }

    loser = () => {
      losses++;
      $("#losses").html(losses);
    }

    $('.crystal').on('click', function () {

      var crystalValue = parseInt($(this).attr('randGem'));
      console.log($(this).attr('randGem'));

      counter += crystalValue;
      // console.log(counter);

      // The player wins if their total score matches the random number from the beginning of the game. 

      if (counter == randNum) {
        alert("You win!");
        winner();
        reset();


      } else if (counter > randNum) {
        alert('You Lose!');
        loser();
        reset();

      } else {
        $('#total').html(counter);
      }

    });

  }

  // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero. 
  // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

  reset = () => {
    randNum = Math.floor(Math.random() * 120) + 19;
    counter = 0;
    $("#randNum").html(randNum);
    $("#total").html(0);
  }

  gameStart();

}); 