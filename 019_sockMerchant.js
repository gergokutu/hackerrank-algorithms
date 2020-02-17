const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
  let match = 0;
  const increasingArray = ar.sort((a, b) => a - b)
  
  for (let i = 0; i < ar.length; i++) {
    if (increasingArray[i] === increasingArray[i + 1]) {
      // not to count the same item twice
      i++
      match++
    }
  }

  return match
}

console.log(sockMerchant(n, ar))

// ver2
function sockMerchant2(socksArray) {
  // create the objetc
  // key > color codes
  // value > number of that color
  // initialize the reduce with {}
  const socksByColor = socksArray.reduce((accumulator, sockColor) => {
    if (!accumulator[sockColor]) {
      accumulator[sockColor] = 0
    }
    accumulator[sockColor] = accumulator[sockColor] + 1
    return accumulator
  }, {})
  console.log('colorCode: pieces', socksByColor)

  // count the pairs
  // reduce again and just get the pairs
  // this gives the final count >
  // initialize it with 0
  // we need only the keys > colorCodes
  const totalPairs = Object.keys(socksByColor).reduce((counter, colorCode) => {
    // check the sockByColor against colorCode
    const sockCount = socksByColor[colorCode]
    const pairsCount = Math.floor(sockCount / 2)
    return counter + pairsCount
  }, 0)

  return totalPairs
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant2(socks))