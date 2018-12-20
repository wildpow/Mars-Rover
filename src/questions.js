/* eslint no-else-return: 2 */
/*
eslint no-console: [0] 
*/

const chalk = require('chalk');
const { numberCheck, validateCommands, saveBoard, saveRoverStart } = require('./roverUtils');
const roverStartResponse = require('./responses/roverStartResponse');

const error = chalk.bold.red;
const state = {
  board: '',
  roverStart1: '',
  roverStart2: '',
  roverMove1: '',
  roverMove2: '',
  questionCount: ''
};

const questions = [
  {
    type: 'input',
    name: 'board',
    message: `Please provide two numbers for the X and Y coordinates for the areas size (input format: ['number' 'number'] ) \n`,
    // default value if user presses enter to skip question
    default: () => '5 5',
    // filter() runs before validate()
    filter: answer => answer.trim().split(' '),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      let [x, y] = answer;
      x = parseInt(x, 10);
      y = parseInt(y, 10);
      if (answer.length !== 2) {
        return error(`--[INVALID INPUT: ${answer}]-- Please provide both an x and y cordinates.`);
      } else if (Number.isNaN(x)) {
        return error(`--[INVALID INPUT: ${answer[0]}]-- X needs to be a number.`);
      } else if (Number.isNaN(y)) {
        return error(`--[INVALID INPUT: ${answer[1]}]-- Y needs to be a number.`);
      } else if (x < 0) {
        return error(`--[INVALID INPUT: ${x}]-- X can not be a negitive number.`);
      } else if (y < 0) {
        return error(`--[INVALID INPUT: ${y}]-- Y can not be a negitive number.`);
      } else if (x > 4222) {
        return error(
          `--[INVALID INPUT: ${x}]-- X can not be bigger then Mar's diameter of 4222 miles.`
        );
      } else if (y > 4222) {
        return error(
          `--[INVALID INPUT: ${y}]--\n X can not be bigger then Mar's diameter of 4222 miles.`
        );
      }
      state.board = saveBoard(answer);
      state.questionCount = 1;
      return true;
    }
  },
  {
    name: 'roverOneStarting',
    type: 'input',
    message: `Please provide X and Y coordinates for rover starting point and cardinal direction for which direction the rover is facing.\n (input format: ['number' 'number', [letter: N E S W]]\n`,
    // default value if user presses enter to skip question
    default: () => '1 2 N',
    // filter() runs before validate()
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(' '),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const response = roverStartResponse(answer, state.board);
      if (response.type === 'error') {
        return error(response.message);
      }
      state.roverStart1 = saveRoverStart(answer);
      state.questionCount = 2;
      return true;
    }
  },
  {
    type: 'input',
    name: 'moveRover1',
    message: `Please enter commands now:`,
    // default value if user presses enter to skip question
    default: () => 'LMLMLMLMM',
    // filter() runs before validate()
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(''),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const checkForNumbers = numberCheck(answer);
      const validCommands = validateCommands(answer);
      if (answer.length === 0) {
        return error(`--[INVALID INPUT: ${answer}]-- Command can not be blank`);
      }
      if (validCommands.length !== answer.length || !checkForNumbers) {
        return error(`--[INVALID INPUT: ${answer}]-- Commands must can only be M, L, or R`);
      }
      state.roverMove1 = answer;
      state.questionCount = 3;
      return true;
    }
  },
  {
    type: 'input',
    name: 'roverTwoStarting',
    // default value if user presses enter to skip question
    default: () => '3 3 E',
    // filter() runs before validate()
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(' '),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const response = roverStartResponse(answer, state.board);
      if (response.type === 'error') {
        return error(response.message);
      }
      state.roverStart2 = saveRoverStart(answer);
      state.questionCount = 4;
      return true;
    }
  },
  {
    type: 'input',
    name: 'moveRover2',
    message: `Please enter commands now:`,
    // default value if user presses enter to skip question
    default: () => 'MMRMMRMRRM',
    // filter() runs before validate()
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(''),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const checkForNumbers = numberCheck(answer);
      const validCommands = validateCommands(answer);
      if (answer.length === 0) {
        return error(`--[INVALID INPUT: ${answer}]-- Command can not be blank`);
      }
      if (validCommands.length !== answer.length || !checkForNumbers) {
        return error(`--[INVALID INPUT: ${answer}]-- Commands must can only be M, L, or R`);
      }
      state.roverMove2 = answer;
      state.questionCount = 5;
      return true;
    }
  }
];

module.exports = { state, questions };
