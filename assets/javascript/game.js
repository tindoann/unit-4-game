let randNum = 0;  //random_result; 
let losses = 0; 
let wins = 0; 
let previous = 0; 
let counter = 0; 
let gems = ['gem1.jpg', 'gem2.jpg', 'gem3.jpg', 'gem4.jpg'];

function gameStart() {

// $('.crystals').empty(); 

// The random number shown at the start of the game should be between 19 - 120. 

randNum = Math.floor(Math.random() * 120) + 19; 

// There will be four crystals displayed as buttons on the page.

$('#randNum').html(randNum); 

// * Each crystal should have a random hidden value between 1 - 12. /
for (let i = 0; i < 4; i++) {

var random = Math.floor(Math.random() * 11) + 1;
//console.log(random);

  let crystal = $('<div>'); 
      crystal.attr({
        'class': 'crystal', 
        'randGem': random
      }); 

  $('.crystals').append(crystal); 
}

$('.crystal').on('click', function () {
  console.log($(this).attr('randGem')); 

  var crystalValue = parseInt($(this).attr('randGem'));
  counter += crystalValue;
  // console.log(counter);

  if (counter == randNum) {
    alert("You win!");
    wins++
    gameStart(); 
  } else if (counter > randNum) {
    alert('You Lose!'); 
    losses++; 
    gameStart(); 
  } else {
    $('#total').html(counter); 
  }
});



}

gameStart();

/* 
resetAndStart(); 


/* $('crystal').on('click', function () {
  console.log($(this)); 

$(document).on('click', '.crystal', function () {
  
  var num = parseInt($(this).attr('data-random')); 

  previous += num; 

  console.log(previous); 

  $('#previous').html(previous); 
  console.log(previous);

  if(previous > randNum) {
    console.log('You lost!!'); 

    lost--; 
    $('#lost').html('You lost: ' + lost); ; 
    
    previouis = 0; 
  
    resetAndStart(); 
  }
  else if(previous === randNum){
    console.log('You win!!!'); 

    win++;

    $('#win').html('You win: ' + win); 

    previous = 0; 

    resetAndStart(); 

  }
}); 

*/

   

 /*    * Your game will hide this amount until the player clicks a crystal. <==

   * The player wins if their total score matches the random number from the beginning of the game. 




     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero. <== !IMPORTANT 

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

// !IMPORTANT

* Each crystal should have a random hidden value between 1 - 12. // !IMPORTANT GEM
*/


// pseudo-code

// a game with 4 crystal and random result
// every crystal needs to have a random number between 1 - 12
// a new random number should be generate every single time we win or lose
// when clicking any crystal, it should be adding with the previous number
// until it equals the total score 
// if it is greater than Random Result, we decrement a lost counter
// if it is equal, then we increment a win counter


// The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120. 
 
