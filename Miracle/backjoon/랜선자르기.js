const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : 
`4 11
802
743
457
539`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

function getDivisionLines(lines, value){
  return lines.reduce((acc, cur)=>{
    return acc + ~~(cur/value);
  }, 0);
}

function solution(n){
  const [K, N] = input().split(' ').map(v=>+v);
  const lines = [];

  for(let i=0; i<K; i++){
    lines.push(+input());
  }

  let min = 1;
  let max = Math.pow(2,31)-1;

  while(min <= max){
    const mid = ~~((min + max)/2);
    const divisionLine = getDivisionLines(lines, mid);

    if(divisionLine >= N){
      min = mid + 1;
    }
    else{
      max = mid - 1;
    }
  }
  console.log(max);
}

solution()