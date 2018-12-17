/*
eslint no-console: [0] 
*/

const chalk = require('chalk');

const warning = chalk.bold.magenta;
module.exports = {
  // answerPrompt() takes in global answer object and checks questionCount to give the correct response.
  answerPrompt: val => {
    if (val.questionCount === 1) {
      console.log(
        `X and Y cordinates have been set for rover area to [X: ${val.board[0]} and Y: ${
          val.board[1]
        }]\n`
      );
    } else if (val.questionCount === 2) {
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
      console.log(
        chalk.bold.yellow(
          `*********Rover One movement commands have been sent: ${val.roverMove1}*********\n`
        )
      );
      console.log(`Let's setup Rover two while we wait for an reply transmission.\n`);
    } else if (val.questionCount === 4) {
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
      console.log(
        chalk.bold.yellow(
          `*********Rover Two movement commands have been sent: ${val.roverMove2}*********\n`
        )
      );
    }
    return null;
  }
};
