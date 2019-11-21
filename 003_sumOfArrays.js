const arr = [3,
  [11, 2, 4,],
  [4, 5, 6],
  [10, 8, -12]]


function diagonalDifference(arr) {
  const size = arr.shift() // because of the 3
  
  // ver1
  // let primarySum = 0;
  // let secondarySum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   primarySum += arr[i][i]
  //   secondarySum += arr[arr.length - i - 1][i]
  // }

  // const result = Math.abs(primarySum - secondarySum)
  // return result

  // ver2
  // let primarySum = 0, secondarySum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   primarySum += arr[i][i]
  //   secondarySum += arr[arr.length - i - 1][i]
  // }

  // return Math.abs(primarySum - secondarySum)

  // ver3 >> reverse()
  let sum = 0

  for (let i = 0; i <= arr.length - 1; i++) {
    // I think because of diagonal matrix...
    sum += arr[i][i] - arr[i].reverse()[i]
  }

  return Math.abs(sum)

}

console.log(diagonalDifference(arr))