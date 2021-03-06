// ver1
// function pageCount(numberOfPages, pageToTurn) {
//   let turn = 0

//   if (numberOfPages / 2 >= pageToTurn) {
//     for (let i = 1; i < pageToTurn; i += 2) turn++
//   } else {
//     if (numberOfPages % 2 === 0) {
//       for (let i = numberOfPages; i > pageToTurn; i -= 2) turn++
//     } else {
//       for (let i = numberOfPages - 1; i > pageToTurn; i -= 2) turn++
//     }
//   }

//   return turn
// }

// ver2
// function pageCount(numberOfPages, pageToTurn) {
//   let turn = 0

//   if (numberOfPages / 2 >= pageToTurn) {
//     for (let i = 1; i < pageToTurn; i += 2) turn++
//   } else if (numberOfPages / 2 < pageToTurn && numberOfPages % 2 === 0) {
//     for (let i = numberOfPages; i > pageToTurn; i -= 2) turn++
//   } else {
//     for (let i = numberOfPages - 1; i > pageToTurn; i -= 2) turn++
//   }

//   return turn
// }

// ver3
// function pageCount(numberOfPages, pageToTurn) {
//   const frontFlip = Math.floor(p/2)
//   // total turns - turns from the beginning
//   const backFlip = Math.floor((n/2)-frontFlip)
  
//   const result = Math.min(frontFlip, backFlip)
//   return result
// }

// ver4
function pageCount(numberOfPages, pageToTurn) {
  const frontFlip = Math.floor(pageToTurn/2)
  const backFlip = Math.floor((numberOfPages/2)-frontFlip)
  
  return frontFlip < backFlip ? frontFlip : backFlip
}

const n = 10
const p = 9
console.log(pageCount(n, p))