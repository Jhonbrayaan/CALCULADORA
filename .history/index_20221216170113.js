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
  if (!valueA) return 'Please provide a value'
  if (!valueB) return 'Please provide another value'
  if (!operation) return 'Please provide an operation sign'

  const operations = {
    sun: operation === '+',
    sub: operation === '-',
    times operation === '*',
    divide = operation === '/'
  }

  if (operations.sun === '+') return sun(valueA, valueB)
  if (operations.sub === '-') return sub(valueA, valueB)
  if (operations.times === '*') return times(valueA, valueB)
  if (operations.divide === '/') return divide(valueA, valueB)

  return 'Please provide a valid operation sign'
}

const result = calculador(1,2,'/')
console.log(result)