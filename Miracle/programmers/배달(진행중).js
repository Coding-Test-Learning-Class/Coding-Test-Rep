// function solution(N, road, K) {
//   const distances = new Array(N).fill(Infinity);
//   distances[0] = 0;
//   const paths = new Array(N)
//                 .fill(null)
//                 .map(_=> 
//                     new Array(N).fill(null)
//                   );

//   road.map(v=>{
//     const nodeA = v[0]-1;
//     const nodeB = v[1]-1;
//     const distance = v[2];
//     const isNull = !paths[nodeA][nodeB];
    
//     function setPath(){
//       paths[nodeA][nodeB] = distance;
//       paths[nodeB][nodeA] = distance;
//     }

//     if(isNull){
//       setPath();
//     }
//     else if(paths[nodeA][nodeB] > distance){
//       setPath();
//     }
//   });

//   const queue = [0];
//   const visited = new Array(N).fill(false);

//   while(queue.length > 0){
//     const currentNode = queue.shift();
//     visited[currentNode] = true;
//     const nextNodes = 
//           paths[currentNode]
//           .reduce((acc,cur,idx)=> {
//             if(!!cur){
//               acc.push({
//                 node : idx,
//                 distance : cur,
//               })
//             }
//             return acc;
//           }, []);
    
//     nextNodes.map(info=>{
//       const isVisited = visited[info.node];
//       const distance = info.distance;
//       const nextNode = info.node;

//       if(!isVisited && !queue.includes(nextNode)){
//         queue.push(nextNode);
//         distances[nextNode] = distance + (distances[currentNode] ? distances[currentNode] : 0);
//       }
//       else{
//         const targetNodeDistance = distances[nextNode];
//         if(targetNodeDistance > (distances[currentNode] + distance)){
//           distances[nextNode] = (distances[currentNode] + distance);
//         }
//       }
//     });
//   }
  
//   return distances.filter(dis=>dis<=K).length;
// }

// const test1 = [5,	[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],	3];
// const test2 = [6,	[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],	4]
// // 0,1,1/ 1,2,3/ 4,1,2/ 0,3,2/ 4,2,1/ 4,3,2
// console.log(solution(...test1));