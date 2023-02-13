// CASE 1
// let a = 10 ;

// {
//     let a = 20 ;
//     console.log(a) ;
// }

// console.log(a) ;

// output is :
// 20
// 10

// CASE 2

// {
//     var a= 10;
//     let b = 20;
//     const c= 30;

// a is declared in GLOBAL
// b and c is HOISTED inside the BLOCK SCOPE
// b and c can't be accessed outside this block scope

// console.log(a);
// console.log(b);
// console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// output is :
// 10
// 20
// 30
// 10
// reference error because b is not defined


// //CASE 3
// // SHADOWING IN JS

// var a = 1000; //var is declared in global ,set to 1000
// let x = 500 ; //x is present inside script
// {
//     var a = 100; // UPDATES or SHADOWES THE value of a from 1000 to 100 forever in global
//     let x = 50;  // new variable x inside BLOCK having value 50
//     console.log(a); // result 100
//     console.log(x); // result 50
// }

// console.log(a); //result 100
// console.log(x); //result 500, fetches value from SCRIPT. Also if line 47 is removed, then gives error x is not defined

// output is :
// 100
// 50
// 100
// 500
