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


/* 111. Mubashir wants to remove numbers from a given string!

Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
*/
function removeNumbers(str) {
    let result = str.split('').filter(element => isNaN(element)).join("");
    return result;
}

console.log(removeNumbers("mubashir1"));
console.log(removeNumbers("12ma23tt"));
console.log(removeNumbers("e1d2a3b4i5t6"));


/*112. Mubashir has a cat and a dog. He purchased both of them at the same time humanYears ago.

Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.*/

function calculateYears(humanYears) {
    if (humanYears === 1) {
        return [1, 15, 15];
    } else if (humanYears === 2) {
        return [2, 24, 24];
    } else {
        return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
    }
}
console.log(calculateYears(1));
console.log(calculateYears(2));
console.log(calculateYears(10));


/* 113.Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.*/
function evenOddString(txt) {
    let arr = txt.split('');
    arrEven = [];
    arrOdd = [];

    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 === 0) {
            arrEven.push(arr[i]);
        } else {
            arrOdd.push(arr[i]);
        }
    }
    return arrEven.join('') + ' ' + arrOdd.join('');
}
console.log(evenOddString("mubashir"));
console.log(evenOddString("edabit"));
console.log(evenOddString("airforce"));

/*114. Write a function that returns the string "something" joined with a space " " and the given argument a.*/
function giveMeSomething(a) {
    return "something " + a;
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));


/*115. A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.*/
function nameString(name) {
    let b = "Edabit";
    let result = name + b;
    return result;

}
console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));


/* 116. Create a function that takes a boolean variable flag and returns it as a string.*/
function boolToString(flag) {
    return flag.toString();

}
console.log(boolToString(true));
console.log(boolToString(false));


/*117. Create a function that will handle simple math expressions. The input is an expression in the form of a string.*/
function calculator(str) {
    return eval(str);
}
console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));


/*118. Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

Can you help her?*/

function greeting(name) {
    if (name == "Mubashir") {
        return "Hello, my Love!";
    } else {
        return "Hello, " + name + "!";
    }
}
console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));


/*119. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.*/
function comp(str1, str2) {
    return str1.length == str2.length;
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));


/* 120. Create a function that returns true if a string is empty and false otherwise.*/
function isEmpty(str) {
    return str.length == 0;
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));

/*121.Write a function that returns the length of a string. Make your function recursive.*/
function length(str) {
    return str.length;
}
console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));


/*122. Create a function that takes a string and returns it as an integer.*/
function stringInt(str) {
    return parseInt(str);
}
console.log(stringInt("6"));
console.log(stringInt("1000"));
console.log(stringInt("12"));


/*123. Given two strings, firstName and lastName, return a single string in the format "last, first".*/
function concatName(str1, str2) {
    return str1 + ", " + str2;
}
console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));

/*124. Write a template string*/
function format(a, b, c) {
    const template = `Their names were:  ${a}, ${c}, ${b}.`;
    return template;
}
console.log(format('Alfred', 'Ella', 'Petra'));

/*125. Given a string, return true if its length is even or false if the length is odd.*/
function oddOrEven(str) {
    return str.length % 2 === 0 ? true : false;
}
console.log(oddOrEven("apples"));
console.log(oddOrEven("pears"));
console.log(oddOrEven("cherry"));

/*126. Create a function that takes a word and returns the new word without including the first character.*/
function newWord(str) {
    return str.substr(1);
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));


/*127. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.*/
const helloName = name => `Hello ${name}`;
console.log(helloName("Gerald"));
console.log(helloName("Tiffany"));
console.log(helloName("Ed"));


/*128. Create a function that takes an array of numbers or letters and returns a string.*/
function arrayToString(arr) {
    return arr.join("");

}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

/*129. Create a function that takes an array and a string as arguments and returns the index of the string.*/
function findIndex(arr, str) {
    return arr.indexOf(str);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));


/*130. Create a function that returns a number, based on the string provided. Here is a list of all digits:*/
function newWord(str) {
    switch (str) {
        case 'one':
            return 1;
            break;
        case 'two':
            return 2;
            break;
        case 'three':
            return 3;
            break;
        case 'four':
            return 4;
            break;
        case 'five':
            return 5;
            break;
        case 'six':
            return 6;
            break;
        case 'seven':
            return 7;
            break;
        case 'eight':
            return 8;
            break;
        case 'nine':
            return 9;
            break;
        case 'zero':
            return 0;
    }

}
console.log(newWord('one'));
console.log(newWord("two"));
console.log(newWord("nine"));


/* 131. For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.*/
function reversePsychology(str) {
    if (str) {
        return `Do not ${str}`
    } else {
        return `Do not anything.`
    }

}
console.log(reversePsychology("wash the dishes"));
console.log(reversePsychology("eat your lunch"));
console.log(reversePsychology("go to school"));
console.log(reversePsychology(""));


/*132. Create a function that returns true if a string contains any spaces.*/
function hasSpace(str) {
    return str.includes(" ");
}
console.log(hasSpace("hello"));
console.log(hasSpace("hello, world"));
console.log(hasSpace(" "));
console.log(hasSpace(""));
console.log(hasSpace(",./!@#"));


/*133. Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.*/
function isLastCharacterN(str) {
    return str.lastIndexOf('n') == str.length - 1;
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"));


/*134. Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.*/
function toNumberArray(arr) {
    return arr.map(x => Number(x));
}
console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));

/* 135. Create a function that takes a string txt and a number n and returns the repeated string n number of times.*/
function repeatString(txt, n) {
    if (typeof txt === 'string') {
        return txt.repeat(n);
    } else {
        return "Not A String !!"
    }
}
console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));


/*136. Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.*/
function frontThree(str) {
    const result = str.slice(0, 3);
    return result.repeat(3);
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));
console.log(frontThree("bi"));

/*137. Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.*/
function relationToLuke(name) {
    const family = {
        'Darth Vader': 'father ',
        'Leia': 'sister',
        'Han': 'broder in law',
        'R2D2': 'droid'
    }
    return `Luke, I am your ${family[name]}.`
}
console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));


/*138. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).*/
function cityFacts(city) {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}
console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}));
console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}));


/*140. Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".*/
function isPlural(word) {
    if (word.lastIndexOf('s') === word.length - 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));


/*141. Create a function that takes a string and returns the concatenated first and last character.*/
function firstLast(word) {


    return word[0] + word.slice(-1);
}
console.log(firstLast("ganesh"));
console.log(firstLast("kali"));
console.log(firstLast("shiva"));
console.log(firstLast("vishnu"));


/*142. Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.*/
function stutter(word) {
    const result = word.substr(0, 2) + '... ' + word.substr(0, 2) + '... ' + word + '?'
    return result;
}
console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));


/*143. Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.*/
function amazingEdabit(str) {
    const result = str.includes('edabit') ? str : str.replace('amazing', 'not amazing');
    return result;
    /*if (str.includes('edabit')) {
        return str;
    } else {
        return str.replace('amazing', 'not amazing');
}*/
}
console.log(amazingEdabit("edabit is amazing."));
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Infinity is amazing."));

/*144. Given a fraction as a string, return whether or not it is greater than 1 when evaluated.*/
function greaterThanOne(str) {
    const result = eval(str) > 1 ? true : false;
    return result;
}

console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/10"));


/*145. Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".*/
function moodToday(mood = 'neutral') {
    return `Today, I I am feeling ${mood}`
}
console.log(moodToday("happy"));
console.log(moodToday("sad"));
console.log(moodToday());

/*146. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).*/
function countSyllables(str) {
    return str.length / 2;
}
console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANA"));


/* 147. Write a function that validates whether two strings are identical. Make it case insensitive.*/
function match(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));

/*148.Create a function that counts how many D's are in a sentence.*/
function countDs(str) {
    return str.match(/d/gi).length;
}
console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));


/*149. Create a function that will put the first argument, a character, between every word in the second argument, a string.*/
function add(simbol, str) {
    return str.replace(/ /g, simbol);
}
console.log(add("R", "javascript is fun"));
console.log(add("#", "hello world!"));
console.log(add("#", " "));


/*150. Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.*/
function intOrString(param) {
    return typeof param == "number" ? "int" : "str";
}
console.log(intOrString(8));
console.log(intOrString("Hello"));
console.log(intOrString(9843532));


/*151. Write a function that takes an integer and:

If the number is a multiple of 3, return "Hello".
If the number is a multiple of 5, return "World".
If the number is a multiple of both 3 and 5, return "Hello World".*/

/*function helloWorld(num) {
if ((num % 3 === 0) && (num % 5 === 0)) {
    return 'Hello World'
} else if (num % 3 === 0) {
    return 'Hello'
} else if (num % 5 === 0)
    return 'World'
}*/
const helloWorld = n => n % 3 == 0 && n % 5 == 0 ? 'Hello World' : n % 3 == 0 ? 'Hello' : n % 5 == 0 ? 'World' : "Numarul nu este multiplu de 3 sau/si de 5"
console.log(helloWorld(3));
console.log(helloWorld(5));
console.log(helloWorld(15));
console.log(helloWorld(7));


/*152. Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.*/
function toInt(str) {
    return parseInt(str);
}

function toStr(int) {
    return int.toString();
}
console.log(toInt("77"));
console.log(toInt("532"));
console.log(toStr(77));
console.log(toStr(532));


/*153. Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.*/
function longBurp(num) {
    const letter = 'r';
    return 'bu' + letter.repeat(num) + 'p';
}
console.log(longBurp(3));
console.log(longBurp(5));
console.log(longBurp(9));


/*154. Create a function that takes a string and returns a string with spaces in between all of the characters.*/
function spaceMeOut(str) {
    return str.split("").join(' ');
}
console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));


/*155. After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

Given a string of what the overlapping claps sounded like, return how many claps were made in total.*/
function countClaps(str) {

    const claps = str.match(/C/g);
    return claps.length;
}
console.log(countClaps("ClaClaClaClap!"));
console.log(countClaps("ClClClaClaClaClap!"));
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));


/*156. Create a function which makes the last character of a string repeat n number of times.*/
function modifyLast(str, n) {
    const last = str.slice(-1);
    return str + last.repeat(n - 1);

}
console.log(modifyLast("Hello", 3));
console.log(modifyLast("hey", 6));
console.log(modifyLast("excuse me what?", 5));


/*157. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.*/
function getCase(str) {
    if (str.toUpperCase() === str) {
        return "upper"
    } else if (str.toLowerCase() === str) {
        return "lower"
    } else {
        return "mixed"
    }
}
console.log(getCase("whisper..."));
console.log(getCase("SHOUT!"));
console.log(getCase("Indoor Voice"));


/*158.OBJECTS - Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.*/
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));