// Stop browser moving on keydown (default)
window.addEventListener('keydown', function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);
window.addEventListener('keydown', movePacman, false);
// window.addEventListener('keydown', moveGhost, false);

// Variables
const world = document.getElementById('world');
let pacmanCurrentX = 1;
let pacmanCurrentY = 1;
let ghostCurrentX = 9;
let ghostCurrentY = 9;
let ghost2CurrentX = 1;
let ghost2CurrentY = 9;
let ghost3CurrentX = 9;
let ghost3CurrentY = 1;
// let coinCounter = 0;

// Create world
function createWorld() {
  for (let rows = 0; rows < 11; rows++) {
    for (let columns = 0; columns < 11; columns++) {
      const space = document.createElement('div');
      space.classList.add('spaceClass');
      const wall = document.createElement('div');
      wall.classList.add('wallClass');
      if (rows === 0 || rows === 10 || rows === 1 && columns === 0
      || rows === 2 && columns === 0 || rows === 3 && columns === 0
      || rows === 4 && columns === 0 || rows === 6 && columns === 0
      || rows === 7 && columns === 0 || rows === 8 && columns === 0
      || rows === 9 && columns === 0 || rows === 1 && columns === 10
      || rows === 2 && columns === 10 || rows === 3 && columns === 10
      || rows === 4 && columns === 10 || rows === 6 && columns === 10
      || rows === 7 && columns === 10 || rows === 8 && columns === 10
      || rows === 9 && columns === 10 || rows === 3 && columns === 5
      || rows === 4 && columns === 5 || rows ===  5 && columns === 5
      || rows === 6 && columns === 5 || rows === 7 && columns === 5) {
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
createWorld();

// CHECK WIN
// function checkSpaceNumber() {
//     setInterval(() => {
//
//     }, 500);
//   }
//   console.log();

function showPacman() {
  const pacmanCurrentPosition = document.querySelector(`div[rowid="${pacmanCurrentY}"][columnid="${pacmanCurrentX}"]`);
  // console.log(pacmanCurrentPosition);
  pacmanCurrentPosition.classList.add('pacmanClass');
}
showPacman();

// Create Pacman
function movePacman(keyNumber) {
  switch(keyNumber.keyCode) {
    case 37:
      // console.log('left key');
      console.log(pacmanCurrentX, pacmanCurrentY);
      if (pacmanCurrentX === 1 && pacmanCurrentY === 5) {
        pacmanCurrentX--;
      } else if (pacmanCurrentX === 0 && pacmanCurrentY === 5) {
        console.log('WE ARE IN THE UPSIDE DOWN');
        pacmanCurrentX = 10;
        pacmanCurrentY = 5;
        console.log(pacmanCurrentX, pacmanCurrentY);
      } else if (pacmanCurrentX === 1
        || pacmanCurrentX === 6 && pacmanCurrentY ===3
        || pacmanCurrentX === 6 && pacmanCurrentY ===4
        || pacmanCurrentX === 6 && pacmanCurrentY ===5
        || pacmanCurrentX === 6 && pacmanCurrentY ===6
        || pacmanCurrentX === 6 && pacmanCurrentY ===7) {
        break;
      } else {
        pacmanCurrentX--;
      }
      break;
    case 38:
      // console.log('up key');
      if (pacmanCurrentY === 1 || pacmanCurrentX === 5 && pacmanCurrentY === 8
      ||  pacmanCurrentX === 0 && pacmanCurrentY === 5 || pacmanCurrentX === 10 && pacmanCurrentY === 5) {
        break;
      } else {
        pacmanCurrentY--;
      }
      break;
    case 39:
      // console.log('right key');
      if (pacmanCurrentX === 9 && pacmanCurrentY === 5) {
        pacmanCurrentX++;
      } else if (pacmanCurrentX === 10 && pacmanCurrentY === 5) {
        console.log('WE ARE IN THE UPSIDE DOWN');
        pacmanCurrentX = 0;
        pacmanCurrentY = 5;
        console.log(pacmanCurrentX, pacmanCurrentY);
        pacmanCurrentX === 0;
      } else if (pacmanCurrentX === 9
        || pacmanCurrentX === 4 && pacmanCurrentY ===3
        || pacmanCurrentX === 4 && pacmanCurrentY ===4
        || pacmanCurrentX === 4 && pacmanCurrentY ===5
        || pacmanCurrentX === 4 && pacmanCurrentY ===6
        || pacmanCurrentX === 4 && pacmanCurrentY ===7) {
        break;
      } else {
        pacmanCurrentX++;
      }
      break;
    case 40:
      // console.log('down key');
      if (pacmanCurrentY === 9 || pacmanCurrentX === 5 && pacmanCurrentY === 2
        ||  pacmanCurrentX === 0 && pacmanCurrentY === 5 || pacmanCurrentX === 10 && pacmanCurrentY === 5) {
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
    // coinCounter++;
    // console.log('Coin counter ------->', coinCounter);
    // if (coinCounter === 78) {
    //   window.confirm('WOOOHOOOYou have won!!');
    // }
  }
  showPacman();
}

// Create ghosts
// Ghost 1
function moveGhost() {
  const x = Math.floor((Math.random() * 4));
  if (x === 0) {
    // console.log('Ghost left');
    if (ghostCurrentX === 1
    || ghostCurrentX === 6 && ghostCurrentY === 3
    || ghostCurrentX === 6 && ghostCurrentY === 4
    || ghostCurrentX === 6 && ghostCurrentY === 5
    || ghostCurrentX === 6 && ghostCurrentY === 6
    || ghostCurrentX === 6 && ghostCurrentY === 7) {
      // console.log('BRICK WALL');
      ghostCurrentX++;
    } else {
      ghostCurrentX--;
    }
  } else if (x === 1) {
    if (ghostCurrentY === 1 || ghostCurrentX === 5 && ghostCurrentY === 8) {
      // console.log('BRICK WALL');
      ghostCurrentY++;
    } else {
      ghostCurrentY--;
    }
  } else if (x === 2) {
    // console.log('Ghost right');
    if (ghostCurrentX === 9
    || ghostCurrentX === 4 && ghostCurrentY ===3
    || ghostCurrentX === 4 && ghostCurrentY ===4
    || ghostCurrentX === 4 && ghostCurrentY ===5
    || ghostCurrentX === 4 && ghostCurrentY ===6
    || ghostCurrentX === 4 && ghostCurrentY ===7) {
      // console.log('BRICK WALL');
      ghostCurrentX--;
    } else {
      ghostCurrentX++;
    }
  } else if (x === 3) {
    // console.log('Ghost down');
    if (ghostCurrentY === 9 || ghostCurrentX === 5 && ghostCurrentY === 2) {
      // console.log('BRICK WALL');
      ghostCurrentY--;
    } else {
      ghostCurrentY++;
    }
  }

  const ghostCurrentDiv = document.querySelector('.ghostClass');
  if (ghostCurrentDiv) {
    ghostCurrentDiv.classList.remove('ghostClass');
  }
  const ghostCurrentPosition = document.querySelector(`div[rowid="${ghostCurrentY}"][columnid="${ghostCurrentX}"]`);
  // console.log(ghostCurrentPosition);
  ghostCurrentPosition.classList.add('ghostClass');
}

function moveGhostInterval() {
  setInterval(moveGhost, 500);
}
moveGhostInterval();

// Ghost 2
function moveGhost2() {
  const x = Math.floor((Math.random() * 4));
  if (x === 0) {
    // console.log('Ghost2 left');
    if (ghost2CurrentX === 1
    || ghost2CurrentX === 6 && ghost2CurrentY === 3
    || ghost2CurrentX === 6 && ghost2CurrentY === 4
    || ghost2CurrentX === 6 && ghost2CurrentY === 5
    || ghost2CurrentX === 6 && ghost2CurrentY === 6
    || ghost2CurrentX === 6 && ghost2CurrentY === 7) {
      // console.log('BRICK WALL');
      ghost2CurrentX++;
    } else {
      ghost2CurrentX--;
    }
  } else if (x === 1) {
    if (ghost2CurrentY === 1 || ghost2CurrentX === 5 && ghost2CurrentY === 8) {
      // console.log('BRICK WALL');
      ghost2CurrentY++;
    } else {
      ghost2CurrentY--;
    }
  } else if (x === 2) {
    // console.log('Ghost2 right');
    if (ghost2CurrentX === 9
    || ghost2CurrentX === 4 && ghost2CurrentY ===3
    || ghost2CurrentX === 4 && ghost2CurrentY ===4
    || ghost2CurrentX === 4 && ghost2CurrentY ===5
    || ghost2CurrentX === 4 && ghost2CurrentY ===6
    || ghost2CurrentX === 4 && ghost2CurrentY ===7) {
      // console.log('BRICK WALL');
      ghost2CurrentX--;
    } else {
      ghost2CurrentX++;
    }
  } else if (x === 3) {
    // console.log('Ghost2 down');
    if (ghost2CurrentY === 9 || ghost2CurrentX === 5 && ghost2CurrentY === 2) {
      // console.log('BRICK WALL');
      ghost2CurrentY--;
    } else {
      ghost2CurrentY++;
    }
  }

  const ghost2CurrentDiv = document.querySelector('.ghost2Class');
  if (ghost2CurrentDiv) {
    ghost2CurrentDiv.classList.remove('ghost2Class');
  }
  const ghost2CurrentPosition = document.querySelector(`div[rowid="${ghost2CurrentY}"][columnid="${ghost2CurrentX}"]`);
  // console.log(ghost2CurrentPosition);
  ghost2CurrentPosition.classList.add('ghost2Class');
}

function moveGhost2Interval() {
  setInterval(moveGhost2, 500);
}
moveGhost2Interval();

// Ghost 3
function moveGhost3() {
  const x = Math.floor((Math.random() * 4));
  if (x === 0) {
    // console.log('Ghost3 left');
    if (ghost3CurrentX === 1
    || ghost3CurrentX === 6 && ghost3CurrentY === 3
    || ghost3CurrentX === 6 && ghost3CurrentY === 4
    || ghost3CurrentX === 6 && ghost3CurrentY === 5
    || ghost3CurrentX === 6 && ghost3CurrentY === 6
    || ghost3CurrentX === 6 && ghost3CurrentY === 7) {
      // console.log('BRICK WALL');
      ghost3CurrentX++;
    } else {
      ghost3CurrentX--;
    }
  } else if (x === 1) {
    if (ghost3CurrentY === 1 || ghost3CurrentX === 5 && ghost3CurrentY === 8) {
      // console.log('BRICK WALL');
      ghost3CurrentY++;
    } else {
      ghost3CurrentY--;
    }
  } else if (x === 2) {
    // console.log('Ghost3 right');
    if (ghost3CurrentX === 9
    || ghost3CurrentX === 4 && ghost3CurrentY ===3
    || ghost3CurrentX === 4 && ghost3CurrentY ===4
    || ghost3CurrentX === 4 && ghost3CurrentY ===5
    || ghost3CurrentX === 4 && ghost3CurrentY ===6
    || ghost3CurrentX === 4 && ghost3CurrentY ===7) {
      // console.log('BRICK WALL');
      ghost3CurrentX--;
    } else {
      ghost3CurrentX++;
    }
  } else if (x === 3) {
    // console.log('Ghost3 down');
    if (ghost3CurrentY === 9 || ghost3CurrentX === 5 && ghost3CurrentY === 2) {
      // console.log('BRICK WALL');
      ghost3CurrentY--;
    } else {
      ghost3CurrentY++;
    }
  }

  const ghost3CurrentDiv = document.querySelector('.ghost3Class');
  if (ghost3CurrentDiv) {
    ghost3CurrentDiv.classList.remove('ghost3Class');
  }
  const ghost3CurrentPosition = document.querySelector(`div[rowid="${ghost3CurrentY}"][columnid="${ghost3CurrentX}"]`);
  // console.log(ghost3CurrentPosition);
  ghost3CurrentPosition.classList.add('ghost3Class');
}

function moveGhost3Interval() {
  setInterval(moveGhost3, 500);
}
moveGhost3Interval();

// Check Collision
function checkCollision() {
  setInterval(() => {
    if (ghostCurrentX === pacmanCurrentX && ghostCurrentY === pacmanCurrentY
    || ghost2CurrentX === pacmanCurrentX && ghost2CurrentY === pacmanCurrentY
    || ghost3CurrentX === pacmanCurrentX && ghost3CurrentY === pacmanCurrentY){
      // console.log('Collision!!!!!!!!!!!!!');
      window.confirm('You have lost. Would you like to play again?');
      if (confirm('You have lost. Would you like to play again?')) {
        // console.log('NEW GAME');
        location.reload();
      }
    }
  }, 100);
}
checkCollision();

// function checkIfPacmanWins() {
//
// }
// checkIfPacmanWins();

// NOTE Things to do:
// 1. When all divs are coin pacman wins - ! 78 Counter
// 3. Make pacman object with two properties x and y
// 4. Randomly generate grid
// 5. level 1 speed , leves walls [{7,8}, ]
// 6. Stop ghosts colliding

// NOTE Problems
// 1. SASS
// 2. Global scope
