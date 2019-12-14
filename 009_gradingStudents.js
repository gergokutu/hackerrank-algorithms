const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  // ver 7 - with ternary refactored
  return grades.map(grade => grade > 37 && grade % 5 > 2 ? grade - grade % 5 + 5 : grade)

  // ver 6 - with ternary
  // return grades.map(grade => {
  //  return grade > 37 && grade % 5 > 2 ? grade - grade % 5 + 5 : grade
  // })
  
  // ver 5 - without declaring new array
  // return grades.map(grade => {
  //   if (grade > 37 && grade % 5 > 2) return grade - grade % 5 + 5
  //   else {
  //     return grade
  //   }
  // })

  // grades.map((grade) => {
  //   grade > 37 && grade % 5 > 2 ?
  //     grade = grade - grade % 5 + 5 :
  //     grade
  // })

  // ver 4 - with map and refactoring the condition
  // const roundedGrades = []
  // grades.map((grade) => {
  //   grade > 37 && grade % 5 > 2 ?
  //     roundedGrades.push(grade) :
  //     roundedGrades.push(grade - grade % 5 + 5)
  // })
  // return roundedGrades

  // ver 3 - refactoring
  // const roundedGrades = []
  // for (let i = 0; i < grades.length; i++) {
  //   grades[i] < 38 || grades[i] % 5 === 0 || !(grades[i] % 5 >= 3) ?
  //     roundedGrades.push(grades[i]) :
  //     roundedGrades.push(grades[i] - grades[i] % 5 + 5)
  // }
  // return roundedGrades

  // ver2 - refactoring
  // const roundedGrades = []
  // for (let i = 0; i < grades.length; i++) {
  //   if (grades[i] < 38) roundedGrades.push(grades[i])
  //   else {
  //     grades[i] % 5 === 0 || !(grades[i] % 5 >= 3) ?
  //       roundedGrades.push(grades[i]) :
  //       roundedGrades.push(grades[i] - grades[i] % 5 + 5) 
  //   }
  // }
  // return roundedGrades

  // ver1
  // const roundedGrades = []
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
  // return roundedGrades
}

console.log(gradingStudents(grades))