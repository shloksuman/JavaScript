const collectionofwords = [ "hello", "this" , "is" , "related"] ;
console.log(collectionofwords);

/*
Output

(4) ['hello', 'this', 'is', 'related']
0: "hello"
1: "this"
2: "is"
3: "related"
length: 4
[[Prototype]] : Array(0)
*/




for(let i=0 ; i< collectionofwords.length ; i++){
    console.log(`collectionofwords[${i}] = ${collectionofwords[i]}`) ;
}


/*
output

collectionofwords[0] = hello
collectionofwords[1] = this
collectionofwords[2] = is 
collectionofwords[3] = related
*/


const myname = "Shlok" ;
const str = "This is a string" ;

const quotes = "Don't use single quotes, use double quotes" ;
const escapee = 'Don\'t use single quotes without the escape character' ;

const message = "First line. \nNew line created. \tTab space by slash-t";

console.log(myname);
console.log(str);
// for(let i=0 ; i< str.length ; i++){
//     console.log(`str[${i}] = ${str[i]}`) ;
// }
console.log("str[2] = " + str[2]);
console.log(`str[6] = ${str[6]}`);
console.log(quotes);
console.log(escapee);
console.log(message);


//--------------------------------------------------

// FUNCTIONS

console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const extrachar = "   I am having      extra spaces   " ;
console.log(extrachar.trim()); //trims starting spaces of string
console.log(extrachar.trimEnd());

console.log("str length = " + str.length);


//ASCII CODES

console.log("str[0] char code : " + str.charCodeAt(str[0]));

// IMPORTANT 
// REPLACE FUNCTION

const reply = "Rahul is good. Rahul is helpful. Rahul loves Anjali." ;

console.log("reply : " + reply);

console.log("-----------AFTER REPLACING RAHUL BY REPLACEALL--------------") ;

console.log("reply : " + reply.replaceAll("Rahul" , "Vicky")); //CASE SENSITIVE

console.log(reply.split(" "));
//output (9) ['Rahul', 'is', 'good.', 'Rahul', 'is', 'helpful.', 'Rahul', 'loves', 'Anjali.']
//splits the string into array wherever it contains space

console.log(reply.split("u"));
//output (5) ['Rah', 'l is good. Rah', 'l is helpf', 'l. Rah', 'l loves Anjali.']
//splits as soon as it detects u letter and stores that much part in array


//CONCATENATION
console.log(reply.concat("Tina loves Rahul."));
console.log(reply + "Tina loves Rahul.");


//SUBSTRING - PART OF STRING CAN BE PRINTED OR USED

console.log(reply.substring(3,15));
console.log(reply.substring(30)); // removes first 30 characters

console.log("does sentence start with Rahul : " + reply.startsWith("Rahul")); 
// startswith returns a BOOLEAN VALUE
console.log("does sentence include word 'loves' : " + reply.includes("loves"));

console.log("does sentence ends with word 'Vicky' : " + reply.endsWith("Vicky"));

console.log("index of good : " + reply.indexOf("good"));

console.log("last index of letter i : " + reply.lastIndexOf("i"));

//LEARN REGEX

// Search string
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// Any character that is not a word character or whitespace
const regex = /\bDog\b/gi;

console.log("paragraph.search(regex) : " + paragraph.search(regex)); //  -> 40

//---------------------------------------------------------------------

/*
Questions:
Try to replace “dog” with “cat” from   Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”
Write a function to convert string to lowercase;
Check “Fox” is includes .  Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”
Check String end with “?”  . Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”
Extract Amount from string → “ I bought car at ₹ 550000 “
*/

//------------question 1

// Try to replace “dog” with “cat” from   Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”

const para =  "he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?" ;

console.log(para.replaceAll("dog" , "cat"));

//question 2
console.log(para.toLowerCase());

//question 3
/* Check “Fox” is includes .  Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?” */
console.log("para = " + para);
console.log("does para include Fox : " + para.includes("Fox")); //CASE SENSITIVE, SO RETURNS FALSE

//question 5
// Extract Amount from string → “ I bought car at ₹ 550000 “

const sample = "I bought car at ₹ 550000" ;
// const result = sample.split(" ");
// console.log(result[5]);
const result2 = sample.split(" ")[5];
console.log(result2);