/*
eslint no-console: [0] 
*/
const chalk = require('chalk');
const roverFinder = require('../roverFinder');

// Final response to  rover movement
const FinalResponse = state => {
  const rover1 = roverFinder(state.board, state.roverStart1, state.roverMove1);
  const rover2 = roverFinder(state.board, state.roverStart2, state.roverMove2);
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
};

module.exports = FinalResponse;
