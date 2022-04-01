/*51. Create a function that applies a discount d to every number in the array.*/
function getDiscounts(arr, d){
	let discounts = d.slice(0, d.length-1);
	console.log(typeof(discounts));
	let nrDisc = Number(discounts);
	console.log(typeof(nrDisc));
	console.log(nrDisc);
	let result = arr.map((num) => num / 100 * nrDisc);
	

	return result;
}
console.log(getDiscounts([2, 4, 6, 11], "50%"));
console.log(getDiscounts([10, 20, 40, 80], "75%"));
console.log(getDiscounts([100], "45%"));


/*50. Create a function to multiply all of the values in an array by the amount of values in the given array.*/
function multiplyByLength(arr){
	const newArr = arr.map((num) => num * arr.length);
	return newArr;
}
console.log(multiplyByLength([2, 3, 1, 0]));
console.log(multiplyByLength([4, 1, 1]));
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));
console.log(multiplyByLength([0]));


/*49. Write a function that takes a year and returns its corresponding century.*/

function centuryFromYear(year){
	return Math.ceil(year / 100);
}
console.log(centuryFromYear(2005));
console.log(centuryFromYear(1950));
console.log(centuryFromYear(1900));



/*48. Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.*/
function largestNumbers(n, arr){
	const arrSorted = arr.sort((a, b)=> a-b);
	return arrSorted.slice(arrSorted.length - n);
}

console.log(largestNumbers(2, [4, 3, 2, 1]));
console.log(largestNumbers(1, [7, 19, 4, 2]));
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));
console.log(largestNumbers(0, [1, 3, 4, 2]));



/*47.The problem is not adding. The problem is that the numbers are not in order. Create a function that organizes the numbers and adds the numbers in the range between X and Y.*/
function justAnotherSumProblem(x, y){
	let min = Math.min(x, y);
	let max = Math.max(x, y);
	let sum=0;
	console.log(typeof(sum));
	for(i=min; i<= max; i++){
		sum += i;
	}
	return sum;
}
console.log(justAnotherSumProblem(-10, 1));
console.log(justAnotherSumProblem(-20, 5));
console.log(justAnotherSumProblem(90, 45));



/*46. Create a function that takes two arguments: a father's current age fAge and his son's current age sAge. Сalculate how many years ago the father was twice as old as his son, or in how many years he will be twice as old.*/
function ageDifference(fAge, sAge){
	return Math.abs(fAge-sAge*2);
}

console.log(ageDifference(36, 7)); /* 22, 5, 0)*/
console.log(ageDifference(55, 30));
console.log(ageDifference(42, 21));



/*45Create a function that takes a positive integer n, and returns the sum of all the cubed values from 1 to n.*/
function sumCubes(n){
	let sum = 0;
	for (let i = 1; i <= n; i++){
		sum += (i**3);
	}
	return sum;
}
console.log(sumCubes(3));
console.log(sumCubes(7));
console.log(sumCubes(8));
console.log(sumCubes(9));


/*44. Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.*/
function nTablesPlusOne(n){
	let newN = [];
	for(let i = 1; i <= 10; i++){
		newN.push((n * i)+1);	
	}
	console.log(typeof(newN));
	const result = newN.join(", ");
	console.log(typeof(result));
	return result;
}

console.log(nTablesPlusOne(7));
console.log(nTablesPlusOne(1));
console.log(nTablesPlusOne(3));




/*43. You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.*/
function programmers(a, b, c){
	let min;
	let max;
	let middle;
	if((a >= b) && (a >= c)) {
		max = a;
		if(b>=c){
			middle = b;
			min=c;
		} else if(b < c) {
			middle = c;
			min = b;
		}
	} else if ((b > a) && (b >= c)) {
		max = b;
		if(a => c){
			middle = a;
			min = c;
			
		} else if (a<c){
			middle = c;
			min = a;
		}
	} else if((c > a) && (c > b)) {
		max = c;
		if(a >= b){
			middle = a;
			min = b;
		}else if (a < b){
			middle = b;
			min = a;
		}
	}
	return max-min;
}
console.log(programmers(147, 33, 526));
console.log(programmers(33, 72, 74));
console.log(programmers(1, 5, 9));



function programmers1(a, b, c){
	let minHours=(Math.min(a, b, c));
	let maxHours=(Math.max(a, b, c));
	
	let diff = maxHours-minHours;
	return diff;
}
 
 
console.log(programmers1(147, 33, 526));
console.log(programmers1(33, 72, 74));
console.log(programmers1(1, 5, 9));


/*42.For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.*/
function totalCups(n){
	return n + Math.floor(n/6);
}
console.log(totalCups(6));
console.log(totalCups(12));
console.log(totalCups(213));


/*41. Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).*/
function evenOrOdd(arr){
	let sum = 0;
	for (let i=0; i < arr.length; i++){
		sum += arr[i];
	}
	
	if (sum % 2 == 0){
		return "even";
	} else {
		return "odd";
	}
}
console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));



/*40. Create a function that counts how many D's are in a sentence.*/
function countDs(prop){
	let numD = prop.match(/d/gi);
	return numD.length;
}
console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));

/*39. Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.*/
function stutter(word){
	const letters = word.substr(0, 2);
	const newWord =letters + "... " + letters + "... " + word + "?";
	return newWord;
}
console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));





/*38.A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.*/
function carsNeeded(n){
	return Math.ceil(n / 5);
}
console.log(carsNeeded(5));
console.log(carsNeeded(11));
console.log(carsNeeded(0));


/*37.Create a function that takes an array and returns the types of values (data types) in a new array.*/
function arrayValuesTypes(arr){
	return arr.map(e=> typeof e);
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));


/*36. Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape. Area of a triangle is 0.5 * b * h
Area of a parallelogram is b * h
Assume triangle and parallelogram are the only inputs for shape.*/
function areaShape(base, height, shape) {
	return shape === 'triangle' ? 0.5 * base * height : base * height;
}





/* 35.Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

The person is at least 15 years old.
They have parental supervision.
The function accepts two parameters, age and isSupervised. Return a boolean.*/

function acceptIntoMovie(age, isSupervised){
	if ((age >= 15) || isSupervised){
		return true;
	} else {
		return false;
	}
}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));


/*34. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.*/
function makesTen(a, b){
	if ((a === 10) || (b === 10) || ((a + b) ===10)){
		return true;
	} else {
		return false;
	}
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(9, 1));


/*33. Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.*/
function frames (a, b){
	let numFrames = 60 * a *b;
	return numFrames;
}
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));


/*32.In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/
function animals(chickens, cows, pigs){
	let legs = chickens * 2 + cows * 4 + pigs *4;
	return legs;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));

/* 31.Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.*/
function nextEdge(side1, side2){
	let maxThirdEdge = (side1 + side2) -1;
	return maxThirdEdge;
}
console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));

/* 30.Create a function that takes the age in years and returns the age in days.*/
function calcAge(a) {
	let days = a * 365;
	return days;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));


/*29. Return Negative
Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.*/
function returnNegative(n) {
	
}

console.log(returnNegative(4));

console.log(returnNegative(15));

console.log(returnNegative(-4));

console.log(returnNegative(0));



/*28. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/
function test50(x, y){
	return ((x == 50 || y == 50) || (x + y == 50));
}



/*27. Upvotes vs Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.*/
function getVoteCount({ upvotes, downvotes }){
	
	return downvotes-upvotes;
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

/*CORECT SOLUTION:*/
function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}




/*26. Century Crisis
Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

You must calculate the number of people there will be in three decades from now.

The variable population is the world population now.
Assume that every month, someone gives birth to more people n.
Return the number of people there will be when the spaceship is complete.*/
function futurePeople(p,n){
	return (n*30*12) + p;
}
console.log(futurePeople(256, 2));
console.log(futurePeople(3248, 6));
console.log(futurePeople(5240, 3));




/*25. Evaluate an Equation
Create a function that evaluates an equation.*/
function eq(evaluate){
	return eval(evaluate)
}
console.log(eq("1+2"));
console.log(eq("6/(9-7)"));
console.log(eq("3+2-4"));



/*24. Return Negative
Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.*/
function returnNegative(x) {
	return -x;
}
console.log(returnNegative(4));
console.log(returnNegative(15));
console.log(returnNegative(-4));
console.log(returnNegative(0));

/* Correct solution:
let returnNegative = n => n > 0 ? n * -1 : n;
(in rezolvarea mea o si numerele negative erau transformate si ele (0 devenea -0, iar numerele negative deveneau pozitive);





/* 23. A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

Write a function that determines if the year is a leap year or not.*/
function leapYear(year) {
	if(year % 400 == 0){
		return true;
	}else if(year % 4 == 0) {
		return true;
	}else{
		return false;
	}
}
console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(1968));

function leapYear2(year) {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}
console.log(leapYear2(2020));
console.log(leapYear2(2021));
console.log(leapYear2(1968));




/*22. Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".*/
function concatName(first, last){
	return last + ', ' + first;
}
console.log(concatName("First", "Last"));
console.log(concatName("Simina", "Baumgarten"));
console.log(concatName("Ella", "Baumgarten"));




/*21. Area of a Rectangle
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.*/
function area(a, b){
	if(a <= 0 || b <= 0){
		return -1;
	}else{
	return a * b;
	}
}
console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));



/*20. Return a String as an Integer
Create a function that takes a string and returns it as an integer.*/
function stringInt(x){
	return parseInt(x);
}
console.log(stringInt("6"));
console.log(stringInt("1000"));
console.log(stringInt("12"));



/*19. Divides Evenly
Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.*/
function dividesEvenly(a, b){
	return a % b == 0;
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));



/*18. Recursion: Length of a String
Write a function that returns the length of a string. Make your function recursive.*/
function length(str){
	return str.length;
}
console.log(length("apple"));
console.log(length("make"));




/*17. Multiple of 100
Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.*/
function divisible(x){
	return x%100===0;
}
console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));




/*16. Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.*/
function divisibleByFive(num){
	if(num%5==0){
		return true;
	}else{
		return false;
	}
}
console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));

function divisibleByFive2(n) {
return n%5===0;
}



/*15. Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.*/
function isEmpty(str){
	if(str.length == 0){
		return true;
	}else{
		return false;
	}
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));

function isEmpty2(str){
		return str.length == 0;
}
console.log(isEmpty2(""));
console.log(isEmpty2(" "));
console.log(isEmpty2("a"));



/*14. Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.*/
function comp(str1, str2) {
	if(str1.length === str2.length) {
		return true;
	}else{
		return false;
	}
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));

function comp2(str1, str2) {
	return str1.length === str2.length
}
console.log(comp2("AB", "CD"));
console.log(comp2("ABC", "DE"));
console.log(comp2("hello", "edabit"));



/*13. Given two arguments, return an array which contains these two arguments.*/
function makePair(a, b){
	return [a, b];
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair('1', '2'));



/*12. Create a function that will handle simple math expressions. The input is an expression in the form of a string.*/
function calculator(str) {
	return eval(str);
}
console.log(calculator("2+2"));
console.log(calculator(2+2));


/*11. Create a function that returns the given argument, but by using an arrow function.*/
arrowFunc=(message)=>message;
console.log(arrowFunc('Hello World'));
console.log(arrowFunc(true));
console.log(arrowFunc('3'));




/*10. Create a function that takes a boolean variable flag and returns it as a string.*/
function boolToString(blabla) {
	return blabla.toString();
}
console.log(boolToString(true));
console.log(boolToString(false));


/*9. In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
*/

function checkEquality(a, b){
	return a === b ? true : false;
}
console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1,  1));



/*8. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.*/
function makesTen(a, b){
	if(a === 10 || b === 10){
		return true;
	}else if(a + b === 10){
		return true;
	}else{
		return false
	}
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(9, 1));

function makesTen2(a,b){
	return a + b === 10 || a === 10 || b === 10;
}
console.log(makesTen2(9, 10));
console.log(makesTen2(9, 9));
console.log(makesTen2(9, 1));



/*7. Fix the code in the Code tab so the function returns true if and only if x is equal to 7.*/
function isSeven(x) {
	return x=="7" ? true:false;
}
console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));


/* 6. Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.*/
function convert(hours, minutes) {
	let result = (hours * 3600) + (minutes * 60);
	return result;
}
console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));



/* 5. Create a function that returns true when num1 is equal to num2; otherwise return false*/
function isSameNum(num1, num2) {
	if(num1===num2){
		return true;
	}else{
		return false;
	}
}
console.log(isSameNum(4, 7));
console.log(isSameNum(4, 4));
console.log(isSameNum(4, '4'));


/* 4. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/
function lessThan100(a, b) {
	let sum = a + b;
	if(sum < 100){
		return true;
	} else {
		return false;
	}
}
console.log(lessThan100(77, 88));
console.log(lessThan100(7, 8));

function lessThan100TernaryOperator(a, b){
	let sum = a + b;
	return (sum < 100 ? true : false)
}
console.log(lessThan100TernaryOperator(56, 65));
console.log(lessThan100TernaryOperator(5, 6));


/* 3. Make a function using the && operator.*/
function and(age, drivingLicences){
	if(age >= 18 && drivingLicences == true){
		return "can drive";
	}else{
		return "can't drive";
	}
}
console.log(and(20, true));
console.log(and(17, true));
console.log(and(20, false));
console.log(and(17, false));



/*2. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
*/

function animals(chickens, cows, pigs) {
	let totalNumberOfLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
	return totalNumberOfLegs;
}
console.log(animals(2, 3, 3));



/* 1. Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
*/
function lessThanOrEqualToZero(num){
	if(num <= 0){
		return true;
	}else{
		return false;
	}
}
console.log(lessThanOrEqualToZero(2));
console.log(lessThanOrEqualToZero(-2));
console.log(lessThanOrEqualToZero(0));



