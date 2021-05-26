const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : 
`5
4 1 5 2 3
5
1 3 7 9 5`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

function find(list, target){
  const [max, min] = [list.length-1,  0];
  function bst(max, min){
    const mid = parseInt((max+min)/2);
    
    if(min > max) return null;
    if(list[mid] === target)
      return mid;
    if(target < list[mid]){
      return bst(mid-1, min);
    }
    if(target > list[mid]){
      return bst(max, mid+1)
    }
  }
  return bst(max, min);
}

function solution(n){
  input();
  const list = input().split(' ').map(v=>+v);
  list.sort((a,b)=>a-b);
  input();
  const targets = input().split(' ').map(v=>+v);

  targets.map(target=>{
    (find(list, target) !== null) ? console.log(1) : console.log(0);
    // list.includes(target) ? console.log(1) : console.log(0);
  })
}

solution();