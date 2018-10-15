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

// Create Pacman
function movePacman(keyNumber) {
  switch(keyNumber.keyCode) {
    case 37:
      console.log('left key');
      if (pacmanCurrentX === 1 && pacmanCurrentY === 5) {
        pacmanCurrentX--;
      } else if (pacmanCurrentX === 0 && pacmanCurrentY === 5) {
        pacmanCurrentX === 10;
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
      console.log('up key');
      if (pacmanCurrentY === 1 || pacmanCurrentX === 5 && pacmanCurrentY === 8
      ||  pacmanCurrentX === 0 && pacmanCurrentY === 5 || pacmanCurrentX === 10 && pacmanCurrentY === 5) {
        break;
      } else {
        pacmanCurrentY--;
      }
      break;
    case 39:
      console.log('right key');
      if (pacmanCurrentX === 9 && pacmanCurrentY === 5) {
        pacmanCurrentX++;
      } else if (pacmanCurrentX === 10 && pacmanCurrentY === 5) {
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
      console.log('down key');
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
  }
  const pacmanCurrentPosition = document.querySelector(`div[rowid="${pacmanCurrentY}"][columnid="${pacmanCurrentX}"]`);
  console.log(pacmanCurrentPosition);
  pacmanCurrentPosition.classList.add('pacmanClass');
}

// Create ghost
function moveGhost() {
  const x = Math.floor((Math.random() * 4));
  if (x === 0) {
    console.log('Ghost left');
    if (ghostCurrentX === 1
    || ghostCurrentX === 6 && ghostCurrentY === 3
    || ghostCurrentX === 6 && ghostCurrentY === 4
    || ghostCurrentX === 6 && ghostCurrentY === 5
    || ghostCurrentX === 6 && ghostCurrentY === 6
    || ghostCurrentX === 6 && ghostCurrentY === 7) {
      console.log('BRICK WALL');
      ghostCurrentX++;
    } else {
      ghostCurrentX--;
    }
  } else if (x === 1) {
    if (ghostCurrentY === 1 || ghostCurrentX === 5 && ghostCurrentY === 8) {
      console.log('BRICK WALL');
      ghostCurrentY++;
    } else {
      ghostCurrentY--;
    }
  } else if (x === 2) {
    console.log('Ghost right');
    if (ghostCurrentX === 9
    || ghostCurrentX === 4 && ghostCurrentY ===3
    || ghostCurrentX === 4 && ghostCurrentY ===4
    || ghostCurrentX === 4 && ghostCurrentY ===5
    || ghostCurrentX === 4 && ghostCurrentY ===6
    || ghostCurrentX === 4 && ghostCurrentY ===7) {
      console.log('BRICK WALL');
      ghostCurrentX--;
    } else {
      ghostCurrentX++;
    }
  } else if (x === 3) {
    console.log('Ghost down');
    if (ghostCurrentY === 9 || ghostCurrentX === 5 && ghostCurrentY === 2) {
      console.log('BRICK WALL');
      ghostCurrentY--;
    } else {
      ghostCurrentY++;
    }
  }
  if (ghostCurrentX === pacmanCurrentX && ghostCurrentY === pacmanCurrentY){
    console.log('Collision!!!!!!!!!!!!!');
    alert('You have lost');
  }
  const ghostCurrentDiv = document.querySelector('.ghostClass');
  if (ghostCurrentDiv) {
    ghostCurrentDiv.classList.remove('ghostClass');
  }
  const ghostCurrentPosition = document.querySelector(`div[rowid="${ghostCurrentY}"][columnid="${ghostCurrentX}"]`);
  console.log(ghostCurrentPosition);
  ghostCurrentPosition.classList.add('ghostClass');
}

function moveGhostInterval() {
  setInterval(moveGhost, 1000);
}
moveGhostInterval();

// Detect collision
// function detectCollision() {
//   if (ghostCurrentX === pacmanCurrentX && ghostCurrentY === pacmanCurrentY){
//     console.log('Collision!!!!!!!!!!!!!');
//   }
// }
//
// detectCollision();

// NOTE Things to do:
// 1. When all divs are coin pacman wins
// 2. Pacman and ghost colide
// 3. Make pacman and ghost appear from start
// 4. Offstage / onstage
// 5.

// NOTE Problems
// 1. SASS
// 2. Global scope
