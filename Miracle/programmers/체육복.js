function solution(n, lost, reserve) {
  var answer = n - lost.length;
  lost.map((v, idx) =>{
    if(reserve.indexOf(v) >= 0){
      answer ++;
      delete reserve[reserve.indexOf(v)];
      delete lost[idx]
    }
  })
  lost.map(v =>{ reserve.indexOf(v - 1) >= 0 ? (() =>{
      delete reserve[reserve.indexOf(v - 1)];
      answer ++;
    })(): reserve.indexOf(v) >= 0 ? (()=>{
      delete reserve[reserve.indexOf(v)];
      answer ++;
    })() : reserve.indexOf(v+1) >= 0?(()=>{
      delete reserve[reserve.indexOf(v + 1)]
      answer ++;
    })() : "😤";
  })
  // console.log(reserve)
  return answer;
}