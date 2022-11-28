// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (Once)
let mouseIsPressed = false;

// Global Variables (Reset)
let state;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // if (state === "start") {
  //   drawStart();
  // } else if (state === "gameon") {
  //   runGame();
  // } else if (state === "gameover") {
  //   drawGameOver();
  // }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mouseIsPressed = true;

  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function keydownHandler(event) {
  if (event.code == "ArrowUP") {
    console.log("up");
  } else if (event.code == "ArrowDown") {
    console.log("down");
  } else if (event.code == "ArrowRight") {
    console.log("right");
  } else if (event.code == "ArrowLeft") {
    console.log("left");
  } else if (event.code == "Digit1") {
    console.log("1");
  } else if (event.code == "Digit2") {
    console.log("2");
  } else if (event.code == "Digit0") {
    console.log("0");
  } else if (event.code == "Digit9") {
    console.log("9");
  }
}