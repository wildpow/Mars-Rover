[![Known Vulnerabilities](https://snyk.io/test/github/wildpow/Mars-Rover/badge.svg?targetFile=package.json)](https://snyk.io/test/github/wildpow/Mars-Rover?targetFile=package.json)
[![Inline docs](http://inch-ci.org/github/wildpow/Mars-Rover.svg?branch=master)](http://inch-ci.org/github/wildpow/Mars-Rover) [![dependencies Status](https://david-dm.org/wildpow/Mars-Rover/status.svg)](https://david-dm.org/wildpow/Mars-Rover)

# Mars Rover

A Mars rover simulation. By giving simple text commands you can control the enviroment and the movements of a squad of Mars rovers.

## Setting up enviroment

Node and your prefered package manager are required to run this project. If you haven't installed these already you can get them at the following links:

- [Node](https://nodejs.org/en/ 'Node js') which comes bundled with [NPM](https://www.npmjs.com/ 'NPM package manager') package manager.
- [Yarn](https://yarnpkg.com/en/) is an alternitive package manager for Node but you could use either.

## Setting up and running project

If you've already download the project zip archive then you can unarchive it and skip step one.

1. Clone project from the terminal.

- `git clone https://github.com/wildpow/Mars-Rover.git`

2. From the terminal navigate the project folder `Mars-Rover`.

- `cd Mars-Rover`

3. Install dependances with either commands.

- `yarn` or `npm i`

4. Either of these command with run the project

- `yarn start` or `npm start`

## How to play

1. First input sets up the area for the rovers with X, Y coordinates. The bottom left of the area is 0,0 and input can no be negitive.

- Input example: `5 5`

2. Second input sets the starting position of the first rover and the direction the rover is facing. Input can not be less the or greater then the setup area.

- Input example: `1 2 N`

3. Next input is rover one's movement. The rover understands movement commands in a continuous string:

- `L` for turning left 90 degrees.
- `R` for turninng right 90 degrees.
- `M` for move one space.
- Input example: `LMLMLMLMM`

4. Repeat steps 2 and 3 for second rover.

5. Program will return ending position unless then movement commands moved the rover out of the set area.

---

## Mars Rover stack

- [Chalk](https://github.com/chalk/chalk) for terminal styling.
- [Inquirer](https://github.com/SBoudrias/Inquirer.js/) for interactive command line interface.

### Dev dependencies

- [Cypress](https://www.cypress.io/) testing framework.
- [Eslint](https://eslint.org/) code linting.
- [Eslint-config-airbnb-base](https://github.com/airbnb/javascript) AirBnB style guide.
- [Eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) Eslint code formatting plug-in.
- [Eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) linting rule for the Cypress testing framework.
- [Husky](https://github.com/typicode/husky) git hooks.
- [Lint-staged](https://github.com/okonet/lint-staged) runs linter on staged files.
- [Prettier](https://prettier.io/) code formatting.
- [Pretty-quick](https://github.com/azz/pretty-quick#readme) runs Prettier on staged files.

## Run tests

This project uses [Cypress](https://www.cypress.io/) for testing. Either of these commands will start the test suite.

- `yarn cypress:open` or `npm cypress:open`
