// All input if validated and parsed by the CLI in rover.js
// All this function does it return rover ending posistion or return false
// if rover went off the defined grid

const roverFinder = (board, starting, movement) => {
  const [maxX, maxY] = board;
  let [currentX, currentY, direction] = starting;
  let currentDirection = direction;

  const checkOutOfBounds = () => {
    if (currentX > maxX || currentX < 0 || currentY > maxY || currentY < 0) {
      return false;
    }
    return true;
  };

  const convertDirectionNum = () => {
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
    return null;
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
  const convertDirectionBack = () => {
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
  };

  convertDirectionNum();
  updatePosition();
  convertDirectionBack();
  const finalResaults = [currentX, currentY, currentDirection];

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
