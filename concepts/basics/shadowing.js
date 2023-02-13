// case 1 var var shadowing is ALLOWED
// var a = 10 ;
// {
//     var a = 20 ; //UPDATES VALUE EVERYWHERE FOR GLOBAL
//     console.log(a);
// }
// console.log(a);

// output is :
// 20
// 20

// case 2 let let shadowing is ALLOWED

// let a = 10 ;
// {
//     let a = 20 ;
//     console.log(a); //shadowes previous value with 20
// }
// console.log(a); //fetches value from script still having a=10

// output is :
// 20
// 10


// case 3 let var shadowing is NOT ALLOWED

// let a = 10 ;
// {
//     var a = 20 ;
//     //ERROR Uncaught SyntaxError: Identifier 'a' has already been declared
//     console.log(a); //shadowes previous value with 20
// }
// console.log(a); //fetches value from script still having a=10

// output is :
// 20
// 10

// case 4 var let is ALLOWED

// var a = 10;
// {
//     let a = 20;
//     console.log(a); //access from BLOCK where a is 20, if above line is not present, it prints global var a=10
// }
// console.log(a); //prints global var a = 10

// output is : 
// 20
// 10