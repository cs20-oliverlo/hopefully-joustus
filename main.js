// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1080;
cnv.height = 720;

// Global Variables (Once)
let mouseIsPressed = false;

// Global Variables (Reset)

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
  if (event.code === "ArrowUp") {
    if (state === "gameon") {
      if (playerTurn === "player1") {
        moveSelectorUp1();
      } else if (playerTurn === "player2") {
        moveSelectorUp2();
      }
    }

  } else if (event.code === "ArrowDown") {
    if (state === "gameon") {
      if (playerTurn === "player1") {
        moveSelectorDown1();
      } else if (playerTurn === "player2") {
        moveSelectorDown2();
      }
    }

  } else if (event.code === "ArrowRight") {
    if (state === "gameon") {
      if (playerTurn === "player1") {
        moveSelectorRight1();
      } else if (playerTurn === "player2") {
        moveSelectorRight2();
      }
    }

  } else if (event.code === "ArrowLeft") {
    if (state === "gameon") {
      if (playerTurn === "player1") {
        moveSelectorLeft1();
      } else if (playerTurn === "player2") {
        moveSelectorLeft2();
      }
    }

  } else if (event.code === "KeyZ") {
    if (state === "gameon") {
      if (playerTurn === "player1") {
        selectorConfirm1();
      } else if (playerTurn === "player2") {
        selectorConfirm2();
      }
    }

  } else if (event.code === "KeyX") {
    if (state === "gameon") {
      if (playerTurn === "player1") {
        selectorCancel1();
      } else if (playerTurn === "player2") {
        selectorCancel2();
      }
    }

  } else if (event.code === "Enter") {
    console.log("Enter");

    if (state === "start") {
      state = "gameon";
    }
  }
}