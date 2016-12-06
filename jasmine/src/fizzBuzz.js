function FizzBuzz() {
}

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return number % 5 === 0 && number % 3 === 0;
};

FizzBuzz.prototype.isFizzBuzz = function(number) {
  if (this.isDivisibleByThreeAndFive(number)) {
    return "FizzBuzz";
  }

  else if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }

  else if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }

  else {
    return number;
  }
};

FizzBuzz.prototype.numbers = function(start, end) {
  var output = []
  for(var i = start; i <= end; i++ ) {
    output.push(this.isFizzBuzz(i));
  }
  return output;
};
