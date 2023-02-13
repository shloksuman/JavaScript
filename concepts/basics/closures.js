// function x(){
//     var x= 7 ;
//     function y(){
//         console.log(x); //closure - function + its lexical environment
//     }
//     y();
// }
// x();

// output is : 
// 7

function x(){
    var x= 7 ;
    function y(){
        console.log(x); //closure - function + its lexical environment
    }
    x = 71; //this 'x' references to x's value in memory which has now become 71, thereby it prints 71
    return y; //this line is equivalent to
    // return  function y(){
    //     console.log(x); //closure - function + its lexical environment
    // }
}
var z = x();
console.log(z); //this prints ƒ y(){
   //                         console.log(x); //closure - function + its lexical environment
//                              }
// it means whole function is inside z along with its lexical environment ie var a = 7 is also present inside


// MOST IMPORTANT MY CONCLUSION
// Z HAS TRANSFORMED INTO FUNCTION
// HENCE IT PRINTS ITS FUNCTION CODE UPON CONSOLE.LOG(Z) AND WHEN INVOKED LIKE A FUNCTION
// BY WRITING Z() , IT PRINTS 7

//imp line
z(); //this prints 7 // since whole function is there along with lex envi , so it has var a = 7 which gets printed