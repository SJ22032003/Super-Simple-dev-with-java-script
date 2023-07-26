
let item = JSON.parse(localStorage.getItem('score'))


const score = {
  win: 0,
  lose: 0,
  tie: 0
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  returnComputerMove('Rock');
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  returnComputerMove('Paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  returnComputerMove('Scissors');
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
  showResetConfirmation();


  confirmationYes();
  document.querySelector(".js-reset-no").addEventListener('click', () => {
    showResetConfirmation();
    confirmationYes();
    hideConfirmation();
  })

});
let isAutoPlay = true;
let interval;

const autoPlayButton = document.querySelector('.js-auto-play').addEventListener('click', () => {

  autoPlay();
})

document.body.addEventListener('keydown', (event) => {
  if (event.key == 'r') {
    returnComputerMove('Rock')
  }
  else if (event.key == 'p') {
    returnComputerMove('Paper')
  }
  else if (event.key == 's') {
    returnComputerMove('Scissors')
  }
  else if (event.key == 'a') {
    autoPlay();
  }
  else if (event.key == 'Backspace') {
    showResetConfirmation();
  }
})




function autoPlay() {
  if (isAutoPlay) {

    interval = setInterval(function () {
      const playerMove = pickComputerMove();
      returnComputerMove(playerMove)
    }, 1000)

    document.querySelector('.js-auto-play').innerHTML = 'Stop Playing';
    isAutoPlay = false;

  }
  else {

    clearInterval(interval);
    isAutoPlay = true;
    document.querySelector('.js-auto-play').innerHTML = 'Autp Play';
  }
}

function returnComputerMove(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Rock') {

    if (computerMove === 'Rock') {
      result = 'Tie.';
    }
    else if (computerMove === 'Paper') {
      result = 'Lose.';
    }
    else if (computerMove === 'Scissors') {
      result = 'Win.';
    }


  }

  else if (playerMove === 'Paper') {

    if (computerMove === 'Rock') {
      result = 'Win.';
    }
    else if (computerMove === 'Paper') {
      result = 'Tie.';
    }
    else if (computerMove === 'Scissors') {
      result = 'Lose.';
    }

  }

  else if (playerMove === 'Scissors') {

    if (computerMove === 'Rock') {
      result = 'Lose.';
    }
    else if (computerMove === 'Paper') {
      result = 'Win.';
    }
    else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }
  }

  if (result === 'Win.') {
    score.win += 1;
  }
  else if (result === 'Lose.') {
    score.lose += 1;
  }
  else if (result === 'Tie.') {
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  displayResult();

  document.querySelector('.js-result').innerHTML = result;


  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="/images/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="/images/${computerMove}-emoji.png" alt="">Computer`;
}
displayResult();



function pickComputerMove() {

  const randumNumber = Math.random();
  let computerMove = '';

  if (randumNumber >= 0 && randumNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randumNumber >= 1 / 3 && randumNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randumNumber >= 2 / 3 && randumNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}

function displayResult() {
  document.querySelector('.score').innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
}

function showResetConfirmation() {
  confirmation();
 const confir = document.querySelector('.confirmation-button').innerHTML = 'Are you sure you want to reset the score?<button onclick="confirmation();" class="js-reset-yes">Yes</button><button class="js-reset-no">No</button>';
 
 
}

function hideConfirmation() {
  document.querySelector(".confirmation-button").innerHTML = '';
}

function confirmationYes() {
  document.querySelector(".js-reset-yes").addEventListener('click', () => {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score')
    displayResult();
    hideConfirmation();
  })
}

function confirmation(){
  const jsResetButtonNo = document.querySelector('.js-reset-no');
  
  const jsResetButton = document.querySelector('.js-reset-button');

  if(jsResetButton){
    document.querySelector('.confirmation-button').style.backgroundColor = "#2D2D2D";
  }
  if(jsResetButtonNo){
    document.querySelector('.confirmation-button').style.backgroundColor = '';
  }
  document.querySelector('.confirmation-button').style.padding = "5px 12px";
}
