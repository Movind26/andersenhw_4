function concatStrings(string, separator = '') {
  let result = string;
  let finalSeparator = separator;

  return function temp(string, separator = '') {
    if (typeof string === 'undefined' || typeof string !== 'string' || typeof finalSeparator === null || null) {
      return result;
    } else if (finalSeparator) {
      result += `${finalSeparator}${string}`;
      return temp;
    } else if (separator.length) {
      result += `${separator}${string}`;
      finalSeparator = separator;
      return temp;
    } else {
      result += `${string}`;
      return temp;
    }
  }
}

class Calculator {
  constructor(x, y) {
    if (!x || !Number.isInteger(x) || !y || !Number.isInteger(y) || !isFinite(x) || !isFinite(y)) {
      throw new Error('Values are empty or not a number/not finite. Enter valid values');
    }
    this.x = x;
    this.y = y;
  }

  setX(valueX) {
    if (!valueX || !Number.isInteger(valueX) || !isFinite(this.x)) {
      throw new Error('Value X is empty or not a number. Enter valid X');
    }
    this.x = valueX;
  }

  setY(valueY) {
    if (!valueY || !Number.isInteger(valueY) || !isFinite(this.y)) {
      throw new Error('Value Y is empty or not a number. Enter valid Y');
    }
    this.y = valueY;
  }

  logSum(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y)) {
      throw new Error('Enter valid numbers');
    }
    return x + y;
  }

  logMul(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y)) {
      throw new Error('Enter valid numbers');
    }
    return x * y;
  }

  logSub(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y)) {
      throw new Error('Enter valid numbers');
    }
    return x - y;
  }

  logDiv(x = this.x, y = this.y) {
    if (!isFinite(x) || !isFinite(y) || !y) {
      throw new Error ('Second number is null or not finite! Enter valid Y');
    }
    return x / y;
  }
}