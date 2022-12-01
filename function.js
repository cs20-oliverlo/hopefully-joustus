// Variables
const card = [propRat, redPropRat, blitzsteed, redBlitzsteed, blorb, redBlorb, beeto, redBeeto, dozeddrake, redDozeddrake, invisishade, redInvisishade, zamby, redZamby, fleeto, redFleeto, divedrake, redDivedrake, boneclang, redBoneclang, wizzem, redWizzem, superSkeleton, redSuperSkeleton, griffoth, redGriffoth, goldarmor, redGoldarmor, flailarmor, redFlailarmor, rookie, redRookie]

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

function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.strokeStyle = "rgb(0, 255, 0)";
    ctx.lineWidth = 4;
    ctx.strokeRect(selector.x, selector.y, selector.w, selector.h)
}

function moveSelectorUp() {
    if (state === "gameon" && selectorState === "hand") {
        if (playerTurn == 0) {
            selector.y += selectorIncrement.up;

            if (selector.y < selector.handTop) {
                selector.y = selector.handBottom
            }
        } else {
            selector.y += selectorIncrement.up;

            if (selector.y < selector.handTop) {
                selector.y = selector.handBottom
            }
        }
    }
}
  
function moveSelectorDown() {
    if (state === "gameon" && selectorState === "hand") {
        if (playerTurn == 0) {
            selector.y += selectorIncrement.down;

            if (selector.y > selector.handBottom) {
                selector.y = selector.handTop
            }
        } else {
            selector.y += selectorIncrement.down;

            if (selector.y > selector.handBottom) {
                selector.y = selector.handTop
            }
        }
    }
}
  
function moveSelectorRight() {
    if (state === "gameon") {
        if (playerTurn == 0) {
    
        } else {
        
        }
    }
}
  
function moveSelectorLeft() {
    if (state === "gameon") {
        if (playerTurn == 0) {
    
        } else {
        
        }
    }
}
  
  
function selectorConfirm() {
    if (state === "gameon" && selectorState === "hand") {
        if (playerTurn == 0) {
    
        } else {
        
        }
    }
}
  
function selectorCancel() {
    if (state === "gameon" && selectorState === "hand") {
        if (playerTurn == 0) {
    
        } else {
        
        }
    }
}

function reset() {
    playerTurn = Math.trunc(Math.random() * 2);
    state = "start";
    selector = {
        x: 50,
        y: 50,
        w: 100,
        h: 75,
        handTop: 50,
        handBottom: 250,
    };
    selectorState = "hand";
    selectorIncrement = {
        up: -100,
        down: 100
    };

    if (playerTurn == 0) {
        selector.x = 50;
        selector.y = 50
    } else {
        selector.x = 750
        selector.y = 50
    }
}