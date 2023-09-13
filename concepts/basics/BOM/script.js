
// console.log(alert("I am window"));


function sayHello() {

  console.log("Hello, world!");

}

sayHello();

var msg = () => {
  console.log("var msg = arrow function. this text is inside msg");
}

// console.log(msg); //this prints the whole msg function code
msg(); //this calls the msg function and then the code inside the msg function runs and here content inside log is printed







var btn = document.getElementById('btn'); //THIS ACCESSES ONLY THE FIRST MATCHING ELEMENT WITH ID btn
// console.log(btn);

btn.innerHTML = "changed btn text through innerhtml in js file" ;



// btn.addEventListener("click" , function(){
//   console.log("clicked on the button");
// } );   //THIS WORKS

// btn.addEventListener("click" , msg );  THIS WORKS TOO , JUST WRITE FUNCTION name msg  ... and NOT msg()


function printMe(){
  var timeInput = prompt("enter the time (in milliseconds) after which the message is to be printed : ");
  console.log(`time input ${timeInput}`);


  // setTimeout(msg , timeInput);

};

function printAfter(){
    var timeInput = prompt("enter the time (in milliseconds) after which the message is to be printed : ");
    // console.log(`time input ${timeInput}`);

    setTimeout( ()=>{
      console.log(`this button was clicked ${timeInput} ms ago OR this output is printed after that time`);
    } , timeInput);


};

btn.addEventListener("click" , printMe );

var buttons = document.querySelectorAll("#btn");
// console.log(buttons); //checking whether it returns all buttons with id btn or not

var secondButton = buttons[1]; //points to the index 1 of the buttons node list

//now adding click event listener 

secondButton.addEventListener('click' , printAfter );


console.log("helhl");

// let interval = setInterval(sayHello , 500);

// setTimeout(()=>{
//   clearInterval(interval) ; // clear the setInterval
// } , 5000);