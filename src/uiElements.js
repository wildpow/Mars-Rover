const chalk = require('chalk');

module.exports = {
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
  description: () => {
    console.log(
      chalk.green(
        'A squad of robotic rovers are to be landed by NASA on a plateau on Mars. \nThis plateau, which is curiously rectangular, must be navigated by the rovers so\n that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.\n'
      )
    );
  },
  step1: () => {
    console.log(
      chalk.underline.yellow('First we need to setup the area that our rovers will be working in.')
    );
  }
};
