
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


var consoleDiv = document.getElementsByClassName('output'); //NOT USEFUL
// console.log(consoleDiv);  //just checking

var consolee = document.querySelector(".output"); // USEFUL

// QUERY SELECTOR  IS BETTER THAN getElement



function printMe(){
  var timeInput = prompt("enter the time (in milliseconds) after which the message is to be printed : ");
  console.log(`time input ${timeInput}`);
  // consoleDiv.write("<br><h2>Time input ${timeInput}</h2>") ;
  // consoleDiv.innerHTML += "<br><h2>Time input ${timeInput}</h2>" ;
  // Get the `div` element with the class `console` //works
  // var consolee = document.querySelector(".console"); //works

  // Insert the HTML code for a new line
  // consolee.innerHTML += "<h2>you called me</h2>";  //works

  //--------------------------------------------------------
  // var consolee = document.querySelector(".output"); //works

  // console.log(consoleDiv);

  // Insert the HTML code for a new line
  // consoleDiv.innerHTML += "<h2>you called me</h2>";  // doesn't work

  consolee.innerHTML += `<h2>Time input ${timeInput}</h2>` ;

  // setTimeout(msg , timeInput);

};

function printAfter(){
    var timeInput = prompt("enter the time (in milliseconds) after which the message is to be printed : ");
    // console.log(`time input ${timeInput}`);
    var sec = "second" ; 
    if(timeInput>1000){
      sec="seconds";     //MINOR CORRECTION. DISPLAYS x seconds if x is greater than 1 second
    }

    setTimeout( ()=>{
      console.log(`this button was clicked ${timeInput/1000} ${sec} ago OR this output is printed after that time`);
    } , timeInput );


};

btn.addEventListener("click" , printMe );

var buttons = document.querySelectorAll("#btn");
// console.log(buttons); //checking whether it returns all buttons with id btn or not

var secondButton = buttons[1]; //points to the index 1 of the buttons node list

//now adding click event listener 

// https://stackoverflow.com/questions/51660145/double-click-not-working-when-chrome-web-inspector-open

// It turns out that when you enable the "Toggle device toolbar" you lose the ability to double click when
// Web Inspector is open. Turing the "Toggle device toolbar" feature back off allowed me to trigger "dblclick" events 
// in the browser again

secondButton.addEventListener("dblclick" , printAfter );
// secondButton.addEventListener("click" , printAfter );


console.log("--------------");

// let interval = setInterval(sayHello , 500);

// setTimeout(()=>{
//   clearInterval(interval) ; // clear the setInterval
// } , 5000);

//--------------------------------------------------------

// CREATING A CLEAR CONSOLE BUTTON WHICH CLEARS THE OUTPUT PRINTED TILL NOW

var clearBtn = document.getElementById('clearConsole');
// console.log(clearBtn);

function clearConsole(){
  consolee.innerHTML = "" ; //SETS THE VALUES INSIDE DIV WITH CLASS CONSOLE = NULL/EMPTY/ CLEARS THE DIV
}

clearBtn.addEventListener("click" , clearConsole);