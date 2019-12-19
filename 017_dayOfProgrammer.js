const year = 2017

function dayOfProgrammer(year) {
  if (year < 1918 && year % 4 === 0) {
    return `12.09.${year}`
  }

  if (year < 1918 && year % 4 !== 0) {
    return `13.09.${year}`
  }

  if (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
    return `12.09.${year}`
  }

  if (year > 1918 && !(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
    return `13.09.${year}`
  }

  if (year === 1918) {
    return '26.09.1918'
  }
}

console.log(dayOfProgrammer(year))