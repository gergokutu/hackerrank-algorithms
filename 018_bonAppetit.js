const bill = [3, 10, 2, 9]
const k = 1
const b = 12

function bonAppetit(bill, k, b) {
  const total = bill.reduce((accumulator, currentValue) => accumulator + currentValue)
  const charged = (total - bill[k]) / 2

  if (b === charged) {
   console.log('Bon Appetit')
  }
  else {
   console.log(b - charged)
  }
}

bonAppetit(bill, k, b)