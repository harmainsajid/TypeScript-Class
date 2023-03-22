// //Methods to DISPLAY OUTPUT
// //ALERT
// // alert("Hello World");

// // //CONSOLE.LOG
// // console.log("Hello World");
// // //DOCUMENT.WRITE

// // document.write("Hello World");

// //Variables
// let firstName: string = "Harmain";
// let lastName: string = "Sajid";
// console.log(firstName + lastName);

// // VARIABLE NAMES LEGAL & ILLEGAL
// // legal
// let $ali;
// let _ali;
// let ali;
// let ali1;
// let al_i;

// // illegal
// // 1ali;
// // @ali;
// // *ali;

// // COMMENTS
// //single line comment
// /* multi
// line
// comment */

// // STATEMENT (A group of instructions)
// let myPet: string = "cat";
// console.log(myPet);

// // DATA TYPES
// // premitive data types
// // String
// let myName: string = "Hamza";
// // Number
// let num: number = 27;
// // Boolean
// let isMarried: boolean = false;
// // Undefined
// let unassigned: undefined;
// // Null
// let empty: null = null;

// console.log(myName);
// console.log(num);
// console.log(isMarried);
// console.log(unassigned);
// console.log(empty);

// // TEMPLATE LITERALS

// // TYPE OF OPERATORS
// // analyzing and modifying data types
// let testVariable: number = 1; // check the type of a variable by entering typeof
// console.log(typeof testVariable);

// let v1: number = 2; //JavaScript can change types Sometimes JavaScript does this automatically(but not typeScript)
// let v2: any = "2";
// console.log(v1 * v2); // 4 ← Type Number
// console.log(v1 + v2); // “22” ← Type String

// // OPERATORS
// // ARITHMETIC OPERATORS
// // additon
// let n1: number = 1;
// let n2: number = 2;
// console.log(n1 + n2); // 3

// let str1: string = "1";
// let str2: string = "2";
// console.log(str1 + str2); // “12”

// //subtraction
// let n1: number = 5;
// let n2: number = 2;
// console.log(n1 - n2); // 3

// // multiplication
// let n1: number = 5;
// let n2: number = 2;
// console.log(n1 * n2); // 10

// // division
// let n1: number = 4;
// let n2: number = 2;
// console.log(n1 / n2); // 2

// // exponentiation
// let n1: number = 2;
// let n2: number = 2;
// console.log(n1 ** n2); // 4

// // modulus
// let n1: number = 10;
// let n2: number = 3;
// console.log(n1 % n2); // 1

// // assignment operators (Assignment operator are used to assigning values to variables.)
// let n: number = 5;
// console.log(n); // 5
// n += 5;
// console.log(n); // 10
// n -= 5;
// console.log(n); // 5

// // comparision operators
// let n: number = 5;
// console.log(n == 5); // true
// console.log(n === 5); // true
// console.log(n != 5); // false
// console.log(n > 8); // false
// console.log(n < 8); // true
// console.log(n >= 8); // false
// console.log(n <= 8); // true

// // Math Expressions Familiar Operators
// let add: number = 2 + 3; // 5
// let subtraction: number = 8 - 4; // 4
// let multiplication: number = 2 * 2; // 4
// let division: number = 4 / 2; // 2
// let modulus: number = 9 % 3; // 0

// // Math Expressions UnFamiliar Operators
// // “++” : It increments the variable by 1.
// // “--” : It decrements the variable by 1.
// // “**” : Exponentiation is one of the newer operators in JavaScript, and it allows us to calculate the power of a number by its exponent.

// // INCREMENT & DECREMENT
// // post increment
// let i:number = 1;
// let num:number = i++  //  1
// console.log(num);

// // pre increment
// let i: number = 1;
// let num: number = ++i; //  2
// console.log(num);

// // post decrement
// let i: number = 1;
// let num: number = i--; //  1
// console.log(num);

// // pre decrement
// let i: number = 2;
// let num: number = --i; //  1
// console.log(num);

// // Math Expressions Eliminating Ambiguity
// let totalVal:number = (5 + 2)  *  3 + 6;  // 27 (BODMAS)
// console.log(totalVal);
// let totalVal:number = (2 * 4) * 4 + 2; // 34
// console.log(totalVal);

// // // Concatenating Text String
// let userName: string = "Daniyal";
// console.log("Thanks, " + userName + "!");

// PROMPTS

// let company = prompt("Company name here");
// alert(company);

// IF, ELSE & ELSEIF STATEMENT
// IF EXAMPLE
// let x = prompt("Where does the Pope live?");
// let correctAnswer:string = "Pakistan";
// if (x == correctAnswer ) {
// 	alert("Correct!");
//  }

// //  ELSE EXAMPLE
// let x: string | null = prompt("Where does the Pope live?");
// let correctAnswer: String = "Pakistan";
// if (x == correctAnswer) {
//   alert("Correct!");
// } else {
//   alert("Wrong!");
// }

// ELSE IF EXAMPLE
// let x: string | null = prompt("Where does the Pope live?");
// let correctAnswer: String = "Pakistan";
// if (x == correctAnswer) {
//   alert("Correct!");
// } else if (x == "Pakista") {
//   alert("Close!");
// } else {
//   alert("Wrong!");
// }

// COMPARISION OPERATORS
//“==”, “===”, “!=”, “!==”, “>”, “<”, “>=” and “<=” are some of the comparison operators.
// COMPARISION OPERATORS EXAMPLES
// let a = 2 + 2 == "4" //  true
// let b = 2 + 2 === "4" //  false
// let c = 2 + 2 > 4  //  false
// let d = 2 + 2 >=  4  //  true
// let e = 2 + 3 !==  5  //  false

// Testing Sets Of Conditions
// (Logical Operators) EXAMPLE
// let x: number = 6;
// let y: number = 10;

// let a1: boolean = x < y && x === 6; // true
// let a2: boolean = x < y && x !== 6; // false
// let a3: boolean = x === y || y === 10; // true
// let a4: boolean = (x === 6 && y === 4) || x < y; // true

// If Statement Nested
//EXAMPLE
// Ticketing system
// let country: string | null = prompt("Where do you live?");
// // Number() function is used to convert the string to number
// let age = Number(prompt("What's your age?"));

// if(country === "Pakistan"){
//     if(age >= 18){

//         console.log("Here is your ticket")
// }
//  else {
//         console.error("Age restriction")
//     }
// } else {
//     console.log("Invalid country")
// }

// // ARRAY
// let fruits: (string)[] = ["apple","banana", "orange", "grapes", "strawberry"];
// fruits[0] // apple
// fruits[3] // grapes
// let x: (string|number)[] = [1, 2, "daniyal"] // Arrays can store multiple types of data

// // Arrays: Adding and removing elements
// let pets = [];
// pets[0] = "dog"; // adds “dog” to an array at 0 index
// pets[1] = "cat"; // adds “cat” to an array at index 1
// pets.pop(); // removes the last element of an array which is cat in our case
// pets.push("parrot"); // adds a new element to an array
// console.log(pets);

// let pets = [];
// pets[0] = "dog"; // adds “dog” to an array at 0 index
// pets[1] = "cat"; // adds “cat” to an array at index 1

// pets.shift(); // removes the first element of an array which is cat in our case
// pets.unshift("parrot"); // adds a new element to an array (at the beginning)
// console.log(pets);

// Splicing and Slicing Arrays

// // The splice() method adds new items to an array.
// // Example:
// const fruits1: string[] = ["Banana", "Orange", "Apple", "Mango"];
// fruits1.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits1);
// // adds elements to an array at 2nd index
// // deleted 0 elements
// // The slice() method slices out a piece of an array.
// // Example:
// const fruits2: string[] = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits2.slice(1); // [Orange,Lemon,Apple,Mango]
// console.log(citrus);
// // Notes:
// // The slice() method creates a new array.

// FOR LOOPS
// // Syntax:
// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }

// // Example 1
// for (let i = 0; i < 3; i++) {
//     console.log("Hello World")
//  }

//  // Example 2
//  for (let i = 0; i < 3; i++) {
//     console.log("Hello World" + i)
//   }

// // Example 3
// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

// for (let i = 0; i <= 4; i++) {
//   if ("Islamabad" === cleanestCities[i]) {
//     console.log("It's one of the cleanest cities");
//     break;
//   }
// }

// // Example 4
// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

// let matchFound = "no";

// for (let i = 0; i <= 4; i++){
// if ("Islambad" === cleanestCities[i]) {
//   matchFound = "yes";
//   console.log("It's one of the cleanest cities");
// }
// }

// if (matchFound === "no") {
//   console.log("It's not on the list");
// }

// Example 5
// let cleanestCities: string[] = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

// let numElements = cleanestCities.length;
// let matchFound: boolean = false;

// for (let i = 0; i < numElements; i++) {
//   if ("Islamabad" === cleanestCities[i]) {
//     matchFound = true;
//     console.log("It's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   console.log("It's not on the list");
// }

// Nested For Loops
// Nested For Loops - Example
// A nested loop is a loop within a loop.

// let firstNames: string[] = [
//   "BlueRay ",
//   "Upchuck ",
//   "Lojack ",
//   "Gizmo ",
//   "Do-Rag ",
// ];

// let lastNames: string[] = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullName: string[] = [];
// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     fullName.push(firstNames[i] + lastNames[j]);
//   }
// }
// console.log(fullName);

// // Changing case
// // UPPERCASE (The toUpperCase() method converts a string to uppercase letters.)
// let pet = "cat";
// pet = pet.toUpperCase();
// console.log(pet);

// // LOWERCASE (The toLowerCase() method converts a string to lowercase letters.)
// let Pet = "cat";
// Pet = Pet.toLowerCase();
// console.log(Pet);

// Strings: Measuring length and extracting parts
// Example:
// let cityToCheck = "pakistan"
// var firstChar = cityToCheck.slice(0, 1); // p

// let cityToCheck: string = "pakistan";

// let firstChar: string = cityToCheck.slice(0, 1); //p
// let otherChars: string = cityToCheck.slice(1); // akistan
// firstChar = firstChar.toUpperCase(); // P
// otherChars = otherChars.toLowerCase(); // akistan
// let cappedCity: string = firstChar + otherChars; // Pakistan

// var month: string | null = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//   monthAbbrev = month.slice(0, 3);
// }
// console.log(monthAbbrev);
