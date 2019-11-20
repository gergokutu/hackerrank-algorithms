const ar = [1,2,3,4,5,6]

function simpleArraySum(ar) {
  // with for loop
  // let sum = 0;

  // for (let i = 0; i < ar.length; i++) {
  //   sum += ar[i]
  // }
  // return sum

  // more optimized version with reduce
  const result = ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return result
}

console.log(simpleArraySum(ar))