const s = 7
const t = 11
const a = 5
const b = 15
const apples = [-2, 2, 1]
const oranges = [5, -6]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0
  let orangeCount = 0
  
  apples.map(apple => {
    if (a + apple >= s && a + apple <= t) appleCount++
  })

  oranges.map(orange => {
    if (b + orange >= s && b + orange <= t) orangeCount++
  })

  console.log(`${appleCount}\n${orangeCount}`)
}

countApplesAndOranges(s, t, a, b, apples, oranges)