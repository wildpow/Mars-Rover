import { convertDirectionNum, convertDirectionBack } from '../../src/roverFinderUtils';

describe('convertDirectionNum()', () => {
  it('should be a function', () => {
    expect(convertDirectionNum).to.be.a('function');
  });
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
  it('should return null with number input', () => {
    expect(convertDirectionNum(1)).to.equal(null);
  });
  it('should return null with letters other than N,E,S,W', () => {
    expect(convertDirectionNum('B')).to.equal(null);
  });
  it('should return null NEGITIVE NUMBER', () => {
    expect(convertDirectionNum(-1)).to.equal(null);
  });
});

describe('convertDirectionBack()', () => {
  it('should be a function', () => {
    expect(convertDirectionBack).to.be.a('function');
  });
  it('should ruturn N if [input % 4 === 0]', () => {
    expect(convertDirectionBack(4)).to.equal('N');
  });
  it('should ruturn E if [input % 4 === 1]', () => {
    expect(convertDirectionBack(4)).to.equal('N');
  });
  it('should ruturn S if [input % 4 === 2]', () => {
    expect(convertDirectionBack(4)).to.equal('N');
  });
  it('should ruturn W if [input % 4 === 3]', () => {
    expect(convertDirectionBack(4)).to.equal('N');
  });
  it('should ruturn null if string', () => {
    expect(convertDirectionBack('s')).to.equal(null);
  });
  it('should ruturn null if negitive number', () => {
    expect(convertDirectionBack(-1)).to.equal(null);
  });
});
