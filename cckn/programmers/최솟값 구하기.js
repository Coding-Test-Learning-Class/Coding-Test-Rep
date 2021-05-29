function solution(A, B) {
  A = A.slice().sort((a, b) => a - b);
  B = B.slice().sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}
