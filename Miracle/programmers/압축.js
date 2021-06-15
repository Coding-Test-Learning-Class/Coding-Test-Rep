function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}

function solution(msg) {
  var answer = [];
  var dic = genCharArray('A','Z')
  
  for(let i=0; i < msg.length; i++){
    for(let j=msg.length; j > i; j--){
      const w = msg.substring(i, j)
      const c = msg[j]
      const p = dic.indexOf(w)
      if(p >= 0){
        i = j -1
          
        answer.push(p + 1)
        if(j >= msg.length)
          return answer
        
        dic.push(w + c)
        break
      }
    }
  }
  return answer;
}