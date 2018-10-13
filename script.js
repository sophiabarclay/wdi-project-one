// STAGE 1:
// Create world

const world = document.getElementById('world');
const pacman = document.createElement('div');

// Stop browser moving on keydown (default)
window.addEventListener('keydown', function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

window.addEventListener('keydown', moveSomething, false);


// window.addEventListener("keypress", dealWithKeyboard, false);
// window.addEventListener("keyup", dealWithKeyboard, false);

function createWorld() {
  for (let rows = 0; rows < 11; rows++) {
    for (let columns = 0; columns < 11; columns++) {
      const space = document.createElement('div');
      space.classList.add('spaceClass');
      const wall = document.createElement('div');
      wall.classList.add('wallClass');
      pacman.classList.add('pacmanClass');
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
        wall.setAttribute('id', 'wall' + 1 + rows + columns);
      } else if (rows === 1 && columns === 1) {
        world.appendChild(pacman);
        pacman.setAttribute('id', 'pacman' + 1 + rows + columns);
      } else {
        world.appendChild(space);
        space.setAttribute('id', 'space' + 1 + rows + columns);
      }
    }
  }
  function handleClick() {
    console.log('Pacman clicked!');
  }
  pacman.addEventListener('click', handleClick());
}

createWorld();


// STAGE 2:
// Move pacman
function moveSomething(e) {
  switch(e.keyCode) {
    case 37:
      console.log('left key');
      break;
    case 38:
      console.log('up key');
      break;
    case 39:
      console.log('right key');
      break;
    case 40:
      console.log('down key');
      break;
  }
}


// STAGE 3:
// Stop pacman from moving into walls
// Allow pacman to go offstage/onstage




// STAGE 3:
// Create food
// Allow pacman to gain points from food





// STAGE 4:
// Create ghost
// Make ghost move randomly
// If ghost and pacman collide, game over



// NOTE SPARE CODE
// function getElementPosition(el) {
//   const rect = el.getBoundingClientRect();
//   console.log(rect.top, rect.left);
// }
