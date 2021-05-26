function solution(numbers) {
  const answer = [];

  numbers.map(n=>{
    const bin = '0' + n.toString(2);

    if(bin[bin.length-1] === '0')
      answer.push((n+1));
    else{
      const binArr = bin.split('');
      for(let i=binArr.length-1; i>=1; i--){
        const target = binArr[i-1] + binArr[i];

        // console.log(target);
        if(target === '01'){
          binArr[i] = '0';
          binArr[i-1] = '1';
          answer.push(parseInt(binArr.join(''),2));
          break;
        }
      }
    }
  })
  
  console.log(answer);
  return answer;
}

const test1 = [2,7, 5];

solution(test1);
