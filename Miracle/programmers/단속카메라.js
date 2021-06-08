function solution(routes) {
  var answer = 1;

  routes.sort((a, b)=> a[0] - b[0])
  var tmp = routes[0][1]
  routes.map(v =>{
    console.log(v, tmp)
    if(tmp < v[0]){
      answer ++
      tmp = v[1]
    }
    if(tmp >= v[1])
      tmp = v[1]
  })
  return answer;
}