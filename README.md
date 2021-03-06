
#  ![GA](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) WDI Project One: SQUARES

## Brief
Design a grid-based game that works in the user's browser. Players must be able to win and lose. The game should be built using HTML5, CSS3, and JavaScript.

**Timeframe**: 1 week

## Overview
SQUARES was designed for my first project at General Assembly, and was my first solo attempt at using JavaScript. The game is loosely based on the same concept as Pac-Man, whereby the player (white) must cover all of the red squares while avoiding the randomly moving grey squares, or 'ghosts'

If the player collides with a ghost they are given the option to start again, and if they succeed in covering all of the red squares, they are given the option to play the second level.

Play the game on GitHub Pages [here](https://sophiabarclay.github.io/wdi-project-one/).

## Technologies Used

* HTML5
* CSS
* JavaScript (ECMAScript 6)
* Git
* GitHub
* Google Fonts

## Design
Before deciding on which grid-based game I wanted to create for this project, I researched a number of different options and discovered that the majority of games in this area follow similar design principles: what I refer to as the early-80s arcade aesthetic. In response to the overload of pixellated, neon-on-black observed during this research stage, I opted for the complete opposite, keeping the design stripped-down and minimal, a refreshing change in my opinion.
![levels width="300"](./images/screenshots/Squares.gif)

## Wins and Challenges

### Wins
I had a lot of fun creating multiple layers with my grid system of walls (blue), unvisited squares (red) and visited squares (gold), and am proud of how my logic played out.

As demonstrated in my code below, the grid is created with DOM manipulation based on grids represented in the two variables level1 and level2. As defined in the createWorld function, which maps through 11 rows and 11 columns, when the array value is 1, the function appends 'wall' to the DOM, and when the value is 0, it appends 'space'. 

JavaScript:
<pre>
const level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const level2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let currentLevel = level1;

</pre>
<pre>
function createWorld() {
  for (let rows = 0; rows < 11; rows++) {
    for (let columns = 0; columns < 11; columns++) {
      <b>const space = document.createElement('div');
      space.classList.add('spaceClass');
      const wall = document.createElement('div');
      wall.classList.add('wallClass');</b>
      const countDown = document.createElement('div');
      countDown.classList.add('countDownClass');
      if (currentLevelNumber === 1) {
        <b>if (level1[rows][columns] === 1) {
          world.appendChild(wall);</b>
          wall.setAttribute('rowid', rows);
          wall.setAttribute('columnid', columns);
        } else {
          <b>world.appendChild(space);</b>
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
</pre>

CSS:
```
.wallClass {
  width: 3.3vw;
  height: 3.3vw;
  border: solid white 0.03vw;
  background-color: darkturquoise;
  position: relative;
}

.spaceClass {
  width: 3.3vw;
  height: 3.3vw;
  border: solid white 0.03vw;
  background-color: tomato;
  position: relative;
}
```

![levels width="300"](./images/screenshots/Levels1and2.png)

### Challenges
Given more time, there is a fair amount of refactoring that I would have liked to complete. This first project clarified the importance of thorough planning and giving myself more time after reaching MVP to trim down my code.

## Future Features
* Add a score leaderboard allowing users to save scores and compete with other users
* Create additional levels to the game as well as faster moving ghosts as the user progresses through the levels
* Add bonus point squares and ghost-freezing squares which would appear on the grid for a limited time
