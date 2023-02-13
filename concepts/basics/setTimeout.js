function x(){
    var i = 1 ;
    setTimeout(function (){ //this function forms a closure hence, it has access to the value 'i' is referencing so wherever this function is called , it takes the REFERENCE to 'i' with it
        console.log(i);
    } , 3000 ) ;
    //javascript stores the fn inside settimeout and attaches the timer 3000ms to it and procees to printing the next line 'text below timeout' immediately and as soon as the timer is finished , value is i is printed
    console.log("Text below timeout");
}

x();

    // output is:
    // Text below timeout 
    // (waits for 3 second then print i = 1)
    // 1