var a = [5,2,3,4,5];

console.log( a.reduce((acc, cur)=>{
  return acc + cur;
}, 0));
