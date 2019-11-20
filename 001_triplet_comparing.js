const a = [1, 2, 3]
const b = [3, 2, 1]

// write an algorithm what compares two arrays index by index
let alice = 0
let bob = 0
const result = []

function compareTriplets(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++
    }
    if (a[i] < b[i]) {
      bob++
    }
  }
  result.push(alice, bob)
  return result 
}

console.log('check:', compareTriplets(a, b))