class Queue{
    head = null
    tail = null
    push(x){
        if (!this.head){
            this.head = new Node(x)
            this.tail = this.head
        } else{
            this.tail.nxt = new Node(x)
            this.tail = this.tail.nxt
        }
    }
    pop(){
        if (this.head){
            let rs = this.head.val
            this.head = this.head.nxt
            return rs
        }
    }
    empty(){
        if (this.head) return false
        else return true
    }
}

class Node{
    constructor(val){
        this.val = val
        this.nxt = null
    }
}

function solution(board) {
    const dx = [-1,0,1,0], dy = [0,1,0,-1]
    var answer = 0;
    const n = board.length
    const dp = Array(n)
    for (let i=0; i<n; i++){
        dp[i] = Array(n)
        for (let j=0; j<n; j++){
            dp[i][j] = Array(2).fill(1/0)
        }
    }
    const queue = new Queue()
    queue.push([0,0,0,0])
    queue.push([0,0,1,0])
    dp[0][0][0] = 0
    dp[0][0][1] = 0
    while (!queue.empty()){
        let x,y,p,c
        [x,y,p,c] = queue.pop()
        for (let i=0; i<4; i++){
            let xi,yi,pi
            xi = x+dx[i]; yi = y+dy[i]; pi = i%2
            let road
            if (pi == p){
                road = 100
            } else road = 600;
            let cost = c + road
            if (xi>=0 && xi<n && yi>=0 && yi<n && dp[xi][yi][pi] > cost && board[xi][yi] == 0){
                dp[xi][yi][pi] = cost
                queue.push([xi,yi,pi,cost])
            }
        }
    }
    
    return Math.min.apply(null,dp[n-1][n-1]);
}