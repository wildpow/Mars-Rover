/* eslint no-else-return: 2 */
/*
eslint no-console: [0] 
*/

const inquirer = require('inquirer');
const { from } = require('rxjs');
const uiElements = require('./uiElements');
const responsePrompt = require('./responses/responsePrompt');
const { state, questions } = require('./questions');
const finalResponse = require('./responses/finalResponse');

const rover = () => {
  uiElements.logo();
  uiElements.description();
  uiElements.step1();
  const observable = from(questions);

  inquirer.prompt(observable).ui.process.subscribe(
    () => {
      responsePrompt(state);
    },
    err => {
      console.log('Error: ', err);
    },
    () => {
      finalResponse(state);
    }
  );
};

rover();
