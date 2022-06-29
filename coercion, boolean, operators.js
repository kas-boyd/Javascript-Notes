// https://youtu.be/KVwBnRGehTI

// EXPLICIT COERSION

    //number to string
    let num = 10;
    console.log(typeof num);

    let numStr = String(num);
    console.log(numStr);
    console.log(typeof numStr);

    //string to number

    let str = "1000"
    console.log (typeof str); 
    let strNum = Number(str);
    console.log(typeof strNum); 

// IMPLICIT coersion: changes the type of a value, Javascript does this on it's own

    // implicit coersion with + (conctination)
    let sum = 10+20;
    let concatSum = "10" + "20"

    console.log (sum); // 30
    console.log (concatSum); // 1020 - when + is used with 2 strings, they are combined with a new string.

    let notSure = 10 + "20" + 30*2 
    console.log (notSure) // 102060 - IMPLICIT COERSION via number + string
    let notSureBool = 10 + "20" + 30*2 + true
    console.log (notSureBool) // 102060true

    // double equals
    console.log(10 == 10) // true
    console.log(10 == "10") // true
    console.log(true == "true") // false
    console.log("" == false) // true ?? 
    console.log("1" == true) // true 
        // this is one of the examples we are instructed to not use double = in Javascript

// TRUTHY AND FALSEY

    let newBool = Boolean("I am a string");
    console.log(newBool) // true: truthy (Javascript rule) 
        // truthy: values that are not actually "true", but when coersed into an if statement, they become true.
            console.log(Boolean ("normal string")); // true
            console.log(Boolean (10)); // true
            console.log(Boolean ([2,32,45])); // ARRAY: true
            console.log(Boolean ({name: "nimit"})); // OBJECT: true
        // falsey
            console.log (Boolean ("")); // false
            console.log (Boolean (0)); //false (every other number is truthy, even negatives)
            console.log (Boolean (null)); //false
            console.log (Boolean (undefined)); //false
            console.log (Boolean (Nan)); //false

//COERSION IN CONDITIONALS
    if (5 > 1) { //truthy
        console.log("all is good")
    } else {
        console.log("oh no")
    }

    if ("10") { //truthy
        console.log("is truthy"); 
    } else {
        console.log("is falsey");
    }

    if ("0") { //falsey
        console.log("is truthy"); 
    } else {
        console.log("is falsey");
    }

    console.log (!true); // false (NOT)true
    console.log (!"hello"); // false (NOT)true (string=true)
    console.log (!""); // true (NOT)false (string=false)
    console.log (!"hello"); // false (NOT)true
    console.log (!![]); // true !!(DOUBLE-BANG) gives you the opposite of the opposite, which is the original value. Helpful to figure out if something is truthy or falsey.

//what happens when we use a loose comparison?? well look at the table!
//JAVASCRIPT TYPE CONVERSIONS
//    Value             ||	   to String        ||	 to Number  ||	 to Boolean
// undefined                    "undefined"         NaN             false
// null                         "null"              0               false
//true                          "true"              1              
//false                         "false"             0
//"" (empty string)                                 0               false
//"1.2" (nonempty, numeric)                         1.2             true
//"one" (nonempty, non-numeric)                     NaN             true
//0                             "0"                                 false
//-0                            "0"                                 false
//1 (finite, non-zero)          "1"                                 true
//Infinity                      "Infinity"                          true
//-Infinity                     "-Infinity"                         true
//NaN                           "NaN"                               false
//{} (any object)               complicated         complicated     true
//[] (empty array)              ""                  0               true
//[9] (one numeric element)     "9"                 9               true
//['a'] (any other array)       "a"                 NaN             true
//function(){} (any function)   complicated         NaN             true

// LOGICAL OPERATORS - Updated to include lecture notes via https://github.com/FullstackAcademy/2206-FTB-PT-WEB-PT/blob/main/Week_04/Day_01/type_conversions.js

if (10 && 20) {
    console.log ("both 10 and 20 are truthy") // both things are true
}

if (10 || 0) {
    console.log ("only one needs to be truthy for me to show up") // 10 is truthy, so this logs.
}

// The logical operators &&, ||, and ! perform Boolean algebra 
// The && operation returns the first falsy value or the last value if 
// no falsy value is found.


let t1 = true
let t2 = true
let f1 = false
let f2 = false
//          true && true <--t2
console.log(t1 && t2);
//          true && true <--t1
console.log(t2 && t1);
//         true && false <-- f1
console.log(t1 && f1);
//          false && true <-- f1
console.log(f1 && t1);
//         false && false <-- f1
console.log(f1 && f2);
//         false && false <-- f2
console.log(f2 && f1);

//                (0) + 2
let_add_falsy = (0 && undefined) + 2
//example that will make more sense later
// isUserLoggedIn = true && <show their feed></show>
//               (true && true) --> 1 + 2
let_add_truthy = ("1.2" && true) + 2
console.log(let_add_falsy);
console.log(let_add_truthy);

// true && false ---> false
((1 && 2) && (false && false))

// The || operator performs the Boolean OR operation on its two operands. 
// If one or both operands is truthy, it returns a truthy value. 
// If both operands are falsy, it returns a falsy value.

// It starts by evaluating its first operand, the expression on its left. 
// If the value of this first operand is truthy, it short-circuits and returns 
// that truthy value without ever evaluating the expression on the right. 
// If, on the other hand, the value of the first operand is falsy, 
// then || evaluates its second operand and returns the value of that expression.
// true || false --> true

