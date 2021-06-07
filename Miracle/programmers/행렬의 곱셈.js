function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill(null).map(v=>new Array(arr2[0].length).fill(null))
  const column = answer.length;
  const row = answer[0].length;

  for(let c=0; c<column; c++){
    for(let r=0; r<row; r++){
      let value =0;
      for(let i=0; i<arr1[0].length; i++){
        value += arr1[c][i] * arr2[i][r];  
      }
      answer[c][r] = value;
    }
  }
  return answer;
}

const test1 = [[[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]]];
const test2 = [[[2, 3, 2], [4, 2, 4], [3, 1, 4]],	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]]
const test3 = [[
  [2,3,5],
  [4,5,1],
  [6,7,3],
  [9,2,3]],

  [[8,2,3,4,9],
  [4,1,5,6,2],
  [9,2,3,2,4]]
]

solution(...test2);