const n = 6

function staircase(n) {
  let stair, hash, space

  // with while loop
  let i = 0
  while (i < n) {
    space = n - 1 - i
    hash = i + 1
    stair = ' '.repeat(space) + '#'.repeat(hash)
    console.log(stair)
    i++
  }

  // with for loop
  // for (let i = 0; i < n; i++) {
  //   space = n - 1 - i
  //   hash = i + 1
  //   stair = ' '.repeat(space) + '#'.repeat(hash)
  //   console.log(stair)
  // }
}

staircase(n)