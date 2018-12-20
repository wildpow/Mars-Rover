/*
eslint no-console: [0] 
*/

const chalk = require('chalk');
const uiElements = require('../uiElements');

// fires after a successful answer. Take in a number and returns responses response
const responsePrompt = ({
  questionCount,
  board,
  roverStart1,
  roverMove1,
  roverStart2,
  roverMove2
}) => {
  switch (questionCount) {
    case 1:
      console.log(
        `X and Y cordinates have been set for rover area to [X: ${board[0]} and Y: ${board[1]}]\n`
      );
      break;
    case 2:
      console.log(
        `Starting position cordinates have been set for rover 1 to [X: ${roverStart1[0]} Y: ${
          roverStart1[1]
        } facing: ${roverStart1[2]}]\n`
      );
      uiElements.roverReady();
      uiElements.moveInstructions();
      break;
    case 3:
      console.log(
        chalk.bold.yellow(
          `*********Rover One movement commands have been sent: ${roverMove1}*********\n`
        )
      );
      console.log(`Let's setup Rover two while we wait for an reply transmission.\n`);
      break;
    case 4:
      console.log(
        `Starting position cordinates have been set for rover 2 to [X: ${roverStart2[0]} Y: ${
          roverStart2[1]
        } facing: ${roverStart2[2]}]\n`
      );
      uiElements.roverReady();
      uiElements.moveInstructions();
      break;
    case 5:
      console.log(
        chalk.bold.yellow(
          `*********Rover Two movement commands have been sent: ${roverMove2}*********\n`
        )
      );
      break;
    default:
      break;
  }
};

module.exports = responsePrompt;
