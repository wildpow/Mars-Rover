import {
  convertDirectionNum,
  convertDirectionBack,
  checkInBounds,
  updatePosition
} from '../../src/roverFinderUtils';

describe('convertDirectionNum()', () => {
  it('should be a function', () => {
    expect(convertDirectionNum).to.be.a('function');
  });
  describe('convertDirectionNum() number if correct input is given N,E,S,W', () => {
    it('should return N', () => {
      expect(convertDirectionNum('N')).to.equal(0);
    });
    it('should return E', () => {
      expect(convertDirectionNum('E')).to.equal(1);
    });
    it('should return S', () => {
      expect(convertDirectionNum('S')).to.equal(2);
    });
    it('should return W', () => {
      expect(convertDirectionNum('W')).to.equal(3);
    });
  });
  describe(`convertDirectionNum returns null if given the wrong input`, () => {
    it('should return null with number input', () => {
      expect(convertDirectionNum(1)).to.equal(null);
    });
    it('should return null with letters other than N,E,S,W', () => {
      expect(convertDirectionNum('B')).to.equal(null);
    });
    it('should return null negative number', () => {
      expect(convertDirectionNum(-1)).to.equal(null);
    });
  });
});

describe('convertDirectionBack()', () => {
  it('should be a function', () => {
    expect(convertDirectionBack).to.be.a('function');
  });
  describe(`returns N,E,S,W depending on number input`, () => {
    it('should return N if [input % 4 === 0]', () => {
      expect(convertDirectionBack(4)).to.equal('N');
    });
    it('should return E if [input % 4 === 1]', () => {
      expect(convertDirectionBack(4)).to.equal('N');
    });
    it('should return S if [input % 4 === 2]', () => {
      expect(convertDirectionBack(4)).to.equal('N');
    });
    it('should return W if [input % 4 === 3]', () => {
      expect(convertDirectionBack(4)).to.equal('N');
    });
  });
  describe('returns null if bad input', () => {
    it('should return null if string', () => {
      expect(convertDirectionBack('d')).to.equal(null);
    });
    it('should return null if negative number', () => {
      expect(convertDirectionBack(-1)).to.equal(null);
    });
  });
});

describe('checkInBounds()', () => {
  it('should be a function', () => {
    expect(checkInBounds).to.be.a('function');
  });
  it('should return true if current position is inBounds', () => {
    expect(checkInBounds(3, 3, 5, 5)).to.equal(true);
  });
  it('should return true if current position is inBounds', () => {
    expect(checkInBounds(300, 320, 500, 500)).to.equal(true);
  });
  it('should return false if current position is out of bounds', () => {
    expect(checkInBounds(2, 2, 0, 0)).to.equal(false);
  });
  it('should return false if current position is out of bounds', () => {
    expect(checkInBounds(-2, -2, 0, 0)).to.equal(false);
  });
});

describe('updatePosition()', () => {
  const answer1 = updatePosition(['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'], [1, 2, 'N']);
  const answer2 = updatePosition(['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'], [3, 3, 'E']);
  it('should be a function', () => {
    expect(updatePosition).to.be.a('function');
  });
  it('should return [1,3,N]', () => {
    expect(answer1).to.deep.equal([1, 3, 'N']);
  });
  it('should return [5,1,E]', () => {
    expect(answer2).to.deep.equal([5, 1, 'E']);
  });
});
