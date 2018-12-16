import roverFinder from '../../src/roverFinder';

describe('isPalindrome', () => {
  it('returns true if the string is a palindrome', () => {
    expect(roverFinder('abba')).toEqual(true);
  });
});
