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
function pageCount(numberOfPages, pageToTurn) {
  let turn = 0

  if (numberOfPages / 2 >= pageToTurn) {
    for (let i = 1; i < pageToTurn; i += 2) turn++
  } else if (numberOfPages / 2 < pageToTurn && numberOfPages % 2 === 0) {
    for (let i = numberOfPages; i > pageToTurn; i -= 2) turn++
  } else {
    for (let i = numberOfPages - 1; i > pageToTurn; i -= 2) turn++
  }

  return turn
}


const n = 11
const p = 10
console.log(pageCount(n, p))