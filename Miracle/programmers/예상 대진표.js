function solution(n,a,b)
{
  (a%2 == 1) ? a ++ : null;
  (b%2 == 1) ? b ++ : null;
  if(a==b) return 1;
  var cnt = 0;
  while(!(a === b)){
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    cnt++;
  }
  return cnt;
}

const test = [8,	4,	7]
const test2 = [8,	1,	2]

console.log(solution(...test));
console.log(solution(...test2));