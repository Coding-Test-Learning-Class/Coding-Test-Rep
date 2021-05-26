let input = "7\n\
1000 3000 4000 1000 2000 2000 7000\n\
1 2\n\
2 3\n\
4 3\n\
4 5\n\
6 2\n\
6 7".split("\n")

let N = parseInt(input.shift())
let pArr = input.shift().split(" ").map((v) => parseInt(v))
let tree = new Array(N + 1).fill().map(() => [])
let visited = new Array(N + 1).fill(false)
input.forEach((v) => {
    let [city1, city2] = v.split(" ").map((v) => parseInt(v))
    tree[city1].push(city2)
    tree[city2].push(city1)
})

let dp = new Array(N + 1).fill().map(() => new Array(2).fill(0));

visited[1] = true;
find(1);
let result = Math.max(dp[1][0], dp[1][1])
console.log(result)

function find(x) {
    for (let i = 0; i < tree[x].length; i++) {
        let child = tree[x][i]
        if (visited[child]) continue;
        visited[child] = true
        find(child)
        dp[x][0] += dp[child][1]
        dp[x][1] += Math.max(dp[child][1], dp[child][0])
    }
    dp[x][0] += pArr[x - 1]
}


