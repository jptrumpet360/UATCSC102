// Alert function
function eggAlert(){
  // Alert message
    alert("This code is located in a separate js file called week3.js.") 
}
//Countdown function
function countofdown(pageElement){
  // Variable Definition
    var currTime = 10;
    // currTime decrement loop
    for(currTime = 10; currTime > -1; currTime--){
  // HTML Element
    pageElement.innerHTML = currTime;
    currTime = currTime - 1
    
      
   }
   // Halfway warning If statement
    if(currTime < 5) {
     alert("Warning! Less than halfway to launch!");
    }
    // Blast Off If statement
    if(currTime < 0) {
        alert("Blast Off!");
    }
    
    }
  