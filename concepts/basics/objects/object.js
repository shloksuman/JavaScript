// Creating an object using object literal notation
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    greet: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
  };
  
  // Accessing object properties using dot notation
  console.log(person.firstName); // Output: John
  console.log(person.age);       // Output: 30

  const lastname = person["lastName"];
  console.log("lastname : " , lastname);

  const fullname = person.firstName + " " + person.lastName ;
  console.log("fullname : " , fullname);
  const f = "lastName" ;
  console.log(person[f]); //here f= "lastName" which is a key in object person is passed, NOT possible in dot notation
  
  // Calling the method defined in the object
  person.greet(); // Output: Hello, my name is John Doe.


  //----------------------------------------------

  // ADDING AND UPDATING THE OBJECT KEY VALUE PAIRS

  person.weight = "59kg" ;
  console.log("------weight has been added in person object------");
  console.log(person);
  
  //updating

  person.firstName = "Shlok" ;
  console.log("\n-------updated firstname--------\n") ;
  console.log(person) ;
  person["lastName"] = "Suman" ;
  console.log("\n-------updated last name -------- \n ") ;
  console.log (person ) ;

  person.greet() ;


  const adhaarCardData = {
    firstName:"Rohan",
    lastName:"Kumar",
    dob:"01-01-2000",
    adhaarNo:479382749328749,
    address:{ village:"Furruckhabad",district:"ranchi",state:"jharkhand",} ,
    fullName: function(){ return this.firstName + " " + this.lastName; }
    //here we CAN'T USE ARROW FUNCTION since it doesn't allow accessing using 'this'
    }
    
    // this -> this refers to current object 
    // in this example -> this === addharCardData
    
    const fullName2 = adhaarCardData.fullName();
    console.log("full adhaar card name : " , fullName2);
    console.log("village : " , adhaarCardData.address.village); //this is how we access object inside object
    
    //-----------------------------------------

    // constructor function is another way of creating Object.
// Rule -> Constructor Function Starts with capital letter 

// class Person {
//     constructor(firstName, lastName, age) {
//         // this === Person 
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.fullName = function () {
//             return this.firstName + " " + this.lastName;
//         };
//     }
// }

// constructor function is another way of creating Object.
// Rule -> Constructor Function Starts with capital letter 

function Person(firstName,lastName,age) {
    // this === Person 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
    return this.firstName + " " + this.lastName;
        };
    }
    
    
    // constructor function starts with new keyword 
    const myFather = new Person("John", "Doe", 50);
    console.log(Person); //this constructor object is logged with it's name Person
    // but in case of normal object, only the key -value pairs are logged


    //-----------------------------------------


    // Object is reference data type 
// what is reference data type ?
/* Answer : Reference data type is a data type that holds a
reference to an object in memory, rather than holding its value directly */

// lets see with example 

// const obj1 = {title:"obj1"} ;// allocate space in memory + address
// const obj2 = obj1;
// when we assign obj1 to obj2 
// no new space created in memory
// only obj2 holds address of obj1

// obj2.title = "obj2";
// when we try to change title of obj2 
// title of obj1 

// console.log(obj1.title); // output : obj2

// how to avoide reference 
// and  create deep clone


// we can use spread operator

const obj1 = {title:"obj1"} 
const obj2 = {...obj1}; 
//now both obj1 and obj2 have got separate memory 
obj2.title = "this is another one" ;
console.log("obj1 : " , obj1);
console.log("obj2 : " , obj2);


//------------
//traversing the elements of the objects

console.log("Below it shows let key in adhaarcarddata key list");
for(let key in adhaarCardData){ // 'replace 'key' with any word , it STILL WORKS'
    console.log(key);
}

//--------------------------------------
// now converting the OBJECT into MAP which contains key value pairs in form of small arrays

// console.log(Object.entries(adhaarCardData));

//output
// (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0
// : 
// (2) ['firstName', 'Rohan']
// 1
// : 
// (2) ['lastName', 'Kumar']
// 2
// : 
// (2) ['dob', '01-01-2000']
// 3
// : 
// (2) ['adhaarNo', 479382749328749]
// 4
// : 
// (2) ['address', {…}]
// 5
// : 
// (2) ['fullName', ƒ]
// length
// : 
// 6
// [[Prototype]]
// : 
// Array(0)

//======================
//now traversing over the array obtained from Object

for(let data of Object.entries(adhaarCardData)){
  console.log(data);
}

//the above returns all the arrays only , earlier we got the output in a map form, here we exclusively printed
//all the arrays only

//now printing the value and key pairs

for(let [key,value] of Object.entries(adhaarCardData)){
  console.log(`key : ${key} , value : ${value} `);
}


// Object.fromEntries
// Covert Map data type to object 

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

console.log(entries);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }

// Object.keys
// convert object key into array
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(object1);

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]

// Object.values
// convert object value into array


console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]


// hasOwnProperty()
// check key exist or not

object1.property1 = 42;

console.log("has property1 =42 or not : " , object1.hasOwnProperty('property1'));
// Expected output: true

console.log("has property toString or not: " , object1.hasOwnProperty('toString'));
// Expected output: false


//---------------------------------------------------

// Question 1
// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
//  This is calculated by subtracting the number of downvotes from upvotes.


let votes = {
  upvoteCount:0,
  downVoteCount:5
};
let votes2 = {
  upvoteCount:200,
  downVoteCount:5
};
let votes3 = {
  upvoteCount:2,
  downVoteCount:2
};

const getVoteCount = (data) => {
    return data.upvoteCount - data.downVoteCount ;
}

console.log("sample 1 : " , getVoteCount(votes));
console.log("sample 2 : " , getVoteCount(votes2));
console.log("sample 3 : " , getVoteCount(votes3));

// Sample Data
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0


// Question 2
// 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs,
//  30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function 
// that will return an object that shows how much a person needs to spend on needs, wants, and savings.

const income1 = 10000 ;

// const fiftythirdtwenty = (income) => { //THIS WORKS FINE
//   let needs = income*0.50;
//   let wants = income*0.30;
//   let savings = income*0.20;
//   const resultObj= {
//     needs1 : needs ,
//     wants1 : wants ,
//     savings1 : savings
//   };
//   return resultObj;
// }

const fiftythirdtwenty = (income) => { //THIS WORKS FINE TOO
  return resultObj= {
    needs1 : income*0.50 ,
    wants1 : income*0.30 ,
    savings1 : income*0.20
  };
 // return resultObj;
}

console.log("for : " , income1 , " we have : " , fiftythirdtwenty(income1));

const income2 = 50000;
const income3 = 13450;

console.log("for : " , income2 , " we have : " , fiftythirdtwenty(income2));
console.log("for : " , income3 , " we have : " , fiftythirdtwenty(income3));