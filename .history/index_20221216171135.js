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
  const conditions = {
    userDoesNotProvideFirtsValue: !valueA,
    userDoesNotProvideSecondValue: !valueB,
    userDoesNotProvideinformOperation: !valueA,
    userDoesNotProvideFirtsValue: !valueA,
  }

  if (!valueA) return 'Please provide a value'
  if (!valueB) return 'Please provide another value'
  if (!operation) return 'Please provide an operation'
  if (operation !== 'sun' && operation !== 'sub' && operation !== 'times' && operation !== 'divide' && operation) return 'Please provide a valid operation'

  const operations = {
    sun: sun(valueA, valueB),
    sub: sub(valueA, valueB),
    times: times(valueA, valueB),
    divide: divide(valueA, valueB)
  }

  return operations[operation]
}

const result = calculador(1, 2, '')
console.log(result)
