let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level${level}`;
    
    let randomidx=Math.floor(Math.random()*btns.length);
    let randomcolor=btns[randomidx];
    let randBtn=document.querySelector(`.${randomcolor}`);
    
    gameseq.push(randomcolor);
    console.log(gameseq);

    gameflash(randBtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML=`game over!<b> your score was${level}</b><br> press any key to start`;
         
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);

        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn); 

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}