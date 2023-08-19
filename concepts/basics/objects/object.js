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
    
    
    