// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : 
// `10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10`
// ).split('\n');
 
// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();


// function solution(){
//   input();
//   const myCards = input().split(' ');
//   input();
//   const targetCards = input().split(' ');
//   const cards = {};

//   myCards.map(card=>{
//     cards[card] ? cards[card] ++ : cards[card] = 1;
//   })
  
//   const results = [];
//   targetCards.map(card=>{
//     results.push(cards[card] ? cards[card] : 0);
//   })

//   console.log(results.join(' '));
  
//   // console.log(myCards);
//   // console.log(targetCards); 
//   // console.log(cards);
// }

// solution();

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : 
`10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


function solution(){
  input();
  const myCards = input().split(' ');
  input();
  const targetCards = input().split(' ');

  myCards.sort((a, b)=> a- b);
  
  min = 0;
  max = myCards.length - 1;

  console.log(myCards.join(' '));
  targetCards.map(targetCard =>{
    console.log("target", targetCard);
    while(min <= max){
      const mid = ~~((min+max)/2);
      console.log("min/max", min, max);

      if(targetCard === myCards[mid]){
        console.log(mid);
        break;
        // return mid;
      }
      if(targetCard < myCards[mid]){
        max = mid - 1;
      }
      else{
        min = mid + 1;
      }
    }
  })

}

solution();