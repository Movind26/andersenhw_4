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