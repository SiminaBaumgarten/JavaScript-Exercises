/*82. Create a function that takes an array of numbers arr and returns an inverted array.*/
function invertArray(arr) {
    return arr.map(num => (num * -1))


}
console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));




/*81. Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.*/
function halfQuarterEighth(n) {
    let result = [];
    let half = n / 2;
    quarter = n / 4;
    eighth = n / 8;
    result.push([half, quarter, eighth]);
    return result;
}
console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22))
console.log(halfQuarterEighth(25))


/*80. Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

Examples
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true*/

function checkSquareAndCube(arr) {
    let square = arr[0];
    let cube = arr[1];
    if ((square / (square / 2)) === (cube / (cube))) {
        return true;
    } else {
        return false;
    }
    /*return (Math.sqrt(arr[0]) == Math.cbrt(arr[1]))*/
}

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));


/*79. There is an easy way to assign to array values to the nth index by using rest parameter syntax.

var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2
But how could I make tail = [2, 3, 4] instead of tail = 2?*/

var [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);




/*78. Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.*/
const hasSameBread = (arr1, arr2) => arr1[0] === arr2[0] && arr2[2] === arr2[2]

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]
));
console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]
));


/*77. Given an array, rotate the values clockwise by one (the last value is sent to the first position).*/
function rotateByOne(arr) {
    let poppedOut = arr.pop();
    arr.unshift(poppedOut);
    return arr;
}
console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4]));




/*76. Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.*/
function toNumberArray(arr) {
    return arr.map(num => Number(num));
}
console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));




/*75. Create a function that takes an array and returns the types of values (data types) in a new array.*/
function arrayValuesTypes(arr) {
    return arr.map(x => typeof x);
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));



/*74. Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.*/
function parseArray(arr) {
    let newArr = [];
    numToString = arr.map(x => x.toString());
    newArr.push(numToString);
    return newArr;

    /* sau
    return arr.map(x => x.toString())*/
}
console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));



/*73. Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.*/
function arrBetween(num1, num2, arr) {
    newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if ((arr[i] > num1) && (arr[i] < num2)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));



/*72. Write a function to check if an array contains a particular number.*/
function check(arr, num) {
    return arr.includes(num);
}
console.log([1, 2, 3, 4, 5], 3);
console.log([1, 1, 2, 1, 1], 3);
console.log([5, 5, 5, 6], 5);
console.log([], 5);

/*71. The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.*/

function fiftyThirtyTwenty(ati) {
    return { "Needs": ati / 100 * 50, "Wants": ati / 100 * 30, "Savins": ati / 100 * 20 };
};

console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));
console.log(fiftyThirtyTwenty(8500));


/*70. Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.*/
function search2(arr, item) {
    return arr.indexOf(item);
}
console.log(search2([1, 2, 3, 4], 3));
console.log(search2([2, 4, 6, 8, 10], 8));
console.log(search2([1, 3, 5, 7, 9], 11));


/*69. Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.*/
function sumArray(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));


/*68. Create a function that finds the index of a given item.*/
function search(arr, item) {
    return arr.indexOf(item);
}

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));



/*67. Create a function that takes an array and a string as arguments and returns the index of the string.*/
function findIndex(arr, str) {
    return arr.indexOf(str);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));


/*66.Create a function to concatenate two integer arrays.*/
function concat(arr1, arr2) {
    let result = arr1.concat(arr2);
    return result;
}
console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


/*65. Create a function that takes an array of numbers or letters and returns a string.*/
function arrayToString(arr) {
    let result = "";
    result = arr.join('');
    return result;
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

/*64. Create a function that accepts an array and returns the last item in the array.*/
function getLastItem(arr) {
    let lastItem = arr.pop();
    return lastItem;
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));


/*63. According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.*/
function drop(arr, val) {
    let result = arr.slice(val);
    return result;
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));


/*62 You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.*/

const arr = [1, 2, 3, 4, 5, 6];
let [a, b] = arr;
console.log(a);
console.log(b);





/*61. Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!*/
function incrementItems(arr) {
    return arr.map(x => x + 1);

}
console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));




/*60. Write a function to reverse an array.*/
function reverse(arr) {
    return arr.reverse();
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));



/*59. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.*/
function getVoteCount(votes) {
    return Math.abs(votes.upvotes - votes.downvotes);
}

console.log(getVoteCount({ upvotes: 13, downvotes: 2 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

/*58. Given two arguments, return an array which contains these two arguments.*/
function makePair(a, b) {
    console.log(typeof a);
    arr.push(a, b);
    return arr;

}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));





/*57 Return the First Element in an Array*/
function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 30]));


/*56. Return the Highest and Lowest Numbers*/
function highLow(str) {
    let arr = str.split(' ');
    return [
        Math.max(...arr),
        Math.min(...arr),
    ].join(' ');

    /*console.log(typeof(arr));
    const high = Math.max(str);
    return high;
    /*return arr.sort((a,b)=> {a-b});
    console.log(arr);
    /*let low=arrSorted[0];
    console.log(low)
    let high= arrSorted[arr.length-1];
    console.log(high);
    return low;*/

}

console.log(highLow("1 2 3 4 5"));
console.log(highLow("1 2 -3 4 5"));
console.log(highLow("1 9 3 4 -5"));
console.log(highLow("13"));



/*55. A value is omnipresent if it exists in every subarray inside the main array. Create a function that determines whether an input value is omnipresent for a given array.*/
function isOmnipresent(arr, val) {
    return arr.every(subArr => subArr.includes(val));
}
console.log((isOmnipresent([
    [1, 1],
    [1, 3],
    [5, 1],
    [6, 1]
], 1)));
console.log((isOmnipresent([
    [1, 1],
    [1, 3],
    [5, 1],
    [6, 1]
], 6)));
console.log((isOmnipresent([
    [5],
    [5],
    [5],
    [6, 5]
], 5)));
console.log((isOmnipresent([
    [5],
    [5],
    [5],
    [6, 5]
], 6)));



/*54. Create a function that takes an array of strings and return an array, sorted from shortest to longest.*/
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));


/*53. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/
function addUp(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));


/*52. Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.*/
function middleEarth(arr, Sam, Frodo) {
    let indexSam = arr.indexOf("Sam");
    let indexFrodo = arr.indexOf("Frodo");
    if ((indexSam == (indexFrodo - 1)) || indexSam == (indexFrodo + 1)) {
        return true;
    } else {
        return false;
    }
}
console.log(middleEarth(["Frodo", "Sam", "Gandalf"]));
console.log(middleEarth(["Frodo", "Saruman", "Sam"]));
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]));
/*const middleEarth = (arr) => Math.abs(arr.indexOf('Frodo') - arr.indexOf('Sam')) === 1;*/
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]));
/*const middleEarth = (arr) => Math.abs(arr.indexOf('Frodo') - arr.indexOf('Sam')) === 1;*/

/*83. Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"*/

function nSidedShape(input) {
    let output = "";
    switch (input) {
        case 1:
            output = "circle";
            break;
        case 2:
            output = "semi-circle";
            break;
        case 3:
            output = "triangle";
            break;
        case 4:
            output = "square";
            break;
        case 5:
            output = "pentagon";
            break;
        case 6:
            output = "hexagon";
            break;
        case 7:
            output = "heptagon";
            break;
        case 8:
            output = "octagon";
            break;
        case 9:
            output = "nonagon";
            break;
        case 10:
            output = "decagon";
            break;
        default:
            text = "No value found";
    }
    return output;
}
console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9));

/*84. Create a function that takes an array with numbers and return an array with the elements multiplied by two.*/
function getMultipliedArr(arr) {
    return arr.map(x => x * 2);
}
console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));

/*85. Create a function that takes an array of words and transforms it into an array of each word's length.*/
function wordLengths(arr) {
    return arr.map(x => x.length);
}
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["hellodrr", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));

/*86. Create a function which returns the length of a string, WITHOUT using String.length property.*/
function length(str) {
    return str.lastIndexOf("");
}
console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));

/*87. Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).*/
function evenOrOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    if (sum % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }

}
console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));


/*88. Create a function that takes a string and returns a string with spaces in between all of the characters.*/
function spaceMeOut(str) {
    return str.split('').join(' ');
    /*const spaceMeOut = str => [...str].join(' ')*/
}
console.log(spaceMeOut("space"));
console.log(spaceMeOut("sfar out"));
console.log(spaceMeOut("elongated musk"));
/*89. Create a function that takes an array and returns the sum of all numbers in the array.*/
function getSumOfItems(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
}
console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));
/*90. Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.*/
function findDifference(a, b) {
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]));
};
console.log(findDifference([28, 16, 29], [7, 8, 17]));
console.log(findDifference([9, 22, 18], [16, 24, 10]));
console.log(findDifference([1, 9, 25], [10, 7, 9]));
console.log(findDifference([7, 6, 16], [26, 9, 26]));

/*91. Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.*/
function filterArray(arr) {
    return arr.filter(x => (Number.isInteger(x)))
}
console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));
/*92. Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

cola
fanta*/
function skipTooMuchSugarDrinks(arr) {
    return arr.filter(x => (x !== 'cola') && (x !== 'fanta'))
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));
/*93.Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...*/
function addIndexes(arr) {
    indexArr = [];
    for (let i = 0; i < arr.length; i++) {
        indexArr.push(arr[i] + i);
    }
    return indexArr;
}
console.log(addIndexes([0, 0, 0, 0, 0]));
console.log(addIndexes([1, 2, 3, 4, 5]));
console.log(addIndexes([5, 4, 3, 2, 1]));
/*94. Create a function that returns an array of all the integers between two given numbers start and end.*/
function rangeOfNum(start, end) {
    let arr = [];
    for (let i = (start + 1); i < end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(rangeOfNum(2, 4));
console.log(rangeOfNum(5, 9));
console.log(rangeOfNum(2, 11));
/*95. Write a function that returns the sum of elements greater than 5, in the given array .*/
function sumFive(arr) {
    /*let filteredArr = arr.filter(x => (x > 5));
    let sum = 0;
    for (let i = 0; i < filteredArr.length; i++) {
        sum += filteredArr[i];
    }
    return sum;*/
    return arr.reduce((a, b) => b > 5 ? a + b : a, 0)

}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));
/*96. Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.*/
function integerBoolean(n) {
    return n.split('').map(x => (x == true));

}

console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));
/* 97. Given a letter and an array of words, return whether the letter does not appear in any of the words.*/
function forbiddenLetter(x, arr) {

    let result = arr.join('').lastIndexOf(x);
    return (result >= 0 ? false : true);
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));

/*98. Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

The default character (hash #) repeating n times (if no proc is given).
The character passed in through the proc repeating n times.*/

function makeRug(m, n, s = '#') {
    let arr = [];
    for (let i = 1; i <= m; i++) {
        arr.push(s.repeat(n));
    }
    return arr;
    /*let result = arr.push((m * s) && (n * s))*/

}
console.log(makeRug(3, 5));
console.log(makeRug(3, 5, '$'));
console.log(makeRug(2, 2, 'A'));
console.log(makeRug(3, 5, '$'));
console.log(makeRug(2, 2, 'A'));

/*99. You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.*/

function birthdayCakeCandles(arr) {
    let arrSorted = arr.sort((a, b) => b - a);
    let high = arrSorted[0];
    let allHigh = arr.filter(x => x == high);
    return allHigh.length;
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));

/* 100.Create a function that takes an array. This array will contain numbers represented as strings.

Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.*/
function cleanUpArray(arr) {
    let evens = arr.map(Number).filter(x => x % 2 == 0)
    let odds = arr.map(Number).filter(x => x % 2 == 1)
    return [evens, odds];
}
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));