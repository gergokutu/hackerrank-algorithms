const arr = [-4, 3, -9, 0, 4, 1]

// ratio of plus, minus and zero numbers compared to the total
function plusMinus(arr) {
  const minus = []
  const plus = []
  const zero = []

  // also works with forEach
  // forEach allows the mutation of the original array
  // map creates a new array
  // map method is faster! 
  // arr.forEach(element => {
  arr.map(element => {
    if (element > 0) { minus.push(element) }
    else if (element < 0) { plus.push(element) }
    else { zero.push(element) }
  })

  console.log("Minus:", (minus.length / arr.length).toFixed(6))
  console.log("Plus:", (plus.length / arr.length).toFixed(6))
  console.log("Zero:", (zero.length / arr.length).toFixed(6))
}

plusMinus(arr)

// ver2
function plusMinus2(arr) {
  const minus = [], plus = [], zero = []
  const total = arr.length

  arr.map(element => {
    if (element > 0) minus.push(element)
    else if (element < 0) plus.push(element)
    else zero.push(element)
  })

  console.log("Minus2:", (minus.length / total).toFixed(6))
  console.log("Plus2:", (plus.length / total).toFixed(6))
  console.log("Zero:2", (zero.length / total).toFixed(6))
}

plusMinus2(arr)

// ver3
function plusMinus3(arr) {
  let minus = 0, plus = 0, zero = 0
  const total = arr.length || 0

  arr.map(element => {
    if (element > 0) minus++
    else if (element < 0) plus++
    else zero++
  })

  console.log("Minus3:", (minus / total).toFixed(6))
  console.log("Plus3:", (plus / total).toFixed(6))
  console.log("Zero3:", (zero / total).toFixed(6))
}

plusMinus3(arr)

// ver4
function plusMinus4(arr) {
  let minus = 0, plus = 0, zero = 0
  const total = arr.length

  arr.map(element => {
    if (element < 0) minus++
    else if (element > 0) plus++
    else zero++
  })

  const fractionOFMinus = (minus / total).toFixed(6)
  const fractionOFPlus = (plus / total).toFixed(6)
  const fractionOFZero = (zero / total).toFixed(6)

  return `Minus4: ${fractionOFMinus}\nPLus4: ${fractionOFPlus}\nZero4: ${fractionOFZero}`
  // return [fractionOFMinus, fractionOFPlus, fractionOFZero]
  // just returns the first...
  // return fractionOFMinus, fractionOFPlus, fractionOFZero
}

console.log(plusMinus4(arr))

// ver5
function plusMinus5(arr) {
  let minus = 0, plus = 0, zero = 0
  const total = arr.length

  arr.map(element => {
    element
    // (parenthesis) is not necessary in the next line
    ? (element < 0 ? minus++ : plus++)
    : zero++ 
  })

  console.log("Minus5:", (minus / total).toPrecision(6))
  console.log("Plus5:", (plus / total).toPrecision(6))
  console.log("Zero5:", (zero / total).toPrecision(6))
}

plusMinus5(arr)