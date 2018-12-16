const roverFinder = (board, starting, movement) => {
  const [maxX, maxY] = board;
  const [startingX, StartingY, direction] = starting;
  let currentDirection = direction;
  let currentX = startingX;
  let currentY = StartingY;
  let lostReception = 0;

  const checkOutOfBounds = () => {
    if (currentX > maxX || currentX < 0 || currentY > maxY || currentY < 0) {
      lostReception += 1;
    }
  };
  switch (direction) {
    case 'N':
      currentDirection = 0;
      break;
    case 'E':
      currentDirection = 1;
      break;
    case 'S':
      currentDirection = 2;
      break;
    case 'W':
      currentDirection = 3;
      break;
    default:
      return 'Error';
  }
  movement.forEach(move => {
    switch (move) {
      case 'M':
        if (currentDirection % 4 === 0) {
          currentY += 1;
          checkOutOfBounds();
        } else if (currentDirection % 4 === 1) {
          currentX += 1;
          checkOutOfBounds();
        } else if (currentDirection % 4 === 2) {
          currentY -= 1;
          checkOutOfBounds();
        } else if (currentDirection % 4 === 3) {
          currentX -= 1;
          checkOutOfBounds();
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
  switch (currentDirection % 4) {
    case 0:
      currentDirection = 'N';
      break;
    case 1:
      currentDirection = 'E';
      break;
    case 2:
      currentDirection = 'S';
      break;
    case 3:
      currentDirection = 'W';
      break;
    default:
      break;
  }
  if (lostReception !== 0) {
    if (currentX <= maxX || currentY <= maxY) {
      console.log(
        `Lost reception with your rover ${lostReception} time${
          lostReception > 1 ? "'s" : ''
        } but you made it back`,
        currentX,
        currentY,
        currentDirection
      );
    } else {
      console.log('Your rover is out of bounds');
      console.log(currentX, currentY, currentDirection);
    }
  }
  const finalResaults = [currentX, currentY, currentDirection];
  return finalResaults;
};
module.exports = roverFinder;

// console.log(mars([5, 5], [1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']));
// console.log(mars([5, 5], [3, 3, 'E'], ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']));
// console.log(mars([0, 0], [0, 0, 'N'], ['M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M', 'R', 'R', 'M']));
// console.log(roverFinder([0, 0], [0, 0, 'N'], ['M', 'R', 'R', 'M', 'M', 'R', 'R', 'M']));
