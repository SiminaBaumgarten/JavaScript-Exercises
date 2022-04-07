/*101.Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.*/
function findFactors(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i)
        }

    }
    return arr;
}
console.log(findFactors(9));
console.log(findFactors(12));
console.log(findFactors(20));
console.log(findFactors(0));

/*102. Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.*/
function sumMinimums(arr) {
    return arr.reduce((sum, x) => sum + Math.min(...x), 0);
}
console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]));

/*103. Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.*/
function largestNumbers(n, arr) {
    return arr.sort((a, b) => a - b).slice(arr.length - n);
}
console.log(largestNumbers(2, [4, 3, 2, 1]));
console.log(largestNumbers(1, [7, 19, 4, 2]));
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));
console.log(largestNumbers(0, [1, 3, 4, 2]));

/*104. In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

First element of the sequence first
Constant difference between the elements diff
Total numbers in the sequence n
Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.*/
function arithmeticProgression(first, diff, n) {
    let arr = [first];
    for (let i = 0; i < n - 1; i++) {
        arr.push(arr[i] + diff);
    }
    return arr.join(', ');


}
console.log(arithmeticProgression(1, 2, 5));
console.log(arithmeticProgression(1, 0, 5));
console.log(arithmeticProgression(1, -3, 10));


/*105. Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.*/

function fizzBuzz(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }

    }
    return arr;
}
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));

/*106. Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
The output should always be a string even if it is not a multiple of 3 or 5.*/
function FizzBuzz(num) {
    let output = "";
    /*if (num % 3 === 0 && num % 5 === 0) {
        output = "FizzBuzz";
    } else if (num % 3 === 0) {
        output = "Fizz";
    } else if (num % 5 === 0) {
        output = "Buzz";
    } else {
        output = num.toString();
    }
    console.log(typeof output);
    return output; */

    return (num % 3 === 0 && num % 5 === 0) ? output = "FizzBuzz" : (num % 3 === 0) ? output = "Fizz" : (num % 5 === 0) ? output = "Buzz" : output = num.toString();;
}
console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));
console.log(FizzBuzz(4));


/*107. Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100",*/
function swap(a, b) {
    let c = b;
    b = a
    a = c
    return [a, b]
}
console.log(swap(100, 200));
console.log(swap(44, 33));
console.log(swap(21, 12));


/*108. You can assign variables from arrays like this:

arr = [1, 2, 3, 4, 5, 6, 7, 8]
first = arr[0]
second = arr[1]
third = arr[2]
other = arr.slice(3)

console.log(first) ➞ outputs 1
console.log(second) ➞ outputs 2
console.log(third) ➞ outputs 3
console.log(other) ➞ outputs [4, 5, 6, 7, 8]
However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).

Examples
first ➞ 1

second ➞ 2

third ➞ 3

other ➞ [4, 5, 6, 7, 8]
Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.*/
writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8];

let [first, second, third, ...other] = writeyourcodehere;
console.log(first, second, third, other)


/* 109. Create a function that takes an array of numbers arr and returns an inverted array.*/
function invertArray(arr) {
    let invertedArr = arr.map(element =>
        element * -1
    );
    return invertedArr;

}
console.log(invertArray([1, 2, 3, 4, 5]))
console.log(invertArray([1, -2, 3, -4, 5]))
console.log(invertArray([]))


/*110. Mubashir needs your help to find next integral perfect square after the one passed as a parameter.

Create a function which takes a given number n and returns next integral perfect square number. Return null if the given number is not a perfect square.*/
function nextSquare(n) {
    const root = Math.sqrt(n);
    console.log(root);
    return Number.isInteger(root) ? (root + 1) ** 2 : null;
}

console.log(nextSquare(121));
console.log(nextSquare(625));
console.log(nextSquare(114));