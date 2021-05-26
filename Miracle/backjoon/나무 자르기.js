const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : 
`4 7
20 15 10 17`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

(function solution(){
  const [N, M] = input().split(' ').map(v=>+v);
  const trees = input().split(' ').map(v=>+v);

  let min = 1;
  let max = 2000000000;
  
  function getLeft(H){
    return trees.reduce((acc, cur)=>{
      return acc + ((cur - H) > 0 ? cur-H : 0);
    }, 0);
  }
  // console.log(getLeft(15));
  while(min <= max){
    const mid = ~~((min + max)/2);
    const left = getLeft(mid);
    // console.log(mid);
    // console.log("left, mid", left, M);
    if(left >= M)
      min = mid + 1;
    else
      max = mid - 1;
  }
  console.log(max);
})();