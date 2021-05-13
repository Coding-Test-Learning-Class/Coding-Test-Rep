function solution(n, a, b) {
  const getNext = (n) => Math.ceil(n / 2);
  let answer = 0;

  while (a !== b) {
    a = getNext(a);
    b = getNext(b);
    answer++;
  }
  return answer;
}
