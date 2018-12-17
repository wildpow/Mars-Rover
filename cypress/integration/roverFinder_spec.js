import roverFinder from '../../src/roverFinder';

describe('Is a function', () => {
  it('exists', () => {
    expect(roverFinder).to.be.a('function');
  });

  const res = roverFinder([5, 5], [1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
  it(`should equal [1, 3, 'N']`, () => {
    expect(res).to.deep.equal([1, 3, 'N']);
  });
  // it('returns final rover position', () => {
  //   expect(
  //     roverFinder([5, 5], [1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'])
  //   ).to.equal([1, 3, 'N']);
  // });
});
