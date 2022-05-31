const sub3 = async () => {
  throw new Error("dummy error");
}

const sub2 = async () => {
  await sub3();
}

const sub1 = async () => {
  const result = await sub2().catch(e => console.log('catch'));
  return result;
}

exports.sub1 = sub1;

// (async () => {
//   await sub1().catch(e => console.log('error'));
// })();