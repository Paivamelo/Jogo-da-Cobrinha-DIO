let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0]= {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function cobrinha(){
    for(i=0; i<cobra.length; i++){
        context.fillStyle = "black";
        context.fillRect(cobra[i].x,cobra[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    cobrinha();

    let cobrax = cobra[0].x;
    let cobray = cobra[0].y;

    if(direction=="right"){
        cobrax += box;
    }
    if(direction=="left"){
        cobrax -= box;
    }

    if(direction=="up"){
        cobray += box;
    }
    if(direction=="down"){
        cobray -= box;
    }

    cobra.pop();

    let newHead = {
        x: cobrax,
        y: cobray
    }
    cobra.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);