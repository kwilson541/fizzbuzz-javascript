describe("fizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should check if a number is divisible by three", function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toEqual(true);
  });

  it("should check if a number is not divisible by three", function() {
      expect(fizzBuzz.isDivisibleByThree(4)).toEqual(false);
  });

  it("should check if a number is divisible by five", function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toEqual(true);
  });

  it("should check if a number is not divisible by five", function() {
      expect(fizzBuzz.isDivisibleByFive(6)).toEqual(false);
  });

  it("should check if a number is divisible by three and five", function() {
      expect(fizzBuzz.isDivisibleByThreeAndFive(15)).toEqual(true);
  });

  it("should check if a number is not divisible by three and five", function() {
      expect(fizzBuzz.isDivisibleByThreeAndFive(16)).toEqual(false);
  });

  it("should return Fizz when a number is divisble by three", function() {
      expect(fizzBuzz.isFizzBuzz(3)).toEqual("Fizz");
  });

  it("should return Buzz when a number is divisble by five", function() {
      expect(fizzBuzz.isFizzBuzz(5)).toEqual("Buzz");
  });

  it("should return FizzBuzz when a number is divisble by 3 and five", function() {
      expect(fizzBuzz.isFizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should return number when a number is not divisble by 3 or five", function() {
      expect(fizzBuzz.isFizzBuzz(4)).toEqual(4);
  });

  it("should print out numbers from 1 to 5", function() {
      expect(fizzBuzz.numbers(1, 5)).toEqual([1, 2, "Fizz", 4, "Buzz"])
  });
});
