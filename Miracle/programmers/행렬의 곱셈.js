function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill(null).map(v=>new Array(arr2[0].length).fill(null))
  const column = answer.length;
  const row = answer[0].length;

  // console.log(answer);
  
  for(let c=0; c<column; c++){
    for(let r=0; r<row; r++){
      let value =0;
      // console.log("cr", c, r);
      for(let i=0; i<arr1[0].length; i++){
        // console.log('i is', i);
        value += arr1[c][i] * arr2[i][r];  
        // console.log(arr1[c][i], arr2[i][r], value);
      }
      // console.log(value);
      answer[c][r] = value;
    }
  }
  // console.log(answer);
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
// 43 * 34

solution(...test2);

// 1, 4     3, 3
// 3, 2  *  3, 3
// 4, 1
// (1 * 3 + 4 * 3)
// (3 * 3 + 2 * 3)
// (4 * 3 + 1 * 3)