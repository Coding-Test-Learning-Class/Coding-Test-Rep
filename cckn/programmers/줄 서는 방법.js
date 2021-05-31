function solution(n, k) {
  const origin = Array(n)
    .fill(null)
    .map((_, idx) => idx + 1);
  let numOfCase = origin.reduce((a, b) => a * b);
  k--;
  const result = [];

  while (origin.length) {
    numOfCase = Math.floor(numOfCase / origin.length);
    result.push(...origin.splice(Math.floor(k / numOfCase), 1));
    k %= numOfCase;
  }

  return result;
}
