/* eslint no-else-return: 2 */
/*
eslint no-console: [0] 
*/
const inquirer = require('inquirer');
const { from } = require('rxjs');
const chalk = require('chalk');

const finalAnswers = {};

const saveBoard = val => {
  let [x, y] = val;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  finalAnswers.board = [x, y];
  finalAnswers.questionCount = 1;
  return finalAnswers;
};

const saveRoverStart = (val, roverNumber) => {
  let [x, y, d] = val;
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
const saveRoverMove = (val, roverNumber) => {
  if (roverNumber === 1) {
    finalAnswers.roverMove1 = val;
    finalAnswers.questionCount = 3;
  } else if (roverNumber === 2) {
    finalAnswers.roverMove2 = val;
    finalAnswers.questionCount = 5;
  }
};
const warning = chalk.bold.magenta;
const error = chalk.bold.red;

const questions = [
  {
    type: 'input',
    name: 'board',
    message: `Please provide two numbers for the X and Y coordinates for the areas size (input format: ['number' 'number'] ) \n`,
    default: () => '5 5',
    filter: val => val.trim().split(' '),
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
    default: () => '1 2 N',
    filter: val =>
      val
        .toUpperCase()
        .trim()
        .split(' '),
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
    default: () => 'LMLMLMLMM',
    filter: val =>
      val
        .toUpperCase()
        .trim()
        .split(''),
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
    default: () => '3 3 E',
    filter: val =>
      val
        .toUpperCase()
        .trim()
        .split(' '),
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
    default: () => 'MMRMMRMRRM',
    filter: val =>
      val
        .toUpperCase()
        .trim()
        .split(''),
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

const observable = from(questions);

inquirer.prompt(observable).ui.process.subscribe(
  ans => {
    const answerPrompt = val => {
      if (val.questionCount === 1) {
        console.log(val.questionCount);
        console.log(
          `X and Y cordinates have been set for rover area to [X: ${val.board[0]} and Y: ${
            val.board[1]
          }]\n`
        );
      } else if (val.questionCount === 2) {
        console.log(val.questionCount);
        console.log(
          `Starting position cordinates have been set for rover 1 to [X: ${val.roverPos1[0]} Y: ${
            val.roverPos1[1]
          } facing: ${val.roverPos1[2]}]\n`
        );
        console.log(
          chalk.bold.yellow(
            `${`*********First rover is ready to be deployed and awaiting commands**********`.toUpperCase()}`
          )
        );
        console.log(
          chalk.bold(
            `[Rover movement commands]\n L: Turn rover left 90 degrees\n R: Turn rover right 90 degrees\n M: Move one space`
          )
        );
        console.log(`\nThe Rover understands these commands in a continuous string Like: [MMRMMRMRRM]\n ${warning(
          `If the rover moves out of the set area we may loose contact with it, so be careful`
        )}\n
        `);
      } else if (val.questionCount === 3) {
        console.log(val.questionCount);
        console.log(
          chalk.bold.yellow(
            `*********Rover One movement commands have been sent: ${val.roverMove1}*********\n`
          )
        );
        console.log(`Let's setup Rover two while we wait for an reply transmission.\n`);
      } else if (val.questionCount === 4) {
        console.log(val.questionCount);
        console.log(
          `Starting position cordinates have been set for rover 2 to [X: ${val.roverPos2[0]} Y: ${
            val.roverPos2[1]
          } facing: ${val.roverPos2[2]}]\n`
        );
        console.log(
          chalk.bold.yellow(
            `${`*********Second rover is ready to be deployed and awaiting commands**********`.toUpperCase()}`
          )
        );
        console.log(
          chalk.bold(
            `[Rover movement commands]\n L: Turn rover left 90 degrees\n R: Turn rover right 90 degrees\n M: Move one space`
          )
        );
        console.log(`\nThe Rover understands these commands in a continuous string Like: [MMRMMRMRRM]\n ${warning(
          `If the rover moves out of the set area we may loose contact with it, so be careful`
        )}\n
        `);
      } else if (val.questionCount === 5) {
        console.log(val.questionCount);
        console.log(
          chalk.bold.yellow(
            `*********Rover Two movement commands have been sent: ${val.roverMove2}*********\n`
          )
        );
      }
      return null;
    };
    answerPrompt(finalAnswers);
  },
  function(err) {
    console.log('Error: ', err);
  },
  function() {
    console.log(
      `roverP1: ${finalAnswers.roverPos1} roverP2: ${finalAnswers.roverPos2} board: ${
        finalAnswers.board
      } rover1move: ${finalAnswers.roverMove1} rover2move: ${finalAnswers.roverMove2}`
    );
  }
);
