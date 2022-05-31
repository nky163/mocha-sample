const sleep = (msec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, msec);
  });
}

sub1 = async (a, b) => {
  await sleep(500);
  return a+b;
}


module.exports =  async (a, b) => {
  const ret = await sub1(a, b);
  console.log(ret);
  if (a === 0) {
    throw new Error('error');
  }
  
  return ret;
}