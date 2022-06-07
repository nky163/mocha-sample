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
      expect(testClassObj.helloWold('')).to.be.equal('Hello World Class');
    });
    
  })
  
  describe('exportされていないクラスのメソッドをスタブ化', () => {
    const target = rewire('../class.js');
    const targetClass = target.__get__('TestClass');
    const testClassObj = new targetClass('Hello World');
    sinon.stub(testClassObj, 'helloWold').returns('STUB');
    
    it('sub1', async () => {
      expect(testClassObj.helloWold()).to.be.equal('STUB');
    });
    
  })
  
  describe('クラスの中で使われてる関数のスタブ化', () => {
    
    
    
    it('innerFuncのスタブ化', async () => {
      // これ無理な奴、、、
      const target = rewire('../class.js');
      const stub = sinon.stub().returns(2);
      target.__set__('innerFunc', stub);
      const { getClass } = require('../class.js');
      
      const obj = getClass('testmsg', 'testAAA');
      // rewireの効果なし、、！
      expect(obj.classFunc(1)).to.be.equal(1);
    });
    
    it('innerFuncのスタブ化', async () => {
      const target = rewire('../class.js');
      const testFunc = target.__get__('getClass');
      const stub = sinon.stub().returns(2);
      target.__set__('innerFunc', stub);
      
      const obj = testFunc('testmsg', 'testAAA');
      expect(obj.classFunc(1)).to.be.equal(2);
    });
    
  });
  
});

