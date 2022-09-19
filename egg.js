// Alert function
function eggAlert(){
  // Alert message
    alert("This code is located in a separate js file.")

    //for loop will run 10 times
    // for(currTime = 10; currTime > -1; currTime--){
    //alert shows countdown value    
    //alert("currTime=" + currTime);
    //}
    
}
//Countdown function
function countofdown(pageElement){
  // Variable Definition
    var currTime = 10;
  // HTML Element
    pageElement.innerHTML = currTime;
    // currTime decrement loop
    for(let currTime = 10; currTime > -1; currTime--){
      // Timeout Function (1 second)
    setTimeout(function () {
        pageElement.innerHTML = currTime;
        ("currTime" - currTime);
    }, 1000);
    }
    // Print text for zero
    pageElement.innerHTML = "Blastoff!"; 
}
