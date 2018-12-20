import roverFinder from '../../src/roverFinder';

describe('roverFinder()', () => {
  it('should be a function', () => {
    expect(roverFinder).to.be.a('function');
  });

  const res = roverFinder([5, 5], [1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
  const res2 = roverFinder([5, 5], [3, 3, 'E'], ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']);
  it(`should equal [1, 3, 'N']`, () => {
    expect(res).to.deep.equal([1, 3, 'N']);
  });

  it(`should equal [5, 1, 'E'`, () => {
    expect(res2).to.deep.equal([5, 1, 'E']);
  });

  it('should return false', () => {
    expect(roverFinder([0, 0], [0, 0, 'N'], ['M'])).to.equal(false);
  });
});
