// LOOPS

// *** while loop ***

/* 
while loop requires 3 key elements
    1. the while keyword
    2. a conditional expression that evaluates to a boolean value (true/false)
    3. a block of code

        while (conditional) {
            block of code
        } 
the block of code will run over and over as long as the conditional expression equates to true
*/

let count = 3 // assign a variable "count" a value of 3

while (count >= 1) { // while the count is greater or equal to 1, run the loop
    console.log("count is", count) // returns string & the count variable
    count--; // decrement by 1
}

/* returns 
count is 3
count is 2
count is 1
*/ 

while (false) { // because this will never be true, the loop will never run
    console.log("this line of code will never run");
}

//DANGER BELOW, DON'T RUN IT 
while (true); 
    //console.log ("this line wil run forever"), or until the machine running the code will run out of memory
        // looks like 
            //"this line wil run forever"
            //"this line wil run forever"
            //"this line wil run forever"
            //"this line wil run forever"
            //"this line wil run forever"
            // ..... 

// we have to make sure the conditional is evenutally false!
while (count >= 1) { // because the count here is always going to be greater than 1, it will continue to run (similarly to the danger issue above); what's missing here is the count-- (decrement)
    //console.log("count is", count);
}

// *** for loop ***

/* 
for loop requires 3 elements
    1. the for keyword
    2. three optional expressions
    3. a block of code

        for (initialization; condition; final-expression) {
            block of code
        } 
the block of code will run over and over until the condition evaluates to false
        initialization is run first, and only once. it's often used to define a counter variable, or where to begin the count.
        then, before every iteration, the confition is checked to see if it's true. 
            if it is true, the for loop will run another iteration. 
        then, after each iteration, the final expression is run. 
*/

for (let i = 1; i <= 3; i++) {
    console.log("i is", i)
}
    /* returns 
        i is 1
        i is 2
        i is 3
    */ 

// loop in either direction
for (let i = 5; i >= 1; i--) {
    console.log("i is", i)
}
    /* returns 
        i is 5
        i is 4
        i is 3
        i is 2
        i is 1
    */ 

// can increment by any number
for (let i = 100; i <= 300; i+=100) {
    // explaination: in the for loop, start i at 100, test if i is less than 300, and increment the loop by 100. 
    console.log("i is", i)
}
    /* returns 
        i is 100
        i is 200
        i is 300
    */ 

// use loops to iteration through a string.
// (index)     0123456
let letters = "abcdefg";

for (let i = 0; i < letters.length; i++) {
    // defining I as an index, which keeps track of where we are, start at the 0 index (0th character) of the string (a), as long as i position is less than the total letters of the string (7) then do whatever is in the loop, which is to increment i by 1 character at a time.  
        // .length represents the position after g, so we use less than (instead of <= or =) so that the loop stops as soon as it hits the last character position (AKA .length (position after g) - 1)
    let currentLetter = letters[i] // defining a variable currentLetter, to use index [i], to get the character at this point in the string
}
    /* returns
            a
            b
            c
            d
            e
            f
            g
        */

for (let i = letters.length-1; i >= 0; i--) { 
    // we are starting from the last letter in the string, so we need to call the .length and -1 so that it starts at the last letter (see line 107)
    // we use >=0 so that we capture a in our list, as a is at the 0 index
    let currentLetter = letters[i]
    console.log(currentLetter)
}
    /* returns
            g
            f
            e
            d
            c
            b
            a
        */