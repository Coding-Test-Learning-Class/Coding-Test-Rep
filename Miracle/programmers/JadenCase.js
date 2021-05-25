function solution(s) {
  function convertJadenCase(string){
    let spaceFlag = true;
    let result = '';
    for(let i=0; i<string.length; i++){
      if(spaceFlag) {
        result += string[i].toUpperCase();
        spaceFlag = true;
      }
      else
        result += string[i].toLowerCase();
      spaceFlag = string[i] === ' ';
    }
    return result;
  }
  return convertJadenCase(s);
}

const test1 = ["3people unFollowed me"];

console.log(solution(test1[0]));