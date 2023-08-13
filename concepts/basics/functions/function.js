// Default parameters example
// we can pass default values to parameter, if no values in passed in parameters

function calculateArea(width, height = 1){
const area = width * height;
return area;
}

var ar = calculateArea(21 , 10);
//console.log("width is : " , width , " height is : " , height) ;
console.log("area is : " , ar);
