const arr = [1, 2, 3, 4, 5]

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const resultArray = []
  // to have the ascending order
  arr.sort((a, b) => a - b)

  // sum all the numbers but last >> minSum
  const minArray = arr.slice(0, arr.length-1)
  const minSum = minArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  resultArray.push(minSum)

  // sum all the numbers but first >> maxSum
  const maxArray = arr.slice(1, arr.length)
  const maxSum = maxArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  resultArray.push(maxSum)

  return resultArray

  // hackerRank ask this output format >> 10 14
  // and not [10, 14] to print
  // arr.sort((a, b) => a - b)

  // const minArray = arr.slice(0, arr.length-1)
  // const minSum = minArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  // const maxArray = arr.slice(1, arr.length)
  // const maxSum = maxArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  // format >> 10 14
  // console.log(`${minSum} ${maxSum}`)
}

console.log(miniMaxSum(arr))