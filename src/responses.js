/*
eslint no-console: [0] 
*/
/* eslint no-else-return: 2 */

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
// Takes gobal savedAnswers object and current answer from starting point question and returns reponse object
// reponse.type = 'success' or 'error'
// response.message = 'string'
const responseErrors = (answer, finalAnswers) => {
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
    response.message = `--[INVALID INPUT: ${startingX}]-- X can not be a negitive number.`;
    response.type = 'error';
    return response;
  } else if (y < 0) {
    response.message = `--[INVALID INPUT: ${startingY}]-- Y can not be a negitive number.`;
    response.type = 'error';
    return response;
  } else if (finalAnswers.board[0] < startingX || finalAnswers.board[1] < startingY) {
    response.message = `--[INVALID INPUT ${answer}]-- X or Y can't be greater then the area you setup of X: ${
      finalAnswers.board[0]
    } Y: ${finalAnswers.board[1]}`;
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

module.exports = { responsePrompt, responseErrors };
