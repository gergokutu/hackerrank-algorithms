const ar = [3, 2, 1, 3]

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  // ...ar >> because it's an array and you have to spread
  const max = Math.max(...ar)

  // long version
  // const result = ar.filter(highestNumber => {
  //   if (highestNumber === max) {
  //     return highestNumber
  //   }})
  // return result.length

  // long version >> right synthax
  // const result = ar.filter(highestNumber => {
  // return (highestNumber === max)
  // })
  // return result.length

  // short version
  return ar.filter(highestNumber => highestNumber === max).length
}

console.log(birthdayCakeCandles(ar))