// max keyboard - drive pair within budget
// -1 > no pair within budget
function getMoneySpent(keyboards, drives, budget) {
  // if too expensive > return -1
  let solution = -1

  // new array with all the possible sums
  const sums = []
  
  keyboards.map(keyboard => {
    return drives.map(drive => sums.push(keyboard + drive))
  })

  // check which is closest to the budget
  sums.map((sum) => {
    if (sum <= budget && sum > solution) solution = sum 
  })

  return solution
}

const budget = 10
const keyboards = [3, 1]
const drives = [5, 2, 8]

console.log(getMoneySpent(keyboards, drives, budget))