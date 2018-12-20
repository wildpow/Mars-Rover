/*
eslint no-console: [0] 
*/
/* eslint no-else-return: 2 */

// Take current board array and answer array returns a response object
// response.type = 'success' or 'error'
// response.message = 'string'
const roverStartResponse = (answer, board) => {
  const [x, y, d] = answer;
  const startingX = parseInt(x, 10);
  const startingY = parseInt(y, 10);
  const directions = ['N', 'E', 'S', 'W'];
  const response = { type: '', message: '' };
  if (answer.length !== 3) {
    response.message = `--[INVALID INPUT: ${answer}]-- Please provide X Y and either [N, E, S, W] for direction.`;
    response.type = 'error';
    return response;
  } else if (Number.isNaN(startingX)) {
    response.message = `--[INVALID INPUT: ${x}]--\n X needs to be a number.`;
    response.type = 'error';
    return response;
  } else if (Number.isNaN(startingY)) {
    response.message = `--[INVALID INPUT: ${answer[1]}]--\n Y needs to be a number.`;
    response.type = 'error';
    return response;
  } else if (x < 0) {
    response.message = `--[INVALID INPUT: ${startingX}]-- X can not be a negative number.`;
    response.type = 'error';
    return response;
  } else if (y < 0) {
    response.message = `--[INVALID INPUT: ${startingY}]-- Y can not be a negative number.`;
    response.type = 'error';
    return response;
  } else if (board[0] < startingX || board[1] < startingY) {
    response.message = `--[INVALID INPUT ${answer}]-- X or Y can't be greater then the area you setup of X: ${
      board[0]
    } Y: ${board[1]}`;
    response.type = 'error';
    return response;
  } else if (!directions.includes(d)) {
    response.message = `--[INVALID INPUT]-- Direction needs to be either [N, E, S, W]`;
    response.type = 'error';
    return response;
  }
  response.message = 'success';
  response.type = 'success';
  return response;
};

module.exports = roverStartResponse;
