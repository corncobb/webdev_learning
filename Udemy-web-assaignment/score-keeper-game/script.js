var btn = document.querySelectorAll("button");
var play_to = document.querySelector("#play-to");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

btn[0].addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
        }
        document.querySelector("#p1-score").textContent = p1Score;
    }
})

btn[1].addEventListener("click", function(){
    p2Score++;
    document.querySelector("#p2-score").textContent = p2Score;
})

btn[2].addEventListener("click", function(){
    alert("Reset was clicked!");
})