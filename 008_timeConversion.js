const s = "07:05:45PM" // expected output: 19:05:45
// get rid of am/pm
// AM >> same
// PM >> +12

function timeConversion(s) {
  const arr = s.slice(0, 8).split(':')

  // ver1
  // if (s.indexOf("PM") > -1) {
  //   if (arr[0] === "12") { arr[0] = 12} 
  //   else { arr[0] = Number(arr[0]) + 12 } // Number >> convert variables to number
  // } 
  // else {
  //   if (arr[0] === "12") { arr[0] = 00 } // hackerrank >> compilation error, use "00"
  // }

  // ver2 >> with ternary operator
  // arr[0] = s.indexOf("PM") > -1
  //   ? arr[0] === "12" ? arr[0] = 12 : arr[0] = Number(arr[0]) + 12
  //   : arr[0] === "12" ? arr[0] = 00 : arr[0]
  
  // ver3 >> refactor ver2
  arr[0] = s.indexOf("PM") > -1
    ? arr[0] === "12" ? 12 : Number(arr[0]) + 12
    : arr[0] === "12" ? 00 : arr[0]

  return arr.join(':')
}

console.log(timeConversion(s))