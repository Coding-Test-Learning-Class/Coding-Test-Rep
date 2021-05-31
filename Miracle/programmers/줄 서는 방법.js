function old_solution(n, k) {
  const arrays = new Array(n).fill(0).map((_,idx)=>idx+1);

  function combination(fixed, origin){
    if(fixed.length >= n){
      // cnt++;
      arrays.push(fixed);
    }
    origin.map(v=> {
      if(!fixed.includes(v))
        return combination([...fixed, v], origin);
    });
  }
  combination([], array);
  return arrays[k-1];
}

function solution (n, k) {
  const answer = [];
  const arr = new Array(n).fill(1);
  for(let i = 1; i < n; i++) arr[i] = arr[i-1] + 1;
  
  let nth = k-1;
  
  while(arr.length) {
    if(nth === 0) {
      answer.push(...arr);
      break;
    }
    
    const fact = factorial(arr.length - 1);
    const index = nth / fact >> 0;
    nth = nth % fact;
    
    answer.push(arr[index]);
    arr.splice(index, 1);
  }
  
  return answer;
}

const factorial = (n) => {
  let res = 1;
  for(let i = 2; i <= n; i++) res *= i;
  return res;
}

console.log(solution(3, 5));