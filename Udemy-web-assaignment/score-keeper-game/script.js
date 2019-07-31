var p1Selector = document.querySelector("#p1-score");
var p2Selector = document.querySelector("#p2-score");
var btn = document.querySelectorAll("button");
var winningScoreDisplay = document.querySelector("#play-to");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

btn[0].addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Selector.classList.add("winner");

        }
        p1Selector.textContent = p1Score;
    }
})

btn[1].addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Selector.classList.add("winner");
                }
        p2Selector.textContent = p2Score;
    }
})

btn[2].addEventListener("click", function(){
    reset();
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Selector.textContent = p1Score;
    p2Selector.textContent = p2Score;
    p1Selector.classList.remove("winner");
    p2Selector.classList.remove("winner");
}