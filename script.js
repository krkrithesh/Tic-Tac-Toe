console.log("welcome to Tic Tac Toe")
let turn="X";
let gameover=false;
const changeTurn =()=>{
    return turn === "X"?"O":"X";
}

const checkWin =()=>{
    let boxtexts=document.getElementsByClassName("text");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== ""){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText + " Won"
            gameover=true
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }

    })

}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="It is your turn : " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.text');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    gameover=false;
    document.querySelector(".line").style.width=0
    document.getElementsByClassName("info")[0].innerText="It is your turn : " + turn;
})