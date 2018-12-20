/* eslint no-else-return: 2 */

const boardSetupResponse = answer => {
  let [x, y] = answer;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  const response = { type: '', message: '' };
  if (answer.length !== 2) {
    response.message = `--[INVALID INPUT: ${answer}]-- Please provide both an x and y cordinates.`;
    response.type = 'error';
    return response;
  } else if (Number.isNaN(x)) {
    response.message = `--[INVALID INPUT: ${answer[0]}]-- X needs to be a number.`;
    response.type = 'error';
    return response;
  } else if (Number.isNaN(y)) {
    response.message = `--[INVALID INPUT: ${answer[1]}]-- Y needs to be a number.`;
    response.type = 'error';
    return response;
  } else if (x < 0) {
    response.message = `--[INVALID INPUT: ${x}]-- X can not be a negitive number.`;
    response.type = 'error';
    return response;
  } else if (y < 0) {
    response.message = `--[INVALID INPUT: ${y}]-- Y can not be a negitive number.`;
    response.type = 'error';
    return response;
  } else if (x > 4222) {
    response.message = `--[INVALID INPUT: ${x}]-- X can not be bigger then Mar's diameter of 4222 miles.`;
    response.type = 'error';
    return response;
  } else if (y > 4222) {
    response.message = `--[INVALID INPUT: ${y}]--\n X can not be bigger then Mar's diameter of 4222 miles.`;
    response.type = 'error';
    return response;
  }
  response.message = 'success';
  response.type = 'success';
  return response;
};

module.exports = boardSetupResponse;
