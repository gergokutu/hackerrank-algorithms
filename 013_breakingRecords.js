const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
  // ver2 >> only if
  let min = scores[0]
  let max = scores[0]
  let result = [0, 0]
  
  scores.map(score => {
    if (score > max) { max = score; result[0]++ }
    if (score < min) { min = score; result[1]++ }
  })

  return result

  // ver1 >> if, else if, else
  // let min = scores[0]
  // let max = scores[0]
  // let result = [0, 0]
  
  // scores.map(score => {
  //   if (score > max) {
  //     max = score
  //     result[0]++
  //   } else if (score < min) {
  //     min = score
  //     result[1]++
  //   } else {
  //     result
  //   }
  // })

  // return result
}

console.log(breakingRecords(scores))