
//a(); a is called easily, during hoisting function a is created and assigned the function/code written inside 
//b(); var b is undefined here and invoking something like b() gives typeerror since it will only work when js
//engine reaches to the line 12 and assigns function to var b 

//DIFFERENCE between statement and expression is HOISTING

//funtion statement aka function declaration
function a(){
    console.log("a function is called");
}
a();
//function expression 
var b = function (){
    console.log("function is passed into var b and then b() is invoked");
}
b();

//named function expression ( expression with name )
var c = function xyz(){
    console.log(xyz);
    console.log("named function expression xyz");
}
c();
// xyz();   gives REFERENCE ERROR, this xyz is not created in the global scope hence not recognised