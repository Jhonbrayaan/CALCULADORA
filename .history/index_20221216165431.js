function sun(valueA, valueB) {
  return +valueA + +valueB
}

function sub(valueA, valueB) {
  return +valueA - +valueB
}

function times(valueA, valueB) {
  return +valueA * +valueB
}

function divide(valueA, valueB) {
  return +valueA / +valueB
}

function calculador(valueA, valueB, operation) {
  if (i)

  if (operation === '+') return sun(valueA, valueB)
  if (operation === '-') return sub(valueA, valueB)
  if (operation === '*') return times(valueA, valueB)
  if (operation === '/') return divide(valueA, valueB)
  return 'Please inform a valid operation'
}

const result = calculador(1,2,'/')
console.log(result)