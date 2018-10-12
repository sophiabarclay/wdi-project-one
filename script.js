// STAGE 0:
// Create grid

const world = document.getElementById('world');

function createWorld() {
  for (let rows = 0; rows < 10; rows++) {
    for (let columns = 0; columns < 10; columns++) {
      const space = document.createElement('div');
      space.classList.add('spaceClass');
      const wall = document.createElement('div');
      wall.classList.add('wallClass');
      if (rows === 0 || rows === 9 || rows === 1 && columns === 0
        || rows === 2 && columns === 0 || rows === 3 && columns === 0
        || rows === 5 && columns === 0 || rows === 6 && columns === 0) {
        world.appendChild(wall);
        wall.setAttribute('id', 'wall' + rows + columns);
      } else {
        world.appendChild(space);
        space.setAttribute('id', 'space' + rows + columns);
      }
    }
  }
}
createWorld();




// STAGE 1:
// Create pacman
// Event target pacman to user keyboard




// STAGE 2:
// Stop pacman from moving into walls
// Allow pacman to go offstage/onstage




// STAGE 3:
// Create food
// Allow pacman to gain points from food





// STAGE 4:
// Create ghost
// Make ghost move randomly
// If ghost and pacman collide, game over
