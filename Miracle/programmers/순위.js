function solution(n, results) {
  const graph = 
        new Array(n)
        .fill()
        .map(_=> new Array(n).fill(false));
  graph.map((_,idx) => graph[idx][idx]=0);

  results.map(v=>{
    const [win, lose] = [v[0]-1, v[1]-1];
    graph[win][lose] = 1;
    graph[lose][win] = -1;
  })
  
  for(let mid=0; mid<graph.length; mid++){
    for(let a=0; a<graph.length; a++){
      for(let b=0; b<graph.length; b++){
        if(graph[a][mid] === 1&& graph[mid][b] === 1) graph[a][b] =1;
        if(graph[a][mid] === -1&& graph[mid][b] === -1) graph[a][b] =-1;
      }
    }
  }
  // results.map((_,mid)=>{
  //   results.map((_,a)=>{
  //     results.map((_,b)=>{
  //       if(graph[a][mid] === 1 && graph[mid][b] == 1) graph[a][b] = 1;
  //       if(graph[a][mid] === -1 && graph[mid][b] === -1) graph[a][b] = -1;
  //     })
  //   })
  // });

  return graph.filter(column => !column.includes(false)).length;
}
