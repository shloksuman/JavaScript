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


days2.push("sunday" , "monday" , "tuesday" , "wednesday"  , " thursday" , "friday" , "saturday");

const sliceddays= days2.slice(1,4); //takes values from index 1 to 3 and stores in slicedays
console.log("NOTE : slice function doesn't affect the original array");

console.log("sliced array " ,sliceddays);
console.log("original days2 array : " , days2);


const filterdays = days2.filter((value, index, array)=>{
    return value.length>6 ;
});

console.log("filtered days > 6 : " , filterdays);

// for (let i = 0; i < days2.length; i++) {
//     let day = days2[i];
//     console.log(`Today is ${day}`);
//   }

//  using FOR OF LOOP
// for(let day of days2){
//     console.log(`Today is ${day}`);
// }

// for each loop

// days2.forEach((day, index)=>{
//     console.log(`Today is ${day} , ${index}`);
// });

// we can use map instead of forEach to store the fetched values inside another variable
const newDays = days2.map((day, index)=>{
    console.log(`Today is ${day} , ${index}`);

    return day[0];
});

console.log(newDays);


// FInd

const array1 = [ 1,2,5, 11, 13,4,18,44] ;

const found  = array1.find((value, i , obj)=>{
    return value > 10;
});

console.log("array1 : " , array1);
console.log("print found values > 10 in array 1 :" ,  found); //returns only one value that satisfies the condition

//index 

const index = array1.indexOf(18);
console.log("index of 18 : " , index);

// find index

const findind = array1.findIndex((value)=>{
    if(value%2===0){
        return value;
    }
});

console.log("findindex : " , findind); // this also returns only single value that satisfies the condition

const a = [ 1,3,5,7];
const b = [2,4,6,8];

const c = a.concat(b);
// const c = a.concat(b,a,b,a,a,a,b) we can add endless number of array
console.log("array a : " , a);
console.log("array b : " , b);
console.log("array c ( a+b) : " , c);


// Array.prototype.reduce()
// it will combine array // based on some operation 

const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array4.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log("array4 : " , array4);

console.log(sumWithInitial);
// Expected output: 10

const factorial = array4.reduce((prevValue , currValue)=>{
    return prevValue*currValue;
}, 1);

console.log("product of elements of array4 is : " , factorial);


// sort

// const array1 = [ 1,2,5, 11, 13,4,18,44] ;

console.log(array1.sort((a,b)=> a-b )); // ascending order
console.log(array1.sort((a,b)=> b-a )); // descending order


// JOIN

const ele = ["R", "A", "H", "U" , "L"];
console.log("elements in ele : " , ele);

console.log(ele.join("-"));






