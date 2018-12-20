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
