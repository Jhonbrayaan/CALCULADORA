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
  if (operation === '+') {
   return sun(valueA, valueB)
  }
  
  else if (operation === '-') {
    return sub(valueA, valueB)

  }
  else if (operation === '*') {
    return times(valueA, valueB)

  }
  
  else  (operation === '/') {
    return divide(valueA, valueB)

  }

}

const result = calculador(1,2,'/')
console.log(result)