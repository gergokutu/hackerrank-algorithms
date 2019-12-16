// Algorithm should solve >> How many possible ways for s[0] + s[1] + ... + s[m] = d?
// contiguous numbers counts only
const s = [3]
const d = 3
const m = 1

function birthday(s, d, m) {
  let numberOfSolutions = 0

  // handle strange cases 1
  // m > squares of chocolate
  if (m > s.length) numberOfSolutions // or return 0

  // handle strange cases 2
  // m = 1 (the month is jan...) and only 1 square of chocolate (s.length = 1)
  if (m === 1 && s.length === 1 && s[0] === d) numberOfSolutions++ // or return 1

  for (let i = 0; i < s.length -1; i++) {
    // we have to examine the sum of subarrays (only contiguos indexes!)
    // use slice()
    // subarray >> from i to (i + m)
    // not i + (m - 1) >> slice() works this way
    const subArray = s.slice(i, i + m)
    // sum of subArray
    const sum = subArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    if (sum === d) numberOfSolutions++
  }

  return numberOfSolutions
}

console.log(birthday(s, d, m))