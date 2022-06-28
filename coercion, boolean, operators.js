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

// LOGICAL OPERATORS

    if (10 && 20) {
        console.log ("both 10 and 20 are truthy") // both things are true
    }

    if (10 || 0) {
        console.log ("only one needs to be truthy for me to show up") // 10 is truthy, so this logs.
    }

