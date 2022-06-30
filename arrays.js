// ARRAYS https://youtu.be/VtvgGncj0Zg
// An array is a list-like data structure in Javascript
// arrays are helpful for very large values, or a lot of known values you're looking store. 

let numbers = [1, 2, 3]; 
    // there are three elements in the array "numbers"
let names = ["George", "John", "Thomas"];
    // arrays can hold strings as well
let aVariable = "a value";
    let mixedBag = [30, true, "apples", null, aVariable]; 
    // you can store a number of "elements" inside of an array

// typeof array 
    console.log(names); // returns [ 'George', 'John', 'Thomas' ]
    console.log(typeof names); //returns object: the type of the array variable is an object

// Array.isArray - a method to check if a variable is an array
    console.log(Array.isArray(names)); // returns true: this is the best way to check if something is an area, because of the typeof mention above.
    console.log(Array.isArray("hello")); // returns false

// BRACKET ACCESS
    console.log(names[1])  // returns John, because of 0 index counting. 1 returns the second element within the array
                           // the bracket compiler informs how many spaces it needs to "jump" from the first element in order to access what we need (0 index)
        
        names[0] = "David"; // the bracket also allows us to reassign the value in the array
        console.log(names); // returns [ 'David', 'John', 'Thomas' ] instead of the original [ 'George', 'John', 'Thomas' ]
                            // the index [i] refers to the position (number) of different values within the array
    
                            console.log(names.length); // the purpose of this is to determine the total amount of values within the array, returns 3
                            console.log(names[names.length]); // undefined, because the arrays are 0 indexed, the last index is 1 less than the length. The length is 3, the last index is 2 (because it is 0 indexed)
                            console.log(names[names.length-1]) // allows you to access the last variable within the array

// FUNCTIONS OF ARRAYS 
names.push("Jane"); // .push method - add something to the end of an array
    console.log(names); // returns [ 'David', 'John', 'Thomas', 'Jane' ]

let latestAdd = names.pop(); // pop method - removes and return the most recently added item to the array
    console.log(latestAdd); // returns Jane, added via .push method (line 37)
    console.log(names); // returns [ 'David', 'John', 'Thomas' ], which Jane was removed via names.pop but accessed via latestAdd

let firstElRemoved = names.shift(); // shift method - removes the first item added to the array
    console.log(firstElRemoved); // returns David, accesses the first element added to the array 
    console.log(names); // returns [ 'John', 'Thomas' ], which removed David via names.shift (line 40)

names.unshift("Bob"); // unshift method - adds to the begining of an array
    console.log(names); // returns [ 'Bob', 'John', 'Thomas' ]

console.log(names.indexOf ("Bob")); // returns 0, indexOf is also an array method and works the same was as the string method indexOf, where it returns the position of the variable within the array. If it does not exist, it returns -1. 
    // indexOf USECASE 
        let person = "Jack";
        if (names.indexOf(person) > -1) {
            console.log("Person found"); 
        } else {
            console.log("Person not found");
        }
    // returns "Person not found" because Jack does not exist within the array

console.log(names); // returns [ 'Bob', 'John', 'Thomas' ]
console.log(names.slice(0,1)); // returns [ 'Bob' ] 
//                      ^ begins the slice
//                        ^ ends the slice
// slice in this case determines where at in the array it will start the return of information, and where it will stop the return
console.log(names.slice(0,2)); // returns [ 'Bob', 'John' ] 
console.log(names.slice(1,2)); // returns [ 'John' ]
console.log(names.slice(1)); // returns [ 'John', 'Thomas' ] 

let namesCopy = names.slice(); // slice in this instance makes a copy of the array, and returns the exact information in the original array
namesCopy[0] = "Kate" // namesCopy is a new variable that has been copied from the original array (line 66), here we are replacing the first variable within the array with the string "Katie"
console.log(namesCopy); // returns [ 'Kate', 'John', 'Thomas' ] 
console.log(names); // returns [ 'Bob', 'John', 'Thomas' ] the original variable "names" is unchanged

console.log(names.includes("Bob")) // includes method - checks if a value is in an array (similar to indexOf) 
console.log(names.includes("David")) // returns false

console.log(names) // returns [ 'Bob', 'John', 'Thomas' ]
names.reverse(); //reverse method reverses the order of the array, IT DOES NOT PRESERVE THE ORIGINAL
console.log(names) // returns [ 'Thomas', 'John', 'Bob' ]

console.log(names) // returns [ 'Thomas', 'John', 'Bob' ] (variable defined line 7)
let singleTermPresidents = names.splice(1,1); // splice mutatest he original array; 
// it's used to add or remove emlements from the middle of an array (instead of adding or removing from either end)
// its first argument is an index; the second is a count of elements to delete from the element - starting at the provided index
// it returns a new array with all of the removed elements.
console.log(names) // returns [ 'Thomas', 'Bob' ]

        //another example of splice
        let beatles = ["Paul", "George", "John", "Ringo"]
        console.log(beatles) // returns [ 'Paul', 'George', 'John', 'Ringo' ]
        let newGroup = beatles.splice(1,2, "Pete")
        console.log(beatles) //returns [ 'Paul', 'Ringo' ]
        console.log(newGroup) //returns [ 'George', 'John' ]
            //you can also insert values in an array using .splice
                //let newGroup = beatles.splice(1,2,"Pete") --> serves as a replace 
                    //returns [ 'Paul', 'Pete, 'Ringo' ] 
                //spice hack: let newGroup = beatles.splice(1,0, "Pete") 
                    // returns: nothing in the new array, and adds "Pete" to the original beatles array [ 'Paul', 'Pete', 'George', 'John', 'Ringo' ]

// join method
let sentence = "The Beatles were " + beatles.join(", ")
console.log(sentence) // returns "The Beatles were Paul, Pete, Ringo"

//concat method
let older = ["Ringo", "John"]
let younger = ["Paul", "George"]
console.log(older + younger) // this convers the arrays to strings, returns Ringo,JohnPaul,George
console.log(older.concat(younger)) // retuns [ 'Ringo', 'John', 'Paul', 'George' ] which combines the arrays and creates one array

let relatedThings = [["Windows", "MacOS"], ["New York", "Chicago"]] // this is a multidimensional array: the .length of this array is actually 2, not 4 because there are 2 elements (which are arrays) within the array. 
console.log(relatedThings[2]) // returns undefined: if we wanted to access "new york", this looks like the 3rd element of the array, however, this variable only has 2 array elements
console.log(relatedThings[1][0]) //returns "New York" 
//          ^variable
//                       [1] access the second element of the array ["New York", "Chicago"]
//                           [0] access the 1st variable within the second element of the array "New York"

        //more complex example
        let rsvpGroups = [["Jane", "Mel"], "Jack", ["Rohan", "David", "Meg"]]; //this is a 2 dimensional array, which has multiple arrays and strings available inside of it. 
        
        // If we wanted to access the elements inside of this array, we'd want to use loops -

        for (let i = 0; i < rsvpGroups.length; i++) {
            let element = rsvpGroups[i]; //getting the index value of the element (the number place) we use this to extract the right element

            if (Array.isArray(element)) { //because the array is a combo of other arrays and strings, we want to have the loop do something specific with only the arrays.
                for (let j=0; j < element.length; j++) { //this nested loop is meant to go through the nested array
                    console.log(element[j]) //if this is an array within an array, find it, and show me the array
                }
            } else {
                console.log(element) //if the element is not an array within an array, show me the string
            }
        }
        /* returns 
        Jane
        Mel
        Jack
        Rohan
        David
        Meg
        */ 

let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]; 

console.log(grid[1]) // returns [4,5,6]: this is allowing us to grab the second row of the grid variable
//if we want to get a specific column, the easiest method would be to use a loop
let secondCol = []; // creating a variable with an empty array
for(let i = 0; i < grid.length; i++) {
    secondCol.push(grid[i][1]) //grid[i] represents each row (what we are looping through), and 1 represents the second element in each row.
}
console.log(secondCol); 
        // returns [ 2, 5, 8 ]
