function solution(record) {
  var answer = [];
  const log = [];
  const users ={  }
  
  const match={
      'Enter' : '들어왔습니다.',
      'Leave' : '나갔습니다.',
  }
  
  record.map(v=>{
      const arr = v.split(' ');
      const action = arr[0];
      const uid = arr[1];
      const nickname = arr[2];
      
      if(action === 'Change' || action === 'Enter')
          users[uid] = nickname;
      if(action === 'Enter' || action === 'Leave'){
          log.push([uid,'님이 ',match[action]]);
      }
  });
  
  return log.map(v=>{
      const result = users[v[0]]+v[1]+v[2];
     // console.log(result);
      return result
  })
}