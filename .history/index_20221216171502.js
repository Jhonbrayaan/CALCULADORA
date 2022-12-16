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
    userDoesNotProvideinformOperation: !operation,
    userInformInvalidOperation: (operation !== 'sun' && operation !== 'sub' && operation !== 'times' && operation !== 'divide')
  }

  if (conditions.userDoesNotProvideFirtsValue) return 'Please provide a value'
  if (conditions.userDoesNotProvideSecondValue) return 'Please provide another value'
  if (conditions.userDoesNotProvideinformOperation) return 'Please provide an operation'
  if  (conditionsreturn 'Please provide a valid operation'

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