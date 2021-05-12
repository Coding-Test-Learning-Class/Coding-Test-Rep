function solution(s) {
  var answer = [];
  var remove = 0;
  var changed = 0;

  while(s !== '1'){
    while(s.includes('0')){
      s = s.replace('0', '');
      remove++;
    }
    if(s.length > 1){
      s = s.length.toString(2);
      changed ++;
    }
  }
  
  return [changed+1, remove];
}

const test1 = ['110010101001'];
const test2 = ['01110'];
const test3 = ['1111111'];

solution(...test1);
solution(...test2);
solution(...test3);