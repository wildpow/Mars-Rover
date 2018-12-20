/* eslint no-else-return: 2 */
/*
eslint no-console: [0] 
*/

const chalk = require('chalk');
const { hasOnlyLetters, validateCommands, saveBoard, saveRoverStart } = require('./roverUtils');
const roverStartResponse = require('./responses/roverStartResponse');
const boardSetupResponse = require('./responses/boardSetupResponse');

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
      const response = boardSetupResponse(answer);
      if (response.type === 'error') {
        return error(response.message);
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
      const checkForNumbers = hasOnlyLetters(answer);
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
      const checkForNumbers = hasOnlyLetters(answer);
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
