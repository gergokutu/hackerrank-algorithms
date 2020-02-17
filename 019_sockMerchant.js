const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
  let match = 0;
  const increasingArray = ar.sort((a, b) => a - b)
  
  for (let i = 0; i < n; i++) {
    if (increasingArray[i] === increasingArray[i + 1]) {
      // not to count the same item twice
      i++
      match++
    }
  }
  
  return match
}

console.log(sockMerchant(n, ar))