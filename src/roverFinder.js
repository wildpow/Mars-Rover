const roverFinderUtils = require('./roverFinderUtils');

// Inputs are already fomatted and parsed by the CLI
// board = [number, number]
// starting = [number, number, letter (either N, E, S, W)]
// movement = [...letter (either M, L, R)]
const roverFinder = (board, starting, movement) => {
  const [maxX, maxY] = board;
  let [currentX, currentY, direction] = starting;
  let currentDirection = roverFinderUtils.convertDirectionNum(direction);

  const checkOutOfBounds = () => {
    if (currentX > maxX || currentX < 0 || currentY > maxY || currentY < 0) {
      return false;
    }
    return true;
  };

  const updatePosition = () => {
    movement.forEach(move => {
      switch (move) {
        case 'M':
          if (currentDirection % 4 === 0) {
            currentY += 1;
          } else if (currentDirection % 4 === 1) {
            currentX += 1;
          } else if (currentDirection % 4 === 2) {
            currentY -= 1;
          } else if (currentDirection % 4 === 3) {
            currentX -= 1;
          }
          break;
        case 'L':
          currentDirection += 3;
          break;
        case 'R':
          currentDirection += 1;
          break;
        default:
          break;
      }
    });
  };

  updatePosition();
  const finalDirection = roverFinderUtils.convertDirectionBack(currentDirection);
  const finalResaults = [currentX, currentY, finalDirection];

  if (checkOutOfBounds()) {
    return finalResaults;
  }
  return false;
};
module.exports = roverFinder;

// console.log(roverFinder([5, 5], [1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']));
// console.log(roverFinder([5, 5], [3, 3, 'E'], ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M', 'R', 'R', 'M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M', 'R', 'R', 'M', 'M', 'R', 'R', 'M']));
