const p1button = document.querySelector("#p1Button")
const p2button = document.querySelector("#p2Button")
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");


let gameOver= false;
let p1Score= 0;
let p2Score= 0;
let winningScore = 5;

p1button.addEventListener('click',function(){
    if(!gameOver){
        p1Score += 1; //to update the score
        if (p1Score === winningScore) {
            gameOver= true;
            }
            p1Display.textContent = p1Score; // to display the new score
    }
  
});

p2button.addEventListener('click',function(){
    if(!gameOver){
        p2Score += 1; //to update the score
        if (p2Score === winningScore) {
            gameOver= true;
            }
            p2Display.textContent = p2Score; // to display the new score
    }
   
    
    
});