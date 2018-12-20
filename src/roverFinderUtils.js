// converts N, E, S, W to a corresponding number
const convertDirectionNum = direction => {
  switch (direction) {
    case 'N':
      return 0;
    case 'E':
      return 1;
    case 'S':
      return 2;
    case 'W':
      return 3;
    default:
      return null;
  }
};
// converts number back into letter directiom
const convertDirectionBack = direction => {
  switch (direction % 4) {
    case 0:
      return 'N';
    case 1:
      return 'E';
    case 2:
      return 'S';
    case 3:
      return 'W';
    default:
      return null;
  }
};
// return false if current position is out of bounds
const checkInBounds = (currentX, currentY, maxX, maxY) => {
  if (currentX > maxX || currentX < 0 || currentY > maxY || currentY < 0) {
    return false;
  }
  return true;
};

// takes movement array and starting array and returns new posisition array
const updatePosition = (movement, starting) => {
  let [x, y, d] = starting;
  let direction = convertDirectionNum(d);
  movement.forEach(move => {
    switch (move) {
      case 'M':
        if (direction % 4 === 0) {
          y += 1;
        } else if (direction % 4 === 1) {
          x += 1;
        } else if (direction % 4 === 2) {
          y -= 1;
        } else if (direction % 4 === 3) {
          x -= 1;
        }
        break;
      case 'L':
        direction += 3;
        break;
      case 'R':
        direction += 1;
        break;
      default:
        break;
    }
  });
  const newDirection = convertDirectionBack(direction);
  return [x, y, newDirection];
};

module.exports = {
  checkInBounds,
  updatePosition,
  convertDirectionNum,
  convertDirectionBack
};
