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

login("height"); //SO login has become a function , and it can now
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

//-------------------------------------------------

// IMMEDIATELY INVOKED FUNCTION IIFE

(function(){
    console.log("this is an IIFe");
})();

//   ( add function   )() ; 
//   this directly calls the function without invoking anywhere else


//--------------------------------------------------

// creating ARROW FUNCTION

const arrowFunction = ()=>{
    return "hello";
}

var c = arrowFunction();
console.log(c);

const calcArea = (height, width)=> {  //THIS FUNCTION
    return height * width;
};

const area1 = calcArea(23, 22) ;
console.log("area " , area1);

const calcArea1 = (height, width)=> height*width ; //AND THIS FUNCTION ARE EXACTLY SAME

const area2 = calcArea1(20,19);
console.log("area 2 : " , area2) ;


//-----------------------------------

// Question 1
// Print 15 , 16 , 17 tables using function
// Function name should be generateTable()


function generateTable(num){
    for(let i = 1 ; i<=10 ; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

// const num1 = parseInt(prompt("Enter the value whose table you want to see : "));

// generateTable(num1);
generateTable(16);
generateTable(17);


//--------------------------------------

// Question 2 
// Create a function that calculate area of circle
// Function name should be calcAreaOfCicle()
// create another function calcSquare()
// Pass calcAreaOfCicle function as callback of calcSqaure
// like - calcSqaure(calcAreaOfCircle)
// store value of calculated value in result
//  like - result = calcSqaure(calcAreaOfCircle)
// then print result;

