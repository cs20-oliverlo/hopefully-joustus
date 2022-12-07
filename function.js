// Variables

function drawStart() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.clientWidth, cnv.height);

    // Start Text
    ctx.font = "20px shovel-knight";
    ctx.fillStyle = "white";
    ctx.fillText("Press Enter to Start", 170, 240)
}

function runGame() {
    drawMainComponents();
}

// var gaga = 

function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.drawImage(propRat.img, 50, 50, card.handW, card.handH);
    ctx.drawImage(redPropRat.img, 570, 50, card.handW, card.handH);

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
            } else if (selector.state === "placing") {

            }
        } else {
            if (selector.state === "hand") {
                selector.y += selector.incUp;

                if (selector.y < selector.handTop) {
                    selector.y = selector.handBottom
                }
            } else if (selector.state === "placing") {

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
            } else if (selector.state === "placing") {

            }
        } else {
            if (selector.state === "hand") {
                selector.y += selector.incDown;

                if (selector.y > selector.handBottom) {
                    selector.y = selector.handTop
                }
            } else if (selector.state === "placing") {

            }
        }
    }
}
  
function moveSelectorRight() {
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "placing") {

            }
        } else {
            if (selector.state === "placing") {
                
            }
        }
    }
}
  
function moveSelectorLeft() {
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "placing") {

            }
        } else {
            if (selector.state === "placing") {

            }
        }
    }
}
  
  
function selectorConfirm() {
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "hand") {

            } else if (selector.state === "placing") {

            }
        } else {
            if (selector.state === "hand") {

            } else if (selector.state === "placing") {

            }
        }
    }
}
  
function selectorCancel() {
    if (state === "gameon") {
        if (playerTurn == 0) {
            if (selector.state === "placing") {

            }
        } else {
            if (selector.state === "placing") {

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
        h: 100,
        handTop: 50,
        handBottom: 290,
        state: "hand",
        incUp: -120,
        incDown: 120
    };
    card = {
        handW: 100,
        handH: 100,
        tableW: 50,
        tableH: 50
    };

    if (playerTurn == 0) {
        selector.x = 50;
        selector.y = 50;
    } else {
        selector.x = 570;
        selector.y = 50;
    }

    propRat = {
        img: document.getElementById("card1"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    redPropRat = { 
        img: document.getElementById("card2"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    blitzsteed = {
        img: document.getElementById("card3"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    redBlitzsteed = {
        img: document.getElementById("card4"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    blorb = {
        img: document.getElementById("card5"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    redBlorb = {
        img: document.getElementById("card6"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    beeto = {
        img: document.getElementById("card7"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    redBeeto = {
        img: document.getElementById("card8"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    dozeddrake = {
        img: document.getElementById("card9"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    redDozeddrake = {
        img: document.getElementById("card10"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    invisishade = {
        img: document.getElementById("card11"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    redInvisishade = {
        img: document.getElementById("card12"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    zamby = {
        img: document.getElementById("card13"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    redZamby = {
        img: document.getElementById("card14"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    fleeto = {
        img: document.getElementById("card15"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    redFleeto = {
        img: document.getElementById("card16"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    divedrake = {
        img: document.getElementById("card17"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    redDivedrake = {
        img: document.getElementById("card18"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    boneclang = {
        img: document.getElementById("card19"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    redBoneclang = {
        img: document.getElementById("card20"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    wizzem = {
        img: document.getElementById("card21"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    redWizzem = {
        img: document.getElementById("card22"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 0,
        leftArrow: 1,
        selected: false
    }
    superSkeleton = {
        img: document.getElementById("card23"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    redSuperSkeleton = {
        img: document.getElementById("card24"),
        topArrow: 0,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    griffoth = {
        img: document.getElementById("card25"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    redGriffoth = {
        img: document.getElementById("card26"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 0,
        selected: false
    }
    goldarmor = {
        img: document.getElementById("card27"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    redGoldarmor = {
        img: document.getElementById("card28"),
        topArrow: 1,
        bottomArrow: 0,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    flailarmor = {
        img: document.getElementById("card29"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    redFlailarmor = {
        img: document.getElementById("card30"),
        topArrow: 1,
        bottomArrow: 1,
        rightArrow: 1,
        leftArrow: 1,
        selected: false
    }
    rookie = {
        img: document.getElementById("card31"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
    redRookie = {
        img: document.getElementById("card32"),
        topArrow: 0,
        bottomArrow: 0,
        rightArrow: 0,
        leftArrow: 0,
        selected: false
    }
}

// USE FOR LATER

// Each card will be made of: an image, size variables, x and y coords, values for each of their sides (arrows/no arrows), and maybe a name

// var suits = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

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

// This is a continuation of the var suits = [...] and var values = [...]
// function getDeck() {
// 	let deck = new Array();
// 	for (let i = 0; i < suits.length; i++) {
// 		for (let x = 0; x < values.length; x++) {
// 			let card = {Value: values[x], Suit: suits[i]};
// 			deck.push(card);
// 		}
//  }
// 	return deck;
// }