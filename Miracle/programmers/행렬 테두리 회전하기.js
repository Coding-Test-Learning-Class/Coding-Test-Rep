function rotate(x1, y1, x2, y2){
    
}

function solution(rows, columns, queries) {
    const ddd = new Array(columns)
    			.fill(0)
    			.map(v=> new Array(rows).fill(0));
    
    
    // console.log(matrix[4])
    // console.log(map);
    
    let cnt = 1;
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            ddd[i][j] = cnt;
            cnt++;
            // console.log(ddd[i][j]);
        }
    }
    console.log(ddd)
}

solution(6,	6,	[[2,2,5,4],[3,3,6,6],[5,1,6,3]]);