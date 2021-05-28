function solution(n, stations, w) {
  let answer = 0;

  function getDifNodesNum(stationA, stationB){
    const startNode = (stationA + w) + 1;
    const endNode = (stationB - w) - 1;
    const nodesNum = endNode - startNode + 1;

    return nodesNum;
  }
  function getNeedStation(difNodeNum){
    if(difNodeNum <= 0) return 0;
    const scope = 1 + (w * 2);
    return Math.ceil(difNodeNum/scope);
  }

  (function firstNode(){
    const firstDifNodesNum = getDifNodesNum(0-w, stations[0]);
    const lastDifNodeNum = getDifNodesNum(stations[stations.length-1], n+1 + w);

    const firstNeedStation = getNeedStation(firstDifNodesNum);
    const lastNeedStation = getNeedStation(lastDifNodeNum);

    console.log(firstNeedStation, lastNeedStation);
    answer += firstNeedStation + lastNeedStation;
  })();
  
  for(let i=0; i<stations.length - 1; i++){
    const stationA = stations[i];
    const stationB = stations[i + 1];
    const difNodesNum = getDifNodesNum(stationA, stationB);
    const needStation = getNeedStation(difNodesNum);

    answer += needStation;
  }

    return answer;
}

const test1 = [11,	[4, 11],	1];
const test2 = [16,	[9],	2];
const test3 = [13, [1,5,13], 1];

solution(...test2);