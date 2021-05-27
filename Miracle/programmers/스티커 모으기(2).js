function solution(sticker) {
  const size = sticker.length;
  const dp1 = new Array(size).fill(0);
  const dp2 = new Array(size).fill(0);

  dp1[0] = dp1[1] = sticker[0];
  dp2[0] = 0; dp2[1] = sticker[1];
  // 초기값 설정
  
  if(size === 1)
    return sticker[0];
  else if(size === 2)
    return Math.max(sticker[0], sticker[1]);
  // 예외 상활 설정. size 최소 1.

  const dp1Max = dp1.reduce((acc,_,idx)=>{
    idx >= 2 && idx !== size-1 && (()=>{
      acc = Math.max(sticker[idx] + dp1[idx-2], dp1[idx-1]);
      dp1[idx] = acc;
      return acc;
    })();
    return acc;
  }, 0);

  const dp2Max = dp2.reduce((acc,_,idx)=>{
    idx >= 2 && (()=>{
      acc = Math.max(sticker[idx] + dp2[idx-2], dp2[idx-1]);
      dp2[idx] = acc;
      return acc;
    })();
    return acc;
  }, 0);
  // 최대값 도출

  return Math.max(dp1Max, dp2Max);
}

const test1 = [14, 6, 5, 11, 3, 9, 2, 10];
const test2 = [1,3,2,5,4];
const test3 = [1,1,99,1,1, 99];

console.log(solution(test3));