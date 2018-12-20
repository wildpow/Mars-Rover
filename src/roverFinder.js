const { checkInBounds, updatePosition } = require('./roverFinderUtils');

// Inputs are already fomatted and parsed by the CLI
// board = [number, number]
// starting = [number, number, letter (either N, E, S, W)]
// movement = [...letter (either M, L, R)]
const roverFinder = (board, starting, movement) => {
  const [maxX, maxY] = board;
  const finalPosition = updatePosition(movement, starting);
  const [endingX, endingY, endingDirection] = finalPosition;
  const isInBounds = checkInBounds(endingX, endingY, maxX, maxY);
  if (isInBounds) {
    return [endingX, endingY, endingDirection];
  }
  return false;
};
module.exports = roverFinder;

// console.log(roverFinder([5, 5], [1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']));
// console.log(roverFinder([5, 5], [3, 3, 'E'], ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M', 'R', 'R', 'M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M', 'R', 'R', 'M', 'M', 'R', 'R', 'M']));
