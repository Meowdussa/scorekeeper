const p1button = document.querySelector("#p1Button")
const p2button = document.querySelector("#p2Button")
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");


let gameOver= false;
let p1Score= 0;
let p2Score= 0;
let winningScore = 3;

p1button.addEventListener('click',function(){
    if(!gameOver){
        p1Score += 1; //to update the score
        if (p1Score === winningScore) {
            gameOver= true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            }
            p1Display.textContent = p1Score; // to display the new score
    }
  
});

p2button.addEventListener('click',function(){
    if(!gameOver){
        p2Score += 1; //to update the score
        if (p2Score === winningScore) {
            gameOver= true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');

            }
            p2Display.textContent = p2Score; // to display the new score
    }
});

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value); //to change the value to a number instead of a string
  reset();
})


resetButton.addEventListener('click', reset);

function reset(){
    gameOver= false;
    p1Score= 0;
    p2Score= 0;

    p1Display.textContent=0;
    p2Display.textContent=0;
    p2Display.classList.remove('winner','loser');
    p1Display.classList.remove('loser','winner');
};