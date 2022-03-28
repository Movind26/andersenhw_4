function concatStrings(string, separator = '') {
  let result = `${string}${separator}`;
  return function temp(string, separator = '') {
    if (typeof string === 'undefined' || typeof string !== 'string' || null || typeof separator !== 'string') {
      return result;
    } else {
      result += `${string}${allseparator}`;
      return temp;
    }
  }
};

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

console.log(concatStrings('first')('second')('third')());            // 'firstsecondthird'
console.log(concatStrings('first', null)('second')());               // 'firstsecond'
console.log(concatStrings('first', '123')('second')('third')());     // 'first123second123third'

console.log(concatStrings('some-value')('')('')(null));              // 'some-value'
console.log(concatStrings('some-value')(2));                         // 'some-value'
console.log(concatStrings('some-value')('333')(123n));               // 'some-val333'
