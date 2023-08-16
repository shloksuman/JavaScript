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
console.log(quotes);
console.log(escapee);
console.log(message);

