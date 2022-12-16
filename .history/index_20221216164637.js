function sun(valueA, valueB) {
  
}

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

const result = calculador(1,2,'/')
console.log(result)