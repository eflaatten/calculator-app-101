addNumber = () => {
  const numberButtons = document.querySelectorAll('.numbers-container button')
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log("Button clicked. Value:", button.innerText)
      addToInput(button.innerText)
    })
  })
} 

addToInput = (value) => {
  const inputField = document.getElementById('input')
  inputField.innerText += value
  
  inputField.parentElement.scrollLeft = inputField.parentElement.scrollWidth
}

clearInput = () => {
  const resetButton = document.getElementById('reset')
  const inputField = document.getElementById('input')
  const resultField = document.getElementById('result')
  
  resetButton.addEventListener('click', () => {
    inputField.innerText = ''
  })
}

addOperator = () => {
  const operatorButtons = document.querySelectorAll('.operators-container button')
  
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log("Operator clicked. Value:", button.innerText)
      addToInput(button.innerText)
    })
  })
}

calculate = () => {
  const inputField = document.getElementById('input')

  let expression = inputField.innerText.replace(/×/g, '*').replace(/÷/g, '/')

  if(expression !== '') {
    let result

    if(expression.includes('*')) {
      result = multiply(expression)
    } else if (expression.includes('/')) {
      result = divide(expression)
    } else if (expression.includes('%')) {
      result = modulus(expression)
    } else if (expression.includes('+')) {
      result = add(expression)
    } else if (expression.includes('-')) {
      result = subtract(expression)
    }

    inputField.innerText = result
    console.log("The expression is: ", expression, " The reuslt is: ", result)
  }
}

equals = () => {
  const equalsButton = document.getElementById('equals')

  equalsButton.addEventListener('click', () => {
    calculate()
  })
}

add = (expression) => {
  const operands = expression.split('+').map(Number)
  return operands.reduce((acc, curr) => acc + curr)
}

subtract = (expression) => {
  const operands = expression.split('-').map(Number)
  return operands.reduce((acc, curr) => acc - curr)
}

multiply = (expression) => {
  const operands = expression.split('*').map(Number)
  return operands.reduce((acc, curr) => acc * curr, 1)
}

divide = (expression) => {
  const operands = expression.split('/').map(Number)
  return operands.reduce((acc, curr) => acc / curr)
}

modulus = (expression) => {
  const operands = expression.split('%').map(Number)
  return operands.reduce((acc, curr) => acc % curr)
}


document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('input')
  inputField.innerText = ''

  addNumber()
  addOperator()
  clearInput()
  equals()

})



// ----------------- OLD CODE ----------------- \\ 

// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
// let firstNum = null
// let secondNum = null
// let operation = null

// // this function takes in two argument/numbers and returns the sum of them
// const add = (numA, numB) => {
//   const sum = numA + numB
//   return sum
// }

// // this function takes in two argument/numbers and returns the difference of them
// const subtract = (numA, numB) => {
//   const difference = numA - numB
//   return difference
// }

// // These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:

// const multiply = (numA, numB) => {
//   // * to get a product then return it
//   // Open up the inspector tool in Chrome and select the Console tab to see what this functions is "logging out" to the console.
//   console.log(numA, numB)
// }

// const divide = null
// // / to get a quotient,

// const modulus = null
// // and % to get a remainder.

// // This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
// const changeOperation = (chosenOperation) => {
//   operation = chosenOperation
//   // Use your Chrome Inspector Tool > Console Tab to see the "operation" that's logged
//   console.log(operation)
// }

// // In order to show the user their results we have to access the DOM and stick in the value
// const putResultInElement = (operationResults) => {
//   // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
//   document.getElementById("result").innerHTML = "Results: " + operationResults

//   // Remember, each element has built in properties like "innerHTML" which we can change to anything we like. 
//   // Here we give it a string: "Results: " and add the value of the operation to it.
// }

// // The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
// const equals = () => {
//   switch (operation) {
//     case "addition":  putResultInElement(add(firstNum, secondNum)) 
//     break;
//     case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
//     break;
//     case "multiplication": multiply(firstNum, secondNum) 
//     break;
//     case "division": console.log(divide(firstNum, secondNum)) 
//     break;
//     case "modulus": console.log(modulus(firstNum, secondNum)) 
//     break;
//     default: "Choose an operation"
//   }
// }

