let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0]= {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function comida(){
    context.fillStyle = "black";
    context.fillRect(food.x, food.y,box,box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 &&  direction!="right"){
        direction = "left"}
    
    if(event.keyCode == 38 &&  direction!="up"){
        direction = "down"}
    
    if(event.keyCode == 39 &&  direction!="left"){
        direction = "right"}
    
    if(event.keyCode == 40 &&  direction!="down"){
        direction = "up"}
    
}

function iniciarJogo(){
    if(cobra[0].x > 15 * box && direction == "right"){ cobra[0].x = 0;}
    if(cobra[0].x < 0  && direction == "left"){ cobra[0].x = 16 * box;}
    if(cobra[0].y > 15 * box && direction == "up"){ cobra[0].y = 0;}
    if(cobra[0].y < 0  && direction == "down"){ cobra[0].y = 16 * box;}
    
    for(i = 1; i<cobra.length; i++){
        if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y ){
            clearInterval(jogo);
            alert("Você morreu");
        }
    }

    criarBG();
    cobrinha();
    comida();

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

    if(cobrax != food.x || cobray != food.y){
        cobra.pop();
    }
    else{
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

   

    let newHead = {
        x: cobrax,
        y: cobray
    }
    cobra.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);