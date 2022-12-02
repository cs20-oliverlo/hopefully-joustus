// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1080;
cnv.height = 720;

// Global Variables (Once)
let mouseIsPressed = false;

// Global Variables (Reset)
let state;
let playerTurn;
let selector;
let selectorState;
let selectorIncrement;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // console.log(state);

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function keydownHandler(event) {
  if (event.code === "KeyW") {
    moveSelectorUp();
  } else if (event.code === "KeyS") {
    moveSelectorDown();
  } else if (event.code === "KeyD") {
    moveSelectorRight();
  } else if (event.code === "KeyA") {
    moveSelectorLeft();
  } else if (event.code === "KeyJ") {
    selectorConfirm();
  } else if (event.code === "KeyK") {
    selectorCancel();
  } else if (event.code === "Enter") {
    console.log("Enter");

    if (state === "start") {
      state = "gameon";
    }
  }
}