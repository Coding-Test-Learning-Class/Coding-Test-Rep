function solution(n, results) {
  const graph = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(Infinity));

  for (let i = 0; i < n; i++) {
    const idx = i + 1;
    graph[idx][idx] = 0;
  }

  results.forEach(([a, b]) => {
    graph[a][b] = 1;
    graph[b][a] = -1;
  });

  for (let k = 1; k <= n; k++)
    for (let i = 1; i <= n; i++)
      for (let j = 1; j <= n; j++)
        if (graph[i][k] == 1 && graph[k][j] == 1) {
          graph[i][j] = 1;
        } else if (graph[i][k] == -1 && graph[k][j] == -1) {
          graph[i][j] = -1;
        }

  const result = graph.filter((row) => {
    return row.every((element, idx) => {
      if (idx === 0) return true;
      return element !== Infinity;
    });
  }).length;
  return result;
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]); //?
