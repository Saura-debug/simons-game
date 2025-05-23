let user = [];
let game = [];
let btns = ["purple", "red", "green", "yellow"];
let level = 0;


let started = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", ()=>{if(started == false){
    started = true;
    levelup();
}});

function gameflash(btn){
    btn.classList.add("white");
    setTimeout(()=>{btn.classList.remove("white")},200);

}

function levelup() {
    level++;
    h2.innerHTML = `Level ${level}`;
    let idx = Math.floor(Math.random()*3);
    let color = btns[idx];
    let btn = document.querySelector(`.${color}`);
    game.push(color);
    gameflash(btn);


}
function userflash(btn){
    btn.classList.add("black");
    setTimeout(()=>{btn.classList.remove("black")},200);    

}

function checkans(idx){
    if(user[idx] === game[idx]){
        if(user.length == game.length){
            setTimeout(levelup,1000);
            user = [];
        }
   
    }
          else {
        h2.innerHTML = `your score was ${level} please enter any key to restart the game `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{document.querySelector("body").style.backgroundColor = "white";},500);
        reset();

    }
   
}

function keypress() {
   let  btn = this;
    userflash(btn);
    let color = btn.getAttribute("id");
    user.push(color);
    checkans(user.length -1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",keypress);
}

function reset(){
    user = [];
    game = [];

   
    level = 0;
    started = false;
}
