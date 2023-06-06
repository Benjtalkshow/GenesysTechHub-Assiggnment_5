//1. Create a function that will be able to convert figures from Fahrenheit to Celsius.
function fahrToCelsius(fahr) {
const cel = (fahr - 32) * 5/9;
return cel;
}
fahrToCelsius(20); //This will be the output: -6.666666666666667, which is the equivalent temperature in Celsius for 20°F.

//2. Create a function that will calculate the average of numbers in an array.
function average(additionNum) {
    let sum = 0;
    for (let i = 0; i < additionNum.length; i++) {
        sum += additionNum[i];
    }
    return sum / additionNum.length;
}
average([20,4,3,65,4,2]); // This will be the output 16.333333333333332.

//3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

isDivisible(2, 4,4) //The output will be false because n = 2 is not divisible by x & y

//4. Create a function that will output the first 100 prime numbers.
function printFirstNPrimes(n) {
    let primes = [2];
    let num = 3;
    while (primes.length < n) {
        let isPrime = true;
        for (let i = 0; primes[i] <= Math.sqrt(num); i++) {
            if (num % primes[i] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        num += 2;
    }
}

printFirstNPrimes(200); /*The first few prime numbers in the array will be [2, 3, 5, 7, 11, 13, 17, 19, 23, ...]
                        and the last prime number in the array will be 541. */

//5. Create a function that will return a boolean specifying if a number is a prime number.
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
isPrime(5)

//6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function getPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}
getPositiveNumbers(1, -2, 3, -4, 5) // The output will be [1, 3, 5]

//7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" 
// instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        //console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        //console.log("Fizz");
    } else if (i % 5 === 0) {
        //console.log("Buzz");
    } else {
        //console.log(i);
    }
}

//8. The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, 
//our hashtag generator will meet the following criteria; 
/* It must start with a hash symbol, #.
Ignore all spaces in the input.
All words must have their first letter capitalized.
If the final result is going to be longer than 140 characters, it should return false.
If the input or result is an empty string, it should return false. */

function generateHashtag(input) {
    if (input.trim() === "") {
        return false;
    }
    let words = input.split(" ");
    let hashtag = "#";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            hashtag += words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    if (hashtag.length > 140) {
        return false;
    }
    return hashtag;
}
generateHashtag("generating hashtag");