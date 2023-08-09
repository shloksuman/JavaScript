console.log("This loop js file is working!");

// without loops 
// print 1 - 10 number on console

console.log(1);console.log(2);console.log(3);
console.log(4);console.log(5);console.log(6);
console.log(7);console.log(8);console.log(9);
console.log("hello");

// using loops
for(let i = 1 ; i <= 10 ; i++){
 console.log(i );
}

// Look above line of code i have used loops reduce code
// no need need to write 10 lines of console log 🤣


//while loop

let j =1;

while(j<10){
    console.log("Print j = " , j);
    j++;
}


for(let k = 1 ; k <= 10 ; k++){
    if(k%2==0){
    console.log("k is = ", k );
    }
   }

/*
Questions:
Print Even number upto 60 using for loop

Given a number n Calculate the factorial of the number

Write table for 19 using loop

Write a program that will allow someone to guess a four digit pin exactly 4 times. If the user guesses the number correctly. It prints “That was correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
*/

//first question Print Even number upto 60 using for loop

console.log("............");

for(let m=2 ; m<=60 ; m+=2){
    console.log("m = " , m);
}


console.log("...........");

//second question Given a number n Calculate the factorial of the number


var fact = 1;

for(var num = 8 ; num>=1; --num){
    if(num==1){
        console.log("factorial is : " , fact) ;
    }
     fact =  fact * (num);
}

console.log("...........");


//third question Write table for 19 using loop


for(let g = 1 ; g<=10 ; g++){
    console.log("19 * " , g , " = " , 19*g ) ;
    console.log(`19 * ${g} = ${19*g}`); //USING BACKTICKS
}

console.log("...........");



/* Write a program that will allow someone to guess a four digit pin exactly 4 times. If the user guesses the number correctly. It prints “That was correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. */

const defaultPin = 1111;
const guessMessage = "Please make your guess : " ;
const wrongMessage = "Sorry that was wrong!" ;
const correctMessage = "That was Correct!" ;
const maxAttempt = 4;

let currentAttempt = 0;

for(let i = 1; i<= maxAttempt ; i++){

    console.log(guessMessage);
    //take user input

    const userInput= parseInt(prompt(`Attempt remaining : ${maxAttempt-currentAttempt} \n ${guessMessage}`)) ;

    if(userInput==defaultPin){
        console.log(correctMessage);
        break;
    }
    else {
        console.log(wrongMessage);
    }

    currentAttempt++;

    //compare user input with default input
    
    //if correct input, then print correctMessage, else wrongMessage is printed, then retry
}

console.log(".........");







