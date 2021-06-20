function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permutationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}  

function fnB(list, oper){
  while(list.indexOf(oper) >= 0){
    let loc = list.indexOf(oper);
    let tmp;
    if(oper == '-')
      tmp = list[loc - 1] - list[loc + 1];
    if(oper == '+')
      tmp = list[loc - 1] + list[loc + 1];
    if(oper == '*')
      tmp = list[loc - 1] * list[loc + 1];
    list.splice(loc -1, 3, tmp)
  }
}

function getExpByOpers(list, opers){
  opers.map(oper =>{
    fnB(list, oper)
  })
}

function solution(expression) {
  var answer = 0;
  var exp_list = fnA(expression);
  var answer_list = [];
  var oper_list = ['*', '+', '-'];
  
  var oper_permu = permutation(oper_list, 3);
  
  oper_permu.map(v =>{
    let exp_tmp = Object.assign([], exp_list)
    getExpByOpers(exp_tmp, v)
    exp_tmp < 0 ? (exp_tmp = -exp_tmp) : (exp_tmp = exp_tmp[0])
    answer_list.push(exp_tmp)
  })
  console.log(answer_list)
  answer = answer_list.sort((a, b) => b-a)[0]
  // console.log(exp_list)
  
  // fnB(exp_list, '+')
  // fnB(exp_list, '-')
  // fnB(exp_list, '*')
  function fnA(str){
    let result = []
    let operators = str.match(/[-*+]/g)
    let digits = str.split(/[-*+]/g)

    for(let i=0; i<digits.length - 1; i++){
      result.push(+digits[i])
      result.push(operators[i])
    }
    result.push(+digits[digits.length-1])

    return result
  }
  return answer;
}