const innerFunc = (num) => {
  return num;
}

class TestClass {
  constructor(msg) {
    this.msg = msg;
    this.aaa = '';
  }
  
  helloWold() {
    return `${this.msg} Class`;
  }
  
  classFunc(num) {
    return innerFunc(num);
  }
  
  setAAA(aaa) {
    this.aaa = aaa;
  }
}

const getClass = (msg, aaa) => {
  const testClass = new TestClass(msg);
  testClass.setAAA(aaa);
  return testClass;
}

// exports.TestClass = TestClass;

exports.getClass = getClass;