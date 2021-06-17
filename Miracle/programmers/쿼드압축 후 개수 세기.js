function fnA(arr, lx, ly, rx, ry, t){
  let el = arr[ly][lx]
  for(let i=ly; i<ry; i++){
    for(let j=lx; j<rx; j++){
      if(el != arr[i][j]){
        return (
              fnA(arr, lx, ly, parseInt((lx+rx)/2), parseInt((ly+ry)/2),t) + 
              fnA(arr, parseInt((lx+rx)/2), ly, rx, parseInt((ly+ry)/2),t) + 
              fnA(arr, lx, parseInt((ly+ry)/2), parseInt((lx+rx)/2), ry,t) + 
              fnA(arr, parseInt((lx+rx)/2), parseInt((ly+ry)/2), rx, ry,t)
        )
      }
    }
  }

  return !el^t
}

function solution(arr) {
  var answer = [fnA(arr, 0, 0, arr.length, arr.length, 0),
                fnA(arr, 0, 0, arr.length, arr.length, 1 )];
  return answer;
}