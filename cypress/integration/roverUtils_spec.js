const {
  hasOnlyLetters,
  validateCommands,
  saveBoard,
  saveRoverStart
} = require('../../src/roverUtils');

describe(`hasOnlyLetters()`, () => {
  it('should be a function', () => {
    expect(hasOnlyLetters).to.be.a('function');
  });

  it(`should return true if only letters in given array`, () => {
    expect(hasOnlyLetters(['T', 'V', 'B'])).to.equal(true);
  });
  it(`should return false if numbers are present in given array`, () => {
    expect(hasOnlyLetters([1, 2, 3])).to.equal(false);
  });
});

describe('validateCommands()', () => {
  // setup
  const res1 = validateCommands(['N', 'Z', 'C', 'B']);
  const res2 = validateCommands([1, 2, 3, 4]);
  const res3 = validateCommands(['$', '@', '!', '34']);
  const res4 = validateCommands(['M', 'L', 'R', 'M']);
  const res5 = validateCommands(['M', 'L', 'L', 'M', 'R', 1, 2, 3, 4, 5]);
  it('should be a function', () => {
    expect(validateCommands).to.be.a('function');
  });
  it('should return array empty array with no matches with letters', () => {
    expect(res1.length).to.equal(0);
  });
  it('should return array empty array with no matches with numbers', () => {
    expect(res2.length).to.equal(0);
  });
  it('should return array empty array with no matches special characters', () => {
    expect(res3.length).to.equal(0);
  });
  it('should return array all matching characters', () => {
    expect(res4.length).to.equal(4);
  });
  it('should return array 5 matches given 5 correct characters and 5 invalid ones', () => {
    expect(res5.length).to.equal(5);
  });
});

describe('saveBoard()', () => {
  it('should be a function', () => {
    expect(saveBoard).to.be.a('function');
  });
  it(`Should convert the given array ['2','3'] to an array of numbers`, () => {
    expect(saveBoard(['2', '3'])).to.deep.equal([2, 3]);
  });
  it(`Should convert the given array ['200','200'] to an array of numbers`, () => {
    expect(saveBoard(['200', '200'])).to.deep.equal([200, 200]);
  });
});

describe(`saveRoverStart()`, () => {
  it('should be a function', () => {
    expect(saveRoverStart).to.be.a('function');
  });
  it(`should return [5, 5, 'N'] when given ['5','5','N']`, () => {
    expect(saveRoverStart(['5', '5', 'N'])).to.deep.equal([5, 5, 'N']);
  });
});
