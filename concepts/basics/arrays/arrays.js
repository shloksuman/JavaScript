// basics of array


// two ways to create array
const evenNo = [ 2, 4, 6, 8, 10 ];
//const evenNum = new Array();

// for(let i = 0 ; i<evenNo.length ; i++){
//     console.log(evenNo[i]);
// }

const days = [];
console.log({days});
days.push("Sunday", "Monday");
console.log("added sunday and monday using push");
console.log({days});
days.push("Tuesday");
console.log("added tuesday using push");
console.log({days});

// Unshift - insert from front or at index 0

days.unshift("Saturday");

console.log("added saturday using unshift");


// console.log(days); // display as an ARRAY

// console.log("Days" , days); 

console.log({days}); // displays as an OBJECT

// IMPORTANT
// NOTICE IN CONSOLE WHEN WE CHECK THE ELEMENTS STORED INSIDE THE OBJECT
// EVEN AT LINE 15, THE CONSOLE LOG GIVES ALL 4 ELEMENTS , EVEN BEFORE
// STORING ONLY 2 ELEMENTS AT THAT TIME
// THIS MEANS OBJECT DISPLAYS GLOBAL VALUE
// AND IT SHOWS ALL THE VALUES IT HAS ACCUMULATED DURING THE PROGRAM


//----------------------------------------------

// NOW DOING CONSOLE.LOG(DAYS) , THAT IS ONLY MENTIONING THE ARRAY
// INSTEAD OF WRITING IT IN CONSOLE.LOG({DAYS}) WHICH REFERS IT AS AN OBJECT

console.log("----------------------------------------------");
console.log(" NOW DOING CONSOLE.LOG(DAYS) , THAT IS ONLY MENTIONING THE ARRAY INSTEAD OF WRITING IT IN CONSOLE.LOG({DAYS}) WHICH REFERS IT AS AN OBJECT");

const days2 = [];
console.log(days2);
days2.push("Sunday", "Monday");
console.log("added sunday and monday using push");
console.log(days2);
days2.push("Tuesday");
console.log("added tuesday using push");
console.log(days2);

// Unshift - insert from front or at index 0

days2.unshift("Saturday");

console.log("added saturday using unshift");


// console.log(days); // display as an ARRAY

// console.log("Days" , days); 

console.log(days2); // displays as an OBJECT

console.log("Still it contains all the values inside but display only those values that have been pushed inside till that time");

console.log("------------------------------------------------");

days2.pop();
console.log("removed last element using pop()");
console.log(days2);

days2.shift() ; // removes element from beginning
console.log(days2);

days2.splice(0,2); // deleted element from index o to 1 
console.log(days2);


days2.push("sunday" , "monday" , "tuesday" , "wednes"  , " thurs" , "fri" , "sat");

const sliceddays= days2.slice(1,4); //takes values from index 1 to 3 and stores in slicedays
console.log("NOTE : slice function doesn't affect the original array");

console.log("sliced array " ,sliceddays);
console.log("original days2 array : " , days2);




