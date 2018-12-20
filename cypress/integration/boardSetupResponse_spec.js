const boardSetupResponse = require('../../src/responses/boardSetupResponse');

describe(`boardSetupResponse()`, () => {
  it('should be a function', () => {
    expect(boardSetupResponse).to.be.a('function');
  });
  describe(`returns a res object with type error`, () => {
    const res1 = boardSetupResponse([-1, -3]);
    const res2 = boardSetupResponse(['5']);
    const res3 = boardSetupResponse(['a', 'a']);
    const res4 = boardSetupResponse(['a', 'a', '2']);
    const res5 = boardSetupResponse([20000, 2222222]);

    it(`Should with negative numbers`, () => {
      expect(res1.type).to.equal('error');
    });
    it(`Should with one input`, () => {
      expect(res2.type).to.equal('error');
    });
    it(`Should with letters`, () => {
      expect(res3.type).to.equal('error');
    });
    it(`Should with 3 inputs`, () => {
      expect(res4.type).to.equal('error');
    });
    it(`Should with numbers greater then Mar's diameter`, () => {
      expect(res5.type).to.equal('error');
    });
  });
  describe('returns a res object with type success', () => {
    const res6 = boardSetupResponse([5, 5]);
    const res7 = boardSetupResponse([200, 200]);
    it('should with correct numbers [5,5]', () => {
      expect(res6.type).to.equal('success');
    });
    it('should with correct numbers [200,200]', () => {
      expect(res7.type).to.equal('success');
    });
  });
});
