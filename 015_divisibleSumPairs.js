const n = 6
const k = 3
const ar = [1, 3, 2, 6, 1, 2]

function divisibleSumPairs(n, k, ar) {
  let counter = 0

  for (let i = 0; i < n -1; i++) {
    for (let j = 1; j < n; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) counter++
    }
  }

  return counter
}

console.log(divisibleSumPairs(n, k, ar))