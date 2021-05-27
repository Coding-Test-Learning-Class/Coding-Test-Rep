class UnionFind {
  container = new Map()
  union = (x, y) => {
    x = this.find(x)
    y = this.find(y)
    this.container.set(x, y)
  }
  find = (x) => {
    if (!this.container.get(x)) return x
    const temp = this.find(this.container.get(x))
    this.container.set(x, temp)
    return temp
  }
}

function solution(k, room_number) {
  const uf = new UnionFind()
  const results = []
  room_number.forEach((want) => {
    const result = uf.find(want)
    results.push(result)
    uf.union(result, result + 1)
  })
  return results
}

solution(10, [1, 3, 4, 1, 3, 1]) //?
// 	[1,3,4,2,5,6]
