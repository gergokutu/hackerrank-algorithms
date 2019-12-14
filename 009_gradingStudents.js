const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  const roundedGrades = []

  for (let i = 0; i < grades.length; i++) {
    grades[i] < 38 || grades[i] % 5 === 0 || !(grades[i] % 5 >= 3) ?
      roundedGrades.push(grades[i]) :
      roundedGrades.push(grades[i] - grades[i] % 5 + 5)
  }

  // ver2
  // for (let i = 0; i < grades.length; i++) {
  //   if (grades[i] < 38) roundedGrades.push(grades[i])
  //   else {
  //     grades[i] % 5 === 0 || !(grades[i] % 5 >= 3) ?
  //       roundedGrades.push(grades[i]) :
  //       roundedGrades.push(grades[i] - grades[i] % 5 + 5) 
  //   }
  // }

  // ver1
  // for (let i = 0; i < grades.length; i++) {
  //   if (grades[i] < 38) roundedGrades.push(grades[i])
  //   else {
  //     grades[i] % 5 === 0 ?
  //       roundedGrades.push(grades[i]) :
  //       grades[i] % 5 >= 3 ?
  //         roundedGrades.push(grades[i] - grades[i] % 5 + 5) :
  //         roundedGrades.push(grades[i])
  //   }
  // }

  return roundedGrades
}

console.log(gradingStudents(grades))