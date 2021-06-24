// https://www.acmicpc.net/problem/4153
// 4153 - 직각삼각형

const fs = require("fs");

const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `6 8 10
25 52 60
5 12 13
0 0 0
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const results = [];

while (true) {
  const [a, b, c] = input()
    .split(" ")
    .map((str) => +str)
    .sort((a, b) => a - b);
  if (a === 0) break;

  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    results.push("right");
  } else {
    results.push("wrong");
  }
}

console.log(results.join("\n"));
