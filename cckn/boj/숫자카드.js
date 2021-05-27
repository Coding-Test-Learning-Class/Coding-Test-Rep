// https://www.acmicpc.net/problem/10816

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

input();
const source = input().split(" ");
input();
const compare = input().split(" ");

const sourceObj = {};
source.forEach((card) => (sourceObj[card] = sourceObj[card] + 1 || 1));

console.log(compare.map((card) => sourceObj[card] || 0).join(" "));
