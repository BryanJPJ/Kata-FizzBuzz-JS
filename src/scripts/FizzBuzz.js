export function FizzBuzz(numb) {
  for (numb; numb <= 100; numb++) {
    let result = "";
    if (numb % 3 == 0) {
      result += "Fizz";
    }
    if (numb % 5 == 0) {
      result += "Buzz";
    }
    return result || numb;
  }
}