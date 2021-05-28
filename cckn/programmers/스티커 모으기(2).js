function solution(sticker) {
  const n = sticker.length;
  if (n === 1) return sticker[0];

  const dp = Array(2)
    .fill(null)
    .map(() => sticker.slice());
  dp[0][1] = sticker[0];
  dp[0][n - 1] = 0;
  dp[1][0] = 0;

  for (let i = 2; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 2] + dp[0][i], dp[0][i - 1]);
    dp[1][i] = Math.max(dp[1][i - 2] + dp[1][i], dp[1][i - 1]);
  }

  return Math.max(dp[0][n - 1], dp[1][n - 1]);
}
