var routes = []
function fna(route, left){
  if(left.length == 0){
    let tmp = ['ICN']
    route.map(v => {tmp.push(v[1])})
    routes.push(tmp)
    return 
  }

  if(route.length > 0 &&
     route[0][0] !== 'ICN')
    return
  
  if(route.length >= 2&&
    route[route.length-2][1] !== route[route.length-1][0])
    return
  
  left.map((v, i) =>{
    fna([...route, v], left.filter((v,idx) => i!=idx))
  })
}

function solution(tickets) {
  fna([], tickets);
  return routes.sort()[0];
}