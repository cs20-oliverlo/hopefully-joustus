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
    if (state === "gameon" && selector.state === "hand") {
        if (playerTurn == 0) {
            if (selector.state === "hand") {
                selector.y += selector.incUp;

                if (selector.y < selector.handTop) {
                    selector.y = selector.handBottom
                }
            }
        } else {
            if (selector.state === "hand") {
                selector.y += selector.incUp;

                if (selector.y < selector.handTop) {
                    selector.y = selector.handBottom
                }
            }
        }
    }
}
  
function moveSelectorDown() {
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "hand") {
                selector.y += selector.incDown;

                if (selector.y > selector.handBottom) {
                    selector.y = selector.handTop
                } 
            }
        } else {
            if (selector.state === "hand") {
                selector.y += selector.incDown;

                if (selector.y > selector.handBottom) {
                    selector.y = selector.handTop
                }
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
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "hand") {

            }

        } else {
            if (selector.state === "hand") {

            }

        }
    }
}
  
function selectorCancel() {
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "hand") {

            }

        } else {
            if (selector.state === "hand") {

            }

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
        state: "hand",
        incUp: -100,
        incDown: 100
    };

    if (playerTurn == 0) {
        selector.x = 50;
        selector.y = 50
    } else {
        selector.x = 750
        selector.y = 50
    }
}

// USE FOR LATER

// var suits = [];
// suits["spades"] = [
//   // spades
//   ["A", "spade"],
//   ["2", "spade"],
//   ["3", "spade"],
//   ["4", "spade"],
//   ["5", "spade"],
//   ["6", "spade"],
//   ["7", "spade"],
//   ["8", "spade"],
//   ["9", "spade"],
//   ["10", "spade"],
//   ["J", "spade"],
//   ["Q", "spade"],
//   ["K", "spade"]
// ];

//   // declare vars
// var i = deck.length,
//     temp,
//     rand;
//   // while there remain elements to shuffle
// while (0 !== i) {
//     // pick a remaining element
//     rand = Math.floor(Math.random() * i);
//     i--;
//     // and swap it with the current element
//     temp = deck[i];
//     deck[i] = deck[rand];
//     deck[rand] = temp;
// }