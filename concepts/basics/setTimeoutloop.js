// function x(){
//     for( var i = 1 ; i<=5 ; i++){
//         setTimeout(function (){
//             console.log(i);
//         } , i*1000 ) ;
//     }
//     console.log("Text below timeout");
// }

// x();

// output is :
// 6
// 6
// 6
// 6
// 6

// the loop runs five times and each time function is attached with timer 1000 ,2000 ,3000, 4000 ,5000 and at last value of i increments and becomes 6 and condition i<=6 fails so loop is broken, meanwhile the line 7 is already executed 'text below timeout'
// after that the timer 1000 ends and it tries to print the value of i , which has now becomes 6, as i references to the value it holds therefore it prints 6
// then timer 2000 ends and value of i = 6 is printed 
// again timer 3000 ends and 6 is printed 
// and so on


//TO AVOID THIS 
//FIRST METHOD - USE 'LET' instead of 'VAR' 
//this created a whole new block scope and each i has its own identity ( a new copy of i is created) , unlike the referencing which was used earlier in case of 'var'


// function x(){
//     for( let i = 1 ; i<=5 ; i++){
//         setTimeout(function (){
//             console.log(i);
//         } , i*1000 ) ;
//     }
//     console.log("Text below timeout");
// }

// x();


//SECOND METHOD - WRAP THE SETTIMEOUT INSIDE ANOTHER FUNCTION AND SUPPLY IT VALUE WHILE INVOKING IT . THEREBY EACH FUNCTION CALL WILL BE HAVING DIFFERENT VALUE OF i ASSIGNED TO IT. EACH FUNCTION COPY HAS ITS OWN VALUE OF i


function x(){
    for( let i = 1 ; i<=5 ; i++){
       function abc(x){
        setTimeout(function (){
            console.log(x);
        } , x*1000 ) ;
       }
       abc(i) ; 
    }
    console.log("Text below timeout");
}

x();