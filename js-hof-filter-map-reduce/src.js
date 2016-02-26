module.exports = {
  compact: function(array) {
    // use filter to write this function.
      return array.filter(function(value){
            return value !== undefined && value !== null;
      });
  },

  all: function(array, condition) {
    // use `reduce` to write this method
    return array.reduce(function(pre, curr){
            return condition(curr) === condition(pre);
     });
  },

  allRecursive: function(array, condition) {
    // write a recursive version of the `all` method
    if (condition(array[0]) === false) {
      return false;
    } else if (condition(array[0]) === true){
      return true;
    } else {
      return allRecursive(array.splice(0,1));
    }

  },

  any: function(array, condition) {
    // use `reduce` to write this method
    return array.reduce(function(pre, curr){
      if (pre === true || condition(curr) === true) {
        return true;
      } else {
        return false;
      }
    },false);

  },

  anyRecursive: function(array, condition) {
    // write a recursive version of the `any` method
    if (condition(array[array.length - 1]) === true) {
      return true;
    } else if (array.length === 1){
      return false;
    } else {
      return this.anyRecursive(array.splice(0, array.length - 1), condition);
    }
  },

  partition: function(array, condition) {
    // use `reduce` to write this method
    result = [[],[]];

    array.reduce(function(pre, curr){
      if (condition(curr) === true){
        result[0].push(curr);
      } else {
        result[1].push(curr);
      }
    },1);
    return result;
  },

  map: function(array, condition) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(condition(array[i]));
    }
    return result;
  },

  reduce: function(array, condition, initialValue) {
    if (initialValue) {
      return array.reduce((condition),initialValue);
    } else {
      return array.reduce(condition);
    }

  },

  sumOfEvenAscii: function(string) {

    function isEven(n) {
      return n % 2 === 0;
    }

    // split the string into an array
    var result;
    var array = [];
    // map the array to ascii values, using charCodeAt()
    for (var i = 0; i < string.length; i++) {
      array.push(string.charCodeAt(i));
    }
    // filter the array to contain only even numbers
    array = array.filter(isEven;

    // reduce that array into an accumulated sum
    result = array.reduce(function(a,b){
      return a + b;
    });
    return result;
  },
};
