//Select the innerText
let number = document.getElementById("countdownNumbers");

//console.log(number.innerText);
//create a button to start the countdown from 60 seconds
//Select the button
const button = document.getElementById("countdownButton");
let isFunctionOn = true;

let bellSound = new Audio('./bell.wav');

//function for event listener
const countdown = function (){
    number.innerText = "59";
    let intervalId = setInterval(() => {
      (number.innerText--); 
      
      // Decrement after 1 second
      if (number.innerText <= 0) {
        //Added a sound once countdown hits 0
        bellSound.play();      
        // console.log("the song should play here in this moment");
        clearInterval(intervalId);
      }  
    }, 1000);    
}


//Reset the timer once we get to 0.

//only run function one time when the button is clicked

//This adds the event listener once
button.addEventListener("click", countdown, {once:true});
