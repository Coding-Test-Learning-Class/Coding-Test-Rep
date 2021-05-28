function solution(n, stations, w) {
  const coverage = w * 2 + 1;
  const list = stations.map((s, idx, arr) => {
    if (idx === 0) return s - 1 - w;
    return s - arr[idx - 1] - coverage;
  });

  list.push(n - stations[stations.length - 1] - w);
  const result = list.reduce((prev, acc) => {
    if (acc < 0) return prev;
    return prev + Math.ceil(acc / coverage);
  }, 0);

  return result;
}
