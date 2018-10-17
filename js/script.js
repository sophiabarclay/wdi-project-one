/* global level1 */
/* global level2 */
// Stop browser moving on keydown (default)
window.addEventListener('keydown', function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);
window.addEventListener('keydown', movePacman, false);

// Variables
const world = document.getElementById('world');
const winAlert = document.getElementById('win');
winAlert.style.display = 'none';
const loseAlert = document.getElementById('lose');
loseAlert.style.display = 'none';
const complete = document.getElementById('complete');
complete.style.display = 'none';
let pacmanCurrentX = 1;
let pacmanCurrentY = 1;
let ghostCurrentX = 9;
let ghostsCurrentX = [9, 1, 9];
let ghostsCurrentY = [9, 9, 1];
const winOk = document.getElementById('winOk');
const loseOk = document.getElementById('loseOk');
let level = 1;
let score = 1;
let currentLevel = level1;
let currentLevelNumber = 1;
let ghostsCanMove = true;

// Create world
function createWorld() {
  console.log(currentLevel);
  console.log(currentLevelNumber);
  for (let rows = 0; rows < 11; rows++) {
    for (let columns = 0; columns < 11; columns++) {
      const space = document.createElement('div');
      space.classList.add('spaceClass');
      const wall = document.createElement('div');
      wall.classList.add('wallClass');
      const countDown = document.createElement('div');
      countDown.classList.add('countDownClass');
      if (currentLevelNumber === 1) {
        if (level1[rows][columns] === 1) {
          world.appendChild(wall);
          wall.setAttribute('rowid', rows);
          wall.setAttribute('columnid', columns);
        } else {
          world.appendChild(space);
          space.setAttribute('rowid', rows);
          space.setAttribute('columnid', columns);
        }
      } else if (currentLevelNumber === 2) {
        if (level2[rows][columns] === 1) {
          world.appendChild(wall);
          wall.setAttribute('rowid', rows);
          wall.setAttribute('columnid', columns);
        } else {
          world.appendChild(space);
          space.setAttribute('rowid', rows);
          space.setAttribute('columnid', columns);
        }
      }
    }
  }
}
createWorld();

// Win/lose buttons
winOk.addEventListener('click', levelUp);

function levelUp() {
  destroyWorld();
  createWorld();
  winAlert.style.display = 'none';
  ghostsCanMove = true;
  level++;
  currentLevel = level2;
  pacmanCurrentX = 1;
  pacmanCurrentY = 1;
  ghostsCurrentX = [9, 1, 9];
  ghostsCurrentY = [9, 9, 1];
  showPacman();
}

loseOk.addEventListener('click', function() {
  location.reload();
});

//Destroy world
function destroyWorld() {
  const oldWorld = document.getElementById('world');
  Array.from(oldWorld.children).forEach(element => {
    oldWorld.removeChild(element);
  });
}

// Create Level display
const levelDisplay = document.createElement('div');
levelDisplay.classList.add('levelDisplayClass');
document.body.appendChild(levelDisplay);
levelDisplay.textContent = 'LEVEL:  ' + level;

// Create Scoreboard
const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoardClass');
document.body.appendChild(scoreBoard);
scoreBoard.textContent = 'YOUR SCORE: ' + score;

// Create Pacman
function showPacman() {
  const pacmanCurrentPosition = document.querySelector(`div[rowid="${pacmanCurrentY}"][columnid="${pacmanCurrentX}"]`);
  pacmanCurrentPosition.classList.add('pacmanClass');
}
showPacman();

function movePacman(keyNumber) {
  // console.log(level1[pacmanCurrentY][pacmanCurrentX] !== 1);
  switch(keyNumber.keyCode) {
    case 37:
    // LEFT
      if (pacmanCurrentX === 0 && pacmanCurrentY === 5) {
        console.log('WE ARE IN THE UPSIDE DOWN');
        pacmanCurrentX = 10;
        pacmanCurrentY = 5;
      } else if (currentLevel[pacmanCurrentY][pacmanCurrentX - 1]) {
        break;
      } else {
        pacmanCurrentX--;
      }
      break;
    case 38:
    // UP
      if (currentLevel[pacmanCurrentY - 1][pacmanCurrentX] === 1) {
        break;
      } else {
        pacmanCurrentY--;
      }
      break;
    case 39:
    // RIGHT
      if (pacmanCurrentX === 10 && pacmanCurrentY === 5) {
        console.log('WE ARE IN THE UPSIDE DOWN');
        pacmanCurrentX = 0;
        pacmanCurrentY = 5;
      } else if (currentLevel[pacmanCurrentY][pacmanCurrentX + 1] === 1) {
        break;
      } else {
        pacmanCurrentX++;
      }
      break;
    case 40:
    // DOWN
      if (currentLevel[pacmanCurrentY + 1][pacmanCurrentX] === 1) {
        break;
      } else {
        pacmanCurrentY++;
      }
      break;
  }
  const pacmanCurrentDiv = document.querySelector('.pacmanClass');
  if (pacmanCurrentDiv) {
    pacmanCurrentDiv.classList.remove('pacmanClass');
    const coin = document.createElement('div');
    coin.classList.add('coinClass');
    pacmanCurrentDiv.classList.add('coinClass');
  }
  showPacman();
  // CHECK WIN
  const coinsInTheWorld = document.getElementsByClassName('coinClass');
  const totalCoins = coinsInTheWorld.length;
  score = totalCoins + 1;
  scoreBoard.textContent = 'YOUR SCORE: ' + score;
  console.log('level', currentLevelNumber, 'coins', totalCoins);
  if (currentLevelNumber === 1 && totalCoins === 18) {
    winAlert.style.display = 'block';
    ghostsCanMove = false;
    currentLevel = level2;
    currentLevelNumber = 2;
    scoreBoard.textContent = 'YOUR SCORE: ' + score;
  } else if (currentLevelNumber === 2 && totalCoins >= 25) {
    console.log('Win level 2');
    complete.style.display = 'block';
    ghostsCanMove = false;
    scoreBoard.textContent = 'YOUR SCORE: ' + score;
  }
}

// Ghost 1
function moveGhost(ghostNumber) {
  if (!ghostsCanMove) return;
  const ghostX = ghostsCurrentX[ghostNumber];
  const ghostY = ghostsCurrentY[ghostNumber];
  const possibles = [];
  // Left
  if (currentLevel[ghostY][ghostX - 1] === 0) {
    possibles.push('left');
  }
  // Up
  if (currentLevel[ghostY - 1][ghostX] === 0) {
    possibles.push('up');
  }
  // Right
  if (currentLevel[ghostY][ghostX + 1] === 0) {
    possibles.push('right');
  }
  // Down
  if (currentLevel[ghostY + 1][ghostX] === 0) {
    possibles.push('down');
  }
  if (!possibles) {
    // If nothing is possible, do nothing!
    return false;
  }
  const x = Math.floor((Math.random() * possibles.length));
  const direction = possibles[x];
  if (direction === 'left') {
    ghostsCurrentX[ghostNumber]--;
  } else if (direction === 'up') {
    ghostsCurrentY[ghostNumber]--;
  } else if (direction === 'right') {
    ghostsCurrentX[ghostNumber]++;
  } else if (direction === 'down') {
    ghostsCurrentY[ghostNumber]++;
  }

  const ghostCurrentDiv = document.querySelector(`.ghost${ghostNumber + 1}Class`);
  if (ghostCurrentDiv) {
    ghostCurrentDiv.classList.remove(`ghost${ghostNumber + 1}Class`);
  }
  const ghostCurrentPosition = document.querySelector(`div[rowid="${ghostsCurrentY[ghostNumber]}"][columnid="${ghostsCurrentX[ghostNumber]}"]`);
  ghostCurrentPosition.classList.add(`ghost${ghostNumber + 1}Class`);
}

function moveGhostInterval() {
  setInterval(() => {
    for (let i = 0; i < ghostsCurrentX.length; i++) {
      moveGhost(i);
    }
  }, 500);
}
moveGhostInterval();

// Check Collision
function checkCollision() {
  setInterval(() => {
    for (let i = 0; i < ghostsCurrentX.length; i++) {
      if (ghostsCurrentX[i] === pacmanCurrentX && ghostsCurrentY[i] === pacmanCurrentY) {
        console.log('LOSER');
        clearInterval(moveGhostInterval);
        loseAlert.style.display = 'block';
      }
    }
  }, 50);
}
checkCollision();


// NOTE Things to do:
// 6. Stop ghosts colliding
// 8. CountDown Spaces

// NOTE Problems
// 1. SASS
// 2. Global scope


// //Create Countdown squares
// const countDownSpace = document.createElement('div');
// countDownSpace.classList.add('countDownClass');
// let randomX;
// let randomY;
//
// function generateRandomXandY() {
//   setInterval(() => {
//     randomX = Math.floor(Math.random() * (9-1) + 1);
//     if (randomX === 5) {
//       randomX++;
//     }
//     randomY = Math.floor(Math.random() * (9-1) + 1);
//   }, 3000);
// }
// generateRandomXandY();
//
// function randomSpaceInterval() {
//   setInterval(() => {
//     const randomSpace = document.querySelector(`div[rowid="${randomY}"][columnid="${randomX}"]`);
//     randomSpace.classList.add('countDownClass');
//   }, 8000);
// }
// randomSpaceInterval();
