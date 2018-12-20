const boardSetupResponse = require('../../src/responses/boardSetupResponse');

describe('boardSetupResponse() ', () => {
  it('should be a function', () => {
    expect(boardSetupResponse).to.be.a('function');
  });

  // setup
  const res1 = boardSetupResponse([-1, 0]);
  const res2 = boardSetupResponse([200000, 5]);
  const res3 = boardSetupResponse(['a', 'b']);
  const res4 = boardSetupResponse(['$', 3]);
  const res5 = boardSetupResponse([5, 5]);
  const res6 = boardSetupResponse([1, 1]);

  describe(`boardSetupResponse() returns a res object with type 'error'`, () => {
    it("should with negative number' ", () => {
      expect(res1.type).to.equal('error');
    });
    it("should with numbers greater then Mar's diameter' ", () => {
      expect(res2.type).to.equal('error');
    });
    it(`should with letters`, () => {
      expect(res3.type).to.equal('error');
    });
    it(`should with special characters`, () => {
      expect(res4.type).to.equal('error');
    });
  });
  describe(`boardSetupResponse() returns res object with type 'success`, () => {
    it('should with 5,5', () => {
      expect(res5.type).to.equal('success');
    });
    it('should with 1,1', () => {
      expect(res6.type).to.equal('success');
    });
  });
});
