const rewire = require('rewire');
const sinon = require('sinon');
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-as-promised'))

describe('exportされていないクラスのテスト', () => {
  describe('exportされていないクラスのテスト', () => {
    const target = rewire('../class.js');
    const targetClass = target.__get__('TestClass');
    const testClassObj = new targetClass('Hello World');
    console.log(testClassObj);
    
    it('sub1', async () => {
      expect(testClassObj.helloWold()).to.be.equal('Hello World Class');
    });
    
  })
});

