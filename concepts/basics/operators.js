let a = 25;
let b = 10;
let c = 2 ;

console.log("a = " , a);
console.log("b = " , b);
console.log("c = " , c);

console.log("a + b = "  , a+b) ;
console.log("a * b = "  , a*b) ;
console.log("a - b = "  , a-b) ;
console.log("a / b = "  , a/b) ;
console.log("a % b = "  , a%b) ;
console.log("b^c = "  , b**c) ;
console.log("a++ = "  , a++) ;
console.log("a = "  , a) ;
console.log("++a = "  , ++a) ;

//ASSIGNMENT OPERATORS

console.log("a = " , a);
console.log("b = " , b);
console.log("a = a+b =  " , a=a+b);
console.log("a = " , a);
console.log("b = " , b);

console.log("a == b : " , a==b ); // == returns whether a and b are equal or not

// it falsely marks let a = 4 , let b = "4" as true , but === strictly returns false

//CONDITIONALS

const score = 94;

if(score>90){
    console.log("your score is : " , score) ;
    console.log("You are good bro! but get some life!");
}

switch(1){
    case 1 : console.log("this is first case"); break;
    case 2 : console.log("this is second case"); break;
    case 3 : console.log("this is third case"); break;
    case 4 : console.log("this is fourth case"); break;
    default : console.log("this is the default case"); break;
}

// switch Example  1 

const num1 = 5;
const num2 = 8;
const operation = "+";
let result;

switch (operation) {
  case "+":
    result = num1 + num2;
    console.log(result);
    break;
  case "-":
    result = num1 - num2;
    console.log(result);
    break;
  case "*":
    result = num1 * num2;
    console.log(result);
    break;
  case "/":
    result = num1 / num2;
    console.log(result);
    break;
  default:
    result = "Invalid operator";
    break;
}



