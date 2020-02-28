function countingValleys(n, s) {
  let seaLevel = 0
  let numberOfValleys = 0

  // ver1 > handle as a string
  // for (let i = 0; i < s.length; i++) {
  //   s[i] === 'U' ? seaLevel++ : seaLevel--

  //   seaLevel === 0 ?
  //     s[i] === 'U' ? numberOfValleys++ : numberOfValleys :
  //     numberOfValleys
  // }

  // ver2 > refactor
  for (let i = 0; i < s.length; i++) {
    s[i] === 'U' ? seaLevel++ : seaLevel--
    seaLevel === 0 && s[i] === 'U' ? numberOfValleys++ : numberOfValleys
  }

  // ver3 > create array first
  // const stepsArray = s.split('')

  // stepsArray.forEach(step => {
  //   step === 'U' ? seaLevel++ : seaLevel--
  //   seaLevel === 0 && step === 'U' ? numberOfValleys++ : numberOfValleys
  // })

  return numberOfValleys
}

const numberOfSteps = 8
const sequence = 'UDDDUDUU'
console.log(countingValleys(numberOfSteps, sequence))