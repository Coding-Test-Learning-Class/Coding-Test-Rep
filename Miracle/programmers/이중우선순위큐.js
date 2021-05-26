function solution(operations) {
  var answer = [];
  function Queue(){
    this.q = [];
    this.insert = function(num){
      this.q.push(num);
    };
    this.deleteElement = function(idx){
      this.q.splice(idx, 1);
    }
    this.deleteMax = function(){
      if(this.q.length > 0){
        const MAX = Math.max(...this.q);
        const INDEX = this.q.indexOf(MAX);
        this.deleteElement(INDEX);
      }
    };
    this.deleteMin = function(){
      if(this.q.length > 0){
        const MAX = Math.min(...this.q);
        const INDEX = this.q.indexOf(MAX);
        this.deleteElement(INDEX);
      }
    }
    this.getQ = function(){
      return this.q;
    }
    this.getMinMax = function(){
      if(this.q.length < 1) return [0, 0];
      return [Math.max(...this.q), Math.min(...this.q)];
    }
  }
  const q = new Queue();
  operations.map(oper => {
    const [command, num] = oper.split(' ');
    if(command === 'I'){
      q.insert(+num);
    }
    if(command === 'D' && num === '1'){
      q.deleteMax();
    }
    if(command === 'D' && num === '-1'){
      q.deleteMin();
    }
  })
  return q.getMinMax();
}


const test1 = ["I 16","D 1"];
const test2 = ["I 7","I 5","I -5","D -1"];

const test3 = ["I 6","I 7","I 4","I 3","I -5","D -1", "D 1","D 1"];

solution(test3);
// solution(test2);