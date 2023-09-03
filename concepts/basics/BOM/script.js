
function sayHello() {

  console.log("Hello, world!");

}



let interval = setInterval(sayHello , 500);

setTimeout(()=>{
  clearInterval(interval) ; // clear the setInterval
} , 5000);