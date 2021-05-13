function solution(s) {
  let convertCount = 0;
  let removeCount = 0;

  const convert = (s) => {
    const numOfOne = s.match(/1/g).length;
    removeCount += s.length - numOfOne;
    return numOfOne.toString(2);
  };

  for (; ; convertCount++) {
    if (s === "1") break;
    s = convert(s);
  }

  return [convertCount, removeCount];
}
