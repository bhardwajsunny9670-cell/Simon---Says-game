let userSeq = [];
let gameSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red","green","purple"];

document.addEventListener("keydown", function(){
    if(started == false){
        console.log("GAme Satrted");
        started = true;

        levelUp();
      
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);}

    function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector((".")+randColor);
    //  console.log(randColor);
     gameSeq.push(randColor);
     console.log(gameSeq);

       gameFlash(randBtn);
}
function checkAns(idx){
    // let idx = level -1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);}
    }else{
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to Restart`;
         let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        },150);
        resetGame();
        
    }
    
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function resetGame(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}

