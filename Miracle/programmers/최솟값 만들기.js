function quicksort(array, left = 0, right = array.length - 1){
  if(left >= right){
    return;
  }

  const mid = ~~((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quicksort(array, left, partition-1);
  quicksort(array, partition, right);

  function divide(array, left, right, pivot){
    while(left <= right){
      while(array[left] < pivot)
        left++;
      while(array[right] > pivot)
        right--;

      if(left <= right){
        [array[left], array[right]] = [array[right], array[left]];
        left ++;
        right --;
      }  
    }
    return left;
  }

  return array;
}

function solution(A,B){
  const size = A.length;
  let answer = 0;
  
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);

  for(let i=0; i< size; i++)
    answer += A[i] * B[i];
  
  return answer;
}
const test1 = [[1, 4, 2],	[5, 4, 4]];

solution(...test1);