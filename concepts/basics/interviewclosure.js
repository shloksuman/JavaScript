function x(){
    var a= 7 ;
    function y(){
        console.log(a); //closure - function + its lexical environment
    }
    return y;
}

x()();

// x() - returns the function inner
// x() is returning y in line 6 , so gives the whole function code of y along with its lex envi 
// so we have just GOT THE FUNCTION BUT THE FUNCTION HAS NOT YET BEEN CALLED TO CALL A FUNCTION WE WILL INVOKE IT BY AGAIN USING PARENTHESES, 
// hence x() is just function code , and function is called again by adding one more PARENTHESES

// x()() - calls the function inner



// DOING THIS IS SAME AS

// var z = x() ; x() returns y that is the function y is put into z 
// now z contains function code , z is a function now , z sort of behaves like a function
// now we INVOKE/CALL z 

// z();