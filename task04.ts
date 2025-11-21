// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

// const number = 15;
// if(number === 15){
//     console.log("Zero is not acceptable"); //Type Guards
// }else if (number %3 === 0 && number %5 === 0) {
//     console.log("FizzBuzz")
// } else if (number %3 === 0) {
//     console.log("Fizz")
// } else if (number %5 === 0) {
//     console.log("Buzz")
// } else {
//     console.log("Not divisible by 3 or 5")
// }

//solution
// let num = 0;
// if(num === 0){
//     console.log("Zero is not acceptable"); //Type Guards
// }else if (num %3 === 0 && num %5 === 0) {
//     console.log("FizzBuzz")
// } else if (num %3 === 0) {
//     console.log("Fizz")
// } else if (num %5 === 0) {
//     console.log("Buzz")
// } else {
//     console.log("Not divisible by 3 or 5")
// }

// Arrow Function
const FizzBuzz = (number : number) => {
    if (number %3 === 0 && number %5 === 0) {
        console.log("FizzBuzz")
    } else if (number %3 === 0) {
        console.log("Fizz")
    } else if (number %5 === 0) {
        console.log("Buzz")
    } else {
        console.log("Not divisible by 3 or 5")
    }
} ;

FizzBuzz(5)

const FizzBuzz2 = FizzBuzz
// FizzBuzz2(15);

// Example Test Cases
// FizzBuzz(15); // "FizzBuzz"
// FizzBuzz(9);  // "Fizz"
// FizzBuzz(10); // "Buzz"
// FizzBuzz(7); // "Not divisible by 3 or 5"

// Example Test Cases
console.log(FizzBuzz(15)); // "FizzBuzz"
console.log(FizzBuzz(9)); // "Fizz"
console.log(FizzBuzz(10)); // "Buzz"
console.log(FizzBuzz(7)); // "Not divisible by 3 or 5"