const rewire = require('rewire');
const sinon = require('sinon');
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-as-promised'))

const originalLogFunction = console.log;
let output;
beforeEach(function(done) {
    this.timeout(5000);
    output = '';
    console.log = (msg) => {
      output += msg + '\n';
    };
    done();
});


describe('正常系', () => {
  
  
  const target = rewire('../target');
  describe('sub1テスト２', () => {
    const stub = sinon.stub().returns(Promise.resolve(4));
    target.__set__('sub1', stub);
    it('sub1', async () => {
      await expect(target(0, 3)).to.be.rejectedWith(Error)
    });
    it('sub2', async () => {
      await expect(target(1, 2)).to.eventually.equal(4)
    });
  })
  
  // describe('異常系', () => {
  //   const stub = sinon.stub().returns(Promise.resolve(4));
  //   target.__set__('sub1', stub);
  //   it('sub1', async () => {
  //     const ret = await target(1, 2);
  //     chai.assert.strictEqual(ret, 4);
  //     chai.assert(stub.calledWith(1, 3));
  //   });
  // })
  

  
  
});

afterEach(function() {
  console.log = originalLogFunction; // undo dummy log function
  if (this.currentTest.state === 'failed') {
    console.log(output);
  }
});


// {uid: , type:, app_name:}

