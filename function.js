// Variables
let playerTurn = "player1";
let state = "start";

function drawStart() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.clientWidth, cnv.height);

    // Start Text
    ctx.font = "40px shovel-knight";
    ctx.fillStyle = "white";
    ctx.fillText("Press Enter to Start", 170, 350)
}

function runGame() {
    drawMainComponents();
}

function moveSelectorUp1() {
    console.log("1u")
}

function moveSelectorUp2() {
    console.log("2u")
}

function moveSelectorDown1() {
    console.log("1d")
}

function moveSelectorDown2() {
    console.log("2d")
}

function moveSelectorRight1() {
    console.log("1r")
}

function moveSelectorRight2() {
    console.log("2r")
}

function moveSelectorLeft1() {
    console.log("1l")
}

function moveSelectorLeft2() {
    console.log("2l")
}

function selectorConfirm1() {
    console.log("1z")
}

function selectorConfirm2() {
    console.log("2z")
}

function selectorCancel1() {
    console.log("1x")
}

function selectorCancel2() {
    console.log("2x")
}

function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
}