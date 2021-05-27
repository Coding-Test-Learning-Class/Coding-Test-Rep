function solution(s) {
  return s
    .split(' ')
    .map((str) => {
      if (str.length === 0) return str
      const first = str[0].match(/[a-z]/i) ? str[0].toUpperCase() : str[0]
      return `${first}${str.slice(1).toLowerCase()}`
    })
    .join(' ')
}

solution('3people unFollowed me') //?
// 3people Unfollowed Me

solution('for the last week') //?
// For The Last Week
