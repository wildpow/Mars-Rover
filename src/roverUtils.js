// Returns True if numbers exist in given array.
const hasOnlyLetters = answer => {
  const check = answer.every(item => {
    const convertedItem = parseInt(item, 10);
    return Number.isNaN(convertedItem);
  });
  return check;
};

// Returns of any matching items that match validCommands
const validateCommands = answer => {
  const validCommands = ['R', 'L', 'M'];
  const intersections = answer.filter(e => validCommands.indexOf(e) !== -1);
  return intersections;
};

// returns parsed board
const saveBoard = val => {
  let [x, y] = val;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  const board = [x, y];
  return board;
};

// returns parsed starting position
const saveRoverStart = answer => {
  let [x, y, d] = answer;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  return [x, y, d];
};

module.exports = { hasOnlyLetters, validateCommands, saveBoard, saveRoverStart };
