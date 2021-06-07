function isPalin(s){
  let length = parseInt(s.length / 2);
  for(let i=0; i<length; i++){
    if(s[i] !== s[s.length - i - 1])
      return false;
  }
  return true;
}

function solution(s)
{
  var answer = 0;
  for(let i=s.length; i>= 0; i--){
    for(let j=0; j<=s.length - i; j++){
      if(isPalin(s.substring(j, j + i))){
        return i;
      }
    }
  }
  return answer;
}