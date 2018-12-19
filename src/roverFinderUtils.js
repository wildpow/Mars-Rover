// converts N, E, S, W to a corresponding number
const convertDirectionNum = direction => {
  switch (direction) {
    case 'N':
      return 0;
    case 'E':
      return 1;
    case 'S':
      return 2;
    case 'W':
      return 3;
    default:
      return null;
  }
};
// converts number back into letter directiom
const convertDirectionBack = direction => {
  switch (direction % 4) {
    case 0:
      return 'N';
    case 1:
      return 'E';
    case 2:
      return 'S';
    case 3:
      return 'W';
    default:
      return null;
  }
};

module.exports = { convertDirectionBack, convertDirectionNum };

console.log(convertDirectionBack('z'));
