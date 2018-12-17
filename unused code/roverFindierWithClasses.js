class RoverFinder {
  constructor(board, starting, movement) {
    [this.maxX, this.maxY] = board;
    [this.currentX, this.currentY, this.direction] = starting;
    this.currentDirection = this.direction;
    this.movement = movement;
  }

  checkOutOfBounds() {
    if (
      this.currentX > this.maxX ||
      this.currentX < 0 ||
      this.currentY > this.maxY ||
      this.currentY < 0
    ) {
      return false;
    }
    return true;
  }

  convertDirectionNum() {
    switch (this.direction) {
      case 'N':
        this.currentDirection = 0;
        break;
      case 'E':
        this.currentDirection = 1;
        break;
      case 'S':
        this.currentDirection = 2;
        break;
      case 'W':
        this.currentDirection = 3;
        break;
      default:
        return 'Error';
    }
    return null;
  }

  updatePosition() {
    this.movement.forEach(move => {
      switch (move) {
        case 'M':
          if (this.currentDirection % 4 === 0) {
            this.currentY += 1;
          } else if (this.currentDirection % 4 === 1) {
            this.currentX += 1;
          } else if (this.currentDirection % 4 === 2) {
            this.currentY -= 1;
          } else if (this.currentDirection % 4 === 3) {
            this.currentX -= 1;
          }
          break;
        case 'L':
          this.currentDirection += 3;
          break;
        case 'R':
          this.currentDirection += 1;
          break;
        default:
          break;
      }
    });
  }

  process() {
    this.convertDirectionNum();
    this.updatePosition();
    this.convertDirectionBack();
    const finalResaults = [this.currentX, this.currentY, this.currentDirection];

    if (this.checkOutOfBounds()) return finalResaults;
    return false;
  }

  convertDirectionBack() {
    switch (this.currentDirection % 4) {
      case 0:
        this.currentDirection = 'N';
        break;
      case 1:
        this.currentDirection = 'E';
        break;
      case 2:
        this.currentDirection = 'S';
        break;
      case 3:
        this.currentDirection = 'W';
        break;
      default:
        break;
    }
  }
}

const newRoverFinder = new RoverFinder(
  [5, 5],
  [1, 2, 'N'],
  ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
);
console.log(newRoverFinder.process());
