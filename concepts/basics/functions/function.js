// Default parameters example
// we can pass default values to parameter, if no values in passed in parameters

function calculateArea(width, height = 1){
    console.log("width : ", width , " height : ", height);
    const area = width * height;
    return area;
}

var ar = calculateArea(21 , 10);
//console.log("width is : " , width , " height is : " , height) ;
console.log("area is : " , ar);


//--------------------------------------------------

//creating ANONYMOUS FUNCTION

//NOTICE here we directly assigned the parameter after the 
//keyword 'function' and did not NAME the function
const login = function (username, password){
    console.log("username" , username);
};

login("shlok"); //SO login has become a function , and it can now
//be called and values be passed into it


//---------------------------------------------------

//creating CALLBACK FUNCTION -
// def - passing another function to a function as a parameter

function printMessage(message , callback){
    console.log(message);
    callback();
}

function sayBye(){
    console.log("Bye bro I am saybye function") ;
}

printMessage("calling printmessage and passing sayBye into it as callback", sayBye);

printMessage("passing anony" , function (){
    console.log('I am anonymous function');
});

