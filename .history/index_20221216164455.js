function calculador(valueA, valueB, operation) {
  if (operation === '+') {
    return +valueA + +valueB
  }
  
  else if (operation === '-') {
    return +valueA - +valueB

  }
  else if (operation === '*') {
    return +valueA * +valueB

  }
  else if (operation === '/') {
    return +valueA / +valueB

  }

}

const result = calculador