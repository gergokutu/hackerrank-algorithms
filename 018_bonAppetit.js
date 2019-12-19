const bill = [3, 10, 2, 9]
const k = 1
const b = 12

function bonAppetit(bill, k, b) {
  // ver2 >> refactored
  const charged = (bill.reduce((accumulator, currentValue) => accumulator + currentValue) - bill[k]) / 2
  b === charged ? console.log('Bon Appetit') : console.log(b - charged)

  // ver1
  // const total = bill.reduce((accumulator, currentValue) => accumulator + currentValue)
  // const charged = (total - bill[k]) / 2

  // if (b === charged) {
  //  console.log('Bon Appetit')
  // }
  // else {
  //  console.log(b - charged)
  // }
}

bonAppetit(bill, k, b)