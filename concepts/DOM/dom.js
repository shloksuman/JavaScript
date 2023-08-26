
console.log(document.body.parentNode);

// This will select parent of body 
// parent of body is html

console.log(document.body.childNodes);
console.log(document.body.childNodes[3]);

console.log("return body.lastchild : ");
console.log(document.body.lastChild);

// childNodes approach to get nodes is REALLY BAD
// PREFER USING CHILDREN TO ACCESS ONLY THE MAIN ELEMENTS

console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);

//console.log(document.body.children[1].previousElementSibling);

// There is even better way to select element in DOM elements
// getElementById → we can directly select element using its id
// getElementByClassName → we can select element using its class name
// getElementByName → we can select element using name attribute
// getElementByTagName → we can select element using tag

console.log(document.getElementById("nav"));
console.log(document.getElementsByClassName('hero')); // returns array

console.log(document.getElementsByTagName("footer"));


console.log(document.querySelector("#nav"));
console.log(document.querySelectorAll(".hero")); //returns object
console.log(document.querySelectorAll("#nav"));

const heroobject = document.querySelectorAll(".hero");

for(let i of heroobject){
    console.log(i);
}

// now converting the object into array

const convertedobject = Array.from(heroobject);
console.log(convertedobject);

const ele = document.querySelectorAll("ul > li:first-child");
//below command is invalid , because syntax is wrong, no space must be between li:first
//const ele = document.querySelectorAll("ul > li  :   first-child"); 
console.log(ele[0].innerHTML);


//USING GETATTRIBUTE ,SETATTRIBUTE

const att = document.querySelector("ul > li:first-child").getAttribute("font");
console.log("att : ", att);

document.querySelector("ul > li:first-child").setAttribute("newattri" , 2);

console.log(document.querySelector("ul >li:first-child"));

const att2 = document.querySelector("header").getAttribute("demp");
console.log("att2 demp : " , att2);

const att3 = document.querySelector("footer").setAttribute("data-foot" , 1);
console.log("added data-foot using setAttribute : ",document.querySelector("footer"));

const att4 = document.querySelector("footer").dataset.foot ;
console.log("att4 data-foot : " , att4);

// always use data-new format "new" here is customizable , use any other 
// this is used while making user-defined attributes

// More Operations we can perform on element nodes
// createElement(”div”) → for  creating new element we use this syntax
// createTextNode(”Hello”) →  for creating text element we use this syntax
// append() → for attaching element at end of other element ( inside )
// prepend() → for attaching element at start of other element ( inside )
// before() → for attaching element , before other element
// after() → for attaching element , after other element
// replaceWith() → for replacing element with other element
// remove() → for removing element 
// classlist.remove(”name”) → removes class
// classlist.add(”name”) → add class
// classlist.toggle(”name”) → if exist then remove , if not exist then adds
 
// innerHtml() → for adding html inside other element
// outerHtml() → for adding html outside 

const heading = document.createElement("h1");
const text = document.createTextNode("\nThis is inserted using append , and created by createtextnode");
const text2 = document.createTextNode("\ntext 2 is prepend");
heading.append(text);
heading.prepend(text2);
heading.append("\ni am the last one");
console.log(heading);

//now adding the above created elements inside the main inner html file

document.getElementsByTagName("footer")[0].append(heading);

function myFunction(){
    alert("You have clicked the button!")
}


