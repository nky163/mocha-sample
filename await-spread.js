const getObject = async () => {
  return {test: "test", test2: "test2"};
}

(async () => {
  const ret = {...await getObject()}
  const ret2 = {...await getObject()}
  if (ret === ret2) {
    console.log('eaqual')
  }
  console.log(ret);
})();