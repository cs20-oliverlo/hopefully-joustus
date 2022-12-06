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

    ctx.drawImage(wizzem.img, 50, 50, card.handW, card.handH);

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
}

let propRat = {
    img: document.getElementById("card1")
}
let redPropRat = { 
    img: document.getElementById("card2")
}
let blitzsteed = {
    img: document.getElementById("card3")
}
let redBlitzsteed = {
    img: document.getElementById("card4")
}
let blorb = {
    img: document.getElementById("card5")
}
let redBlorb = {
    img: document.getElementById("card6")
}
let beeto = {
    img: document.getElementById("card7")
}
let redBeeto = {
    img: document.getElementById("card8")
}
let dozeddrake = {
    img: document.getElementById("card9")
}
let redDozeddrake = {
    img: document.getElementById("card10")
}
let invisishade = {
    img: document.getElementById("card11")
}
let redInvisishade = {
    img: document.getElementById("card12")
}
let zamby = {
    img: document.getElementById("card13")
}
let redZamby = {
    img: document.getElementById("card14")
}
let fleeto = {
    img: document.getElementById("card15")
}
let redFleeto = {
    img: document.getElementById("card16")
}
let divedrake = {
    img: document.getElementById("card17")
}
let redDivedrake = {
    img: document.getElementById("card18")
}
let boneclang = {
    img: document.getElementById("card19")
}
let redBoneclang = {
    img: document.getElementById("card20")
}
let wizzem = {
    img: document.getElementById("card21")
}
let redWizzem = {
    img: document.getElementById("card22")
}
let superSkeleton = {
    img: document.getElementById("card23")
}
let redSuperSkeleton = {
    img: document.getElementById("card24")
}
let griffoth = {
    img: document.getElementById("card25")
}
let redGriffoth = {
    img: document.getElementById("card26")
}
let goldarmor = {
    img: document.getElementById("card27")
}
let redGoldarmor = {
    img: document.getElementById("card28")
}
let flailarmor = {
    img: document.getElementById("card29")
}
let redFlailarmor = {
    img: document.getElementById("card30")
}
let rookie = {
    img: document.getElementById("card31")
}
let redRookie = {
    img: document.getElementById("card32")
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