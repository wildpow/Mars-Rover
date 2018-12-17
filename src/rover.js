/* eslint no-else-return: 2 */
/*
eslint no-console: [0] 
*/

const inquirer = require('inquirer');
const { from } = require('rxjs');
const chalk = require('chalk');
const uiElements = require('./uiElements');
const roverFinder = require('./roverFinder');
const responses = require('./responses');

const finalAnswers = {};

// saveBoard is called at the end of the first question. It takes the answer array [x,y]
// parses it and save it in the finalAnswers global object.
const saveBoard = val => {
  let [x, y] = val;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  finalAnswers.board = [x, y];
  finalAnswers.questionCount = 1;
  return finalAnswers;
};

// saveRoverStart is called at the end of the two rover start questions. It takes the answer array,[x,y,d]
// and a number that corresponds to the rover you're working with.
const saveRoverStart = (answer, roverNumber) => {
  let [x, y, d] = answer;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (roverNumber === 1) {
    finalAnswers.roverPos1 = [x, y, d];
    finalAnswers.questionCount = 2;
  } else if (roverNumber === 2) {
    finalAnswers.roverPos2 = [x, y, d];
    finalAnswers.questionCount = 4;
  }
};
// Saves answer in global oject and updates questionCount
const saveRoverMove = (answer, roverNumber) => {
  if (roverNumber === 1) {
    finalAnswers.roverMove1 = answer;
    finalAnswers.questionCount = 3;
  } else if (roverNumber === 2) {
    finalAnswers.roverMove2 = answer;
    finalAnswers.questionCount = 5;
  }
};
const error = chalk.bold.red;

const questions = [
  {
    type: 'input',
    name: 'board',
    message: `Please provide two numbers for the X and Y coordinates for the areas size (input format: ['number' 'number'] ) \n`,
    // default value if user presses enter to skip question
    default: () => '5 5',
    // filter() runs before validate()
    filter: val => val.trim().split(' '),
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

      saveBoard(answer);
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
      const [x, y, d] = answer;
      const startingX = parseInt(x, 10);
      const startingY = parseInt(y, 10);

      const directions = ['N', 'E', 'S', 'W'];

      if (answer.length !== 3) {
        return error(
          `--[INVALID INPUT: ${answer}]-- Please provide X Y and either [N, E, S, W] for direction.`
        );
      } else if (Number.isNaN(startingX)) {
        return error(`--[INVALID INPUT: ${x}]--\n X needs to be a number.`);
      } else if (Number.isNaN(startingY)) {
        return error(`--[INVALID INPUT: ${answer[1]}]--\n Y needs to be a number.`);
      } else if (x < 0) {
        return error(`--[INVALID INPUT: ${startingX}]-- X can not be a negitive number.`);
      } else if (y < 0) {
        return error(`--[INVALID INPUT: ${startingY}]-- Y can not be a negitive number.`);
      } else if (finalAnswers.board[0] < startingX || finalAnswers.board[1] < startingY) {
        return error(
          `--[INVALID INPUT ${answer}]-- X or Y can't be greater then the area you setup of X: ${
            finalAnswers.board[0]
          } Y: ${finalAnswers.board[1]}`
        );
      } else if (!directions.includes(d)) {
        return error(`--[INVALID INPUT]-- Direction needs to be either [N, E, S, W]`);
      }
      saveRoverStart(answer, 1);
      return true;
    }
  },
  {
    type: 'input',
    name: 'moveRover1',
    message: `Please enter commands now:`,
    // default value if user presses enter to skip question
    default: () => 'LMLMLMLMM',
    // default value if user presses enter to skip question
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(''),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const numberCheck = answer.every(item => {
        const convertedItem = parseInt(item, 10);
        return Number.isNaN(convertedItem);
      });
      const validCommands = ['R', 'L', 'M'];
      const intersections = answer.filter(e => validCommands.indexOf(e) !== -1);
      if (answer.length === 0) {
        return error(`--[INVALID INPUT: ${answer}]-- Command can not be blank`);
      }
      if (intersections.length !== answer.length || !numberCheck) {
        return error(`--[INVALID INPUT: ${answer}]-- Commands must can only be M, L, or R`);
      }
      saveRoverMove(answer, 1);
      return true;
    }
  },
  {
    type: 'input',
    name: 'roverTwoStarting',
    // default value if user presses enter to skip question
    default: () => '3 3 E',
    // default value if user presses enter to skip question
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(' '),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const [x, y, d] = answer;
      const startingX = parseInt(x, 10);
      const startingY = parseInt(y, 10);

      const directions = ['N', 'E', 'S', 'W'];

      if (answer.length !== 3) {
        return error(
          `--[INVALID INPUT: ${answer}]-- Please provide X Y and either [N, E, S, W] for direction.`
        );
      } else if (Number.isNaN(startingX)) {
        return error(`--[INVALID INPUT: ${x}]--\n X needs to be a number.`);
      } else if (Number.isNaN(startingY)) {
        return error(`--[INVALID INPUT: ${answer[1]}]--\n Y needs to be a number.`);
      } else if (x < 0) {
        return error(`--[INVALID INPUT: ${startingX}]-- X can not be a negitive number.`);
      } else if (y < 0) {
        return error(`--[INVALID INPUT: ${startingY}]-- Y can not be a negitive number.`);
      } else if (finalAnswers.board[0] < startingX || finalAnswers.board[1] < startingY) {
        return error(
          `--[INVALID INPUT ${answer}]-- X or Y can't be greater then the area you setup of X: ${
            finalAnswers.board[0]
          } Y: ${finalAnswers.board[1]}`
        );
      } else if (!directions.includes(d)) {
        return error(`--[INVALID INPUT]-- Direction needs to be either [N, E, S, W]`);
      }
      saveRoverStart(answer, 2);
      return true;
    }
  },
  {
    type: 'input',
    name: 'moveRover2',
    message: `Please enter commands now:`,
    // default value if user presses enter to skip question
    default: () => 'MMRMMRMRRM',
    filter: answer =>
      answer
        .toUpperCase()
        .trim()
        .split(''),
    // validate() returns false if answer doesn't meet criteria and true if it does
    validate: answer => {
      const numberCheck = answer.every(item => {
        const convertedItem = parseInt(item, 10);
        return Number.isNaN(convertedItem);
      });
      const validCommands = ['R', 'L', 'M'];
      const intersections = answer.filter(e => validCommands.indexOf(e) !== -1);
      if (answer.length === 0) {
        return error(`--[INVALID INPUT: ${answer}]-- Command can not be blank`);
      }
      if (intersections.length !== answer.length || !numberCheck) {
        return error(`--[INVALID INPUT: ${answer}]-- Commands must can only be M, L, or R`);
      }
      saveRoverMove(answer, 2);
      return true;
    }
  }
];
uiElements.logo();
uiElements.description();
uiElements.step1();
const observable = from(questions);

inquirer.prompt(observable).ui.process.subscribe(
  () => {
    responses.answerPrompt(finalAnswers);
  },
  err => {
    console.log('Error: ', err);
  },
  () => {
    const rover1 = roverFinder(finalAnswers.board, finalAnswers.roverPos1, finalAnswers.roverMove1);
    const rover2 = roverFinder(finalAnswers.board, finalAnswers.roverPos2, finalAnswers.roverMove2);
    if (rover1) {
      console.log(
        `${chalk.bold.green('Your Final Posistion of Rover One is')} ${chalk.bold.yellow(
          rover1.join(' ')
        )}`
      );
    } else {
      console.log(`${chalk.bold.red('We lost contact with Rover One')}`);
    }
    if (rover2) {
      console.log(
        `${chalk.bold.green('Your Final Posistion of Rover Two is')} ${chalk.bold.yellow(
          rover2.join(' ')
        )}`
      );
    } else {
      console.log(`${chalk.bold.red('We lost contact with Rover Two')}`);
    }
    console.log(`${chalk.bold.green('Thank you for using Rover Simulator')}`);
  }
);
