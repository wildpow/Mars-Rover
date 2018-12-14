/*
eslint no-console: [0] 
*/

const splashScreen = () => {
  console.log(
    `%c                                                                                                            
    
███╗   ███╗ █████╗ ██████╗ ███████╗    ██████╗  ██████╗ ██╗   ██╗███████╗██████╗     ███████╗██╗███╗   ███╗██╗   ██╗██╗      █████╗ ████████╗ ██████╗ ██████╗ 
████╗ ████║██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██║   ██║██╔════╝██╔══██╗    ██╔════╝██║████╗ ████║██║   ██║██║     ██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
██╔████╔██║███████║██████╔╝███████╗    ██████╔╝██║   ██║██║   ██║█████╗  ██████╔╝    ███████╗██║██╔████╔██║██║   ██║██║     ███████║   ██║   ██║   ██║██████╔╝
██║╚██╔╝██║██╔══██║██╔══██╗╚════██║    ██╔══██╗██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗    ╚════██║██║██║╚██╔╝██║██║   ██║██║     ██╔══██║   ██║   ██║   ██║██╔══██╗
██║ ╚═╝ ██║██║  ██║██║  ██║███████║    ██║  ██║╚██████╔╝ ╚████╔╝ ███████╗██║  ██║    ███████║██║██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║   ██║   ╚██████╔╝██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝                                                                                      
`
  );
};

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const MaxAreaX = 4222;
const MaxAreaY = 4222;
let UserX;
let UserY;
rl.setPrompt(
  "Please provide two numbers for the X and Y coordinates for the areas size (input format: ['number' 'number'] ) \n"
);
splashScreen();
console.log(
  'A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.\n'
);
console.log('First we need to setup the area that our rovers will be working in.');
rl.prompt();
rl.on('line', line => {
  const answerArr = line.trim().split(' ');
  if (answerArr.length !== 2) {
    console.log(`--[INVALID INPUT: ${line}]--\n Please provide both an x and y cordinates.`);
    return rl.prompt();
  }
  let [x, y] = answerArr;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (Number.isNaN(x)) {
    console.log(`--[INVALID INPUT: ${answerArr[0]}]--\n X needs to be a number.`);
    return rl.prompt();
  }
  if (Number.isNaN(y)) {
    console.log(`--[INVALID INPUT: ${answerArr[1]}]--\n Y needs to be a number.`);
    return rl.prompt();
  }
  if (x < 0) {
    console.log(`--[INVALID INPUT: ${x}]--\n X can not be a negitive number.`);
    return rl.prompt();
  }
  if (y < 0) {
    console.log(`--[INVALID INPUT: ${y}]--\n Y can not be a negitive number.`);
    return rl.prompt();
  }
  if (x > MaxAreaX) {
    console.log(
      `--[INVALID INPUT: ${x}]--\n X can not be bigger then Mar's diameter of ${MaxAreaX} miles.`
    );
    return rl.prompt();
  }
  if (y > MaxAreaY) {
    console.log(
      `--[INVALID INPUT: ${y}]--\n X can not be bigger then Mar's diameter of ${MaxAreaY} miles.`
    );
    return rl.prompt();
  }
  UserX = x;
  UserY = y;
  console.log(`X and Y cordinates have been set for rover area to X:${UserX} Y:${UserY}\n`);
  console.log(
    '*********First rover is ready to be deployed and awaiting commands**********'.toUpperCase()
  );
}).on('close', () => {
  console.log('Welcome back to Earth!');
  process.exit(0);
});
