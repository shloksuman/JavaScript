//case 1

// getname() ;  

// console.log(x);

//output is 
//line printed   -- accessing function before its creation doesn't create any problem in JS
//undefined    -- this is undefined we are trying to access x before initialization

// called HOISTING in JS , where we can access any value within the program even before its declaration


//case3 -- still prints the function itself before declaration
//console.log(getname) ;
//ALL THIS HAPPENS DUE TO THE EXECUTION CONTEXT THAT IS CREATED


var x = 5;

function getname(){
    console.log("line inside getname") ;
}

getname();
console.log(x);
console.log(getname);


//case 2  - prints the function itself
// console.log(getname) ;
