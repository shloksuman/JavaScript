var myTotalMark = 99 ;
var myTotalMark2 = "12" ;
var name = "Shlok" ;

var flag = true ;

var pseudoName ;

console.log(pseudoName);  // prints undefined

var object = { 
    name : "Shlok",
    age : 15 ,
} ;

var myArray = [ 1, 2, 3 ,13 ,11] ;
var myArray2 = [ 1, 2, "rahul" ] ;

console.log(myArray[3]) ;
console.log(myArray[4]) ;
console.log(myArray2[2]);

var map = new Map([[ false , "hello"]]) ;
var newSet = new Set([0,0,0,3,4,12]) ;

console.log(newSet); // only printes  UNIQUE values

const num = "86" ; // const is always initialized with value

console.log(parseInt(num)); // parseInt converts string to number

let a = 1 ;
var b ;


b= "bbb" ;

const fixed= 56; // we can't use this same name anywhere else and can't re initialize it

console.log("The value of let a is : " , a);
console.log("The value of var b is : " , b);
console.log("The value of const fixed is : " , fixed);

function dem(){
    console.log("entered function");
    let a = 14 ; // writing let a= 14 here , doesn't change the value of outside let a
    //when a is called outside this function , it will return global scope a's value which is 1
    b = "b is changed inside local scope" ;
    //so pehle it accesses the inner one , then accesses the outer one, incase of let and var
    console.log("The value of a inside the local scope : " , a);
    console.log("The value of var b inside the scope is : " , b);

    console.log("exited function");

}

dem();

console.log("The value of let outside is : " , a);
console.log("The value of var b outside is : " , b);

//  TRY TO ONLY USE LET AND CONST , AVOID VAR



