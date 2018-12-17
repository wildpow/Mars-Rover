/*
eslint no-console: [0] 
*/

const chalk = require('chalk');

const warning = chalk.bold.magenta;

module.exports = {
  // Function to display splash pages
  logo: () => {
    console.log(
      chalk.blue.bold(
        `                                                                                                            
    
███╗   ███╗ █████╗ ██████╗ ███████╗    ██████╗  ██████╗ ██╗   ██╗███████╗██████╗     ███████╗██╗███╗   ███╗██╗   ██╗██╗      █████╗ ████████╗ ██████╗ ██████╗ 
████╗ ████║██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██║   ██║██╔════╝██╔══██╗    ██╔════╝██║████╗ ████║██║   ██║██║     ██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
██╔████╔██║███████║██████╔╝███████╗    ██████╔╝██║   ██║██║   ██║█████╗  ██████╔╝    ███████╗██║██╔████╔██║██║   ██║██║     ███████║   ██║   ██║   ██║██████╔╝
██║╚██╔╝██║██╔══██║██╔══██╗╚════██║    ██╔══██╗██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗    ╚════██║██║██║╚██╔╝██║██║   ██║██║     ██╔══██║   ██║   ██║   ██║██╔══██╗
██║ ╚═╝ ██║██║  ██║██║  ██║███████║    ██║  ██║╚██████╔╝ ╚████╔╝ ███████╗██║  ██║    ███████║██║██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║   ██║   ╚██████╔╝██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝                                                                                      
`
      )
    );
  },
  // for setup before questions
  description: () => {
    console.log(
      chalk.green(
        'A squad of robotic rovers are to be landed by NASA on a plateau on Mars. \nThis plateau, which is curiously rectangular, must be navigated by the rovers so\n that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.\n'
      )
    );
  },
  // for setup before questions
  step1: () => {
    console.log(
      chalk.underline.yellow('First we need to setup the area that our rovers will be working in.')
    );
  },
  // describes user input for rover movement
  moveInstructions: () => {
    console.log(
      chalk.bold(
        `[Rover movement commands]\n L: Turn rover left 90 degrees\n R: Turn rover right 90 degrees\n M: Move one space`
      )
    );
    console.log(`\nThe Rover understands these commands in a continuous string Like: [MMRMMRMRRM]\n ${warning(
      `If the rover moves out of the set area we may loose contact with it, so be careful`
    )}\n
    `);
  },
  // Ready message
  roverReady: () => {
    console.log(
      chalk.bold.yellow(
        `${`*********Rover is ready to be deployed and awaiting commands**********`.toUpperCase()}`
      )
    );
  }
};
