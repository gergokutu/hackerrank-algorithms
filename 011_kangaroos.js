function kangaroo(x1, v1, x2, v2) {
  // ver3 - the recursive
  // // RECURSION!!!! Be careful with NO kangaroos on the same spot ever!!!!  
  // // BASE CASE 1: Success
  // // If the kangaroos are on the same spot, then we found a solution
  if (x1 === x2) return 'YES'

  // Not to have infinite recursion
  // BASE CASE 2: Failure
  // If the 1st kangaroo has jumped ahead of the 2nd kangaroo,
  // then they'll never land on the same spot.
  if (x1 > x2 && v1 >= v2) return 'NO'

  // BASE CASE 3: Failure
  // If Kangaroo 2 is going faster than Kangaroo 1,
  // then they'll never land on the same spot.
  if (v2 > v1 && x2 > x1) return 'NO'

  // BASE CASE 4: Failure
  // If the kangaroos have the same velocity
  // (and they're not on the same spot already)
  // then they'll never land on the same spot.
  if (v1 === v2) return 'NO'

  // RECURSIVE CASE:
  // Update x1 and x2 and call kangaroo() again.
  x1 += v1
  x2 += v2

  return kangaroo(x1, v1, x2, v2)

  // ver2 - the most elegant
  // use algebra
  // x1 + v1 * n = x2 + v2 * n (Set the expressions equal to each other.)
  // (v1 * n) - (v2 * n) = x2 - x1 (Move the n terms to the same side.)
  // n * (v1 - v2) = x2 - x1 (Factor out the n terms.)
  // n = (x2 - x1) / (v1 - v2) (Divide each side by v1 - v2.)   
  // if ((x1 < x2 && v1 < v2) || (x2 - x1) % (v1 - v2) !== 0) {
  //   return 'NO'
  // } else {
  //   return 'YES'
  // }

  // ver1 >> the simpliest
  // but what if it needs 10000 + 1 iteration???
  // let result = 'NO'

  // for (let i = 0; i < 10000 && result == 'NO'; i++) {
  //     if (x1 + v1 * i == x2 + v2 * i) {
  //         result = 'YES'
  //     }
  // }

  // return result
}

console.log(kangaroo(4, 2, 5, 1))