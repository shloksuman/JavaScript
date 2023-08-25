
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



