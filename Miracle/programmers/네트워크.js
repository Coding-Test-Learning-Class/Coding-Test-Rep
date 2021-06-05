function solution(n, computers) {
  var visited = new Array(n).fill(false);

  function visit(q, arr){
    if(!q.length) return;
    const val = q.pop();
    visited[val] = true;

    arr[val].map((v,idx)=>{
      if(!!v && !q.includes(idx) && !visited[idx])
        q.push(idx)
    })

    return visit(q, arr);
  }

  var network = 0;
  visited.map((v,i)=>{
    if(!v){
      //방문 안했을 경우?
      network++;
      visit([i], computers);
    };
  });
  return network;
}

const test1 = [3,	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]];
const test2 = [3,	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]];
const test3 = [8, [
                  [1,1,1,0,0,0,0,0],
                  [1,1,1,0,0,0,0,0],
                  [1,1,1,0,0,0,0,0],
                  [0,0,0,1,0,0,0,0],
                  [0,0,0,0,1,1,0,0],
                  [0,0,0,0,1,1,0,0],
                  [0,0,0,0,0,0,1,1],
                  [0,0,0,0,0,0,1,1]
                ]]

console.log(solution(...test2));
// solution(...test2);