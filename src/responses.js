/*
eslint no-console: [0] 
*/
const chalk = require('chalk');
const uiElements = require('./uiElements');

const responsePrompt = answers => {
  switch (answers.questionCount) {
    case 1:
      console.log(
        `X and Y cordinates have been set for rover area to [X: ${answers.board[0]} and Y: ${
          answers.board[1]
        }]\n`
      );
      break;
    case 2:
      console.log(
        `Starting position cordinates have been set for rover 1 to [X: ${answers.roverPos1[0]} Y: ${
          answers.roverPos1[1]
        } facing: ${answers.roverPos1[2]}]\n`
      );
      uiElements.roverReady();
      uiElements.moveInstructions();
      break;
    case 3:
      console.log(
        chalk.bold.yellow(
          `*********Rover One movement commands have been sent: ${answers.roverMove1}*********\n`
        )
      );
      console.log(`Let's setup Rover two while we wait for an reply transmission.\n`);
      break;
    case 4:
      console.log(
        `Starting position cordinates have been set for rover 2 to [X: ${answers.roverPos2[0]} Y: ${
          answers.roverPos2[1]
        } facing: ${answers.roverPos2[2]}]\n`
      );
      uiElements.roverReady();
      uiElements.moveInstructions();
      break;
    case 5:
      console.log(
        chalk.bold.yellow(
          `*********Rover Two movement commands have been sent: ${answers.roverMove2}*********\n`
        )
      );
      break;
    default:
      break;
  }
};

module.exports = responsePrompt;
