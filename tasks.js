function concatStrings(argument, separator = null) {
  let result = argument;
  
  function sum(argument) {
    result += argument + separator;
    return sum;
  }

  sum.toString = function() {
    return result;
  }
  
  return sum.toString();
}

class Calculator {
  constructor(x, y) {
    if (!x || !Number.isInteger(x) || !y || !Number.isInteger(y)) {
      throw new Error("Values are empty or not a number. Enter valid values");
    }
    this.x = x;
    this.y = y;
  }

  setX(valueX) {
    if (!valueX || !Number.isInteger(valueX)) {
      throw new Error("Value X is empty or not a number. Enter valid X");
    }
    this.x = valueX;
  }

  setY(valueY) {
    if (!valueY || !Number.isInteger(valueY)) {
      throw new Error("Value Y is empty or not a number. Enter valid Y");
    }
    this.y = valueY;
  }

  logSum(x = this.x, y = this.y) {
    return x + y;
  }

  logMul(x = this.x, y = this.y) {
    return x * y;
  }

  logSub(x = this.x, y = this.y) {
    return x - y;
  }

  logDiv(x = this.x, y = this.y) {
    return x / y;
  }
}

// const calculator = new Calculator(12, 3);

// calculator.setX(10);
// calculator.setY(5);

// console.log("Sum", calculator.logSum());
// console.log("Mul", calculator.logMul());
// console.log("Sub", calculator.logSub());
// console.log("Div", calculator.logDiv());

// const test = calculator.logSum;
// console.log("Test", test(3, 5));