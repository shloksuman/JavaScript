// --------FIRST------

// function counter(){
//     var count = 0;
//     function increment(){
//         count++;
//     }
// }

// console.log(count);

// example of data hiding
//in the above code , we have hidden our variable count inside counter which can be accessed by code inside it
//only and if we try to access it in outside globally from line 8 , it gives reference error


//------ SECOND -------

//to access the above count , we first take access to increment which has already formed closure with its lex 
//doing this below
function counter(){
    var count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}


var counter1 = counter();
counter1();