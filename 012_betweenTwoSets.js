const a = [3, 4]
const b = [24, 48]

function getTotalX(a, b) {
  // ver2 >> every()!!! refactored
  let solution = 0

  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (a.every(int => i % int === 0) && b.every(int => int % i === 0)) {
      solution++
    }
  }

  return solution

  // ver1 >> remember for every()!!!
  // let solution = 0

  // for (let i = a[a.length -1]; i <= b[0]; i++) {
  //   if (a.every(int => i % int === 0)) {
  //     if (b.every(int => int % i === 0)) {
  //       solution++
  //     }
  //   }
  // }

  // return solution
}


console.log(getTotalX(a, b))