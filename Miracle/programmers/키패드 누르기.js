function solution(numbers, hand) {
  var answer = '';
  var LEFT = [1,4,7];
  var RIGHT = [3,6,9];
  var current_left = '*';
  var current_right = '#';
  var map = {
    '1' : [0, 0],
    '2' : [0, 1],
    '3' : [0, 2],
    '4' : [1, 0],
    '5' : [1, 1],
    '6' : [1, 2],
    '7' : [2, 0],
    '8' : [2, 1],
    '9' : [2, 2],
    '*' : [3, 0],
    '0' : [3, 1],
    '#' : [3, 2]
  }
  
  numbers.map((input, idx) =>{
    if(LEFT.indexOf(input) >= 0){
      // If left side
      answer += 'L';
      current_left = input
    }

    else if(RIGHT.indexOf(input) >= 0){
      // If right side
      answer += 'R';
      current_right = input
    }

    else{
      // 둘이 같다?
      let left_distance = getDistance(map[input], map[current_left])
      let right_distance = getDistance(map[input], map[current_right])
      console.log("------",idx,"------")
      console.log("input, current_left, current_right:",input, current_left, current_right)
      console.log("left_distacne, right_distance", left_distance, right_distance)
      if(left_distance < right_distance){
        answer += 'L';
        current_left = input
      }
      else if(left_distance > right_distance){
        answer += 'R';
        current_right = input;
      }
      else{
        if(hand == 'right'){
          answer += 'R';
          current_right = input
        }
        else{
          answer += 'L';
          current_left = input
        }
      }
    }
    
  })

  function getDistance(loc_a, loc_b){
    let x = loc_a[0] - loc_b[0]
    let y = loc_a[1] - loc_b[1]
    x = (x < 0) ? -x : x;
    y = (y < 0) ? -y : y;
    return x+y
  }

  return answer;
}