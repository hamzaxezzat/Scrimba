const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");
const winner = document.getElementById("winner");

let homeScore = 0;
let guestScore = 0;

function Winner() {
    if (homeScore > guestScore) {
        winner.innerText = "Home";
    } else if (guestScore > homeScore) {
        winner.innerText = "Guest";
    } else {
        winner.innerText = "Equal";
    }
}

function increaseHomeOne() {
    homeScore += 1;
    scoreHome.textContent = homeScore;
    Winner();
}
function increaseHomeTwo() {
    homeScore += 2;
    scoreHome.textContent = homeScore;
    Winner();
}
function increaseHomeThree() {
    homeScore += 3;
    scoreHome.textContent = homeScore;
    Winner();
}

function increaseGuestOne() {
    guestScore += 1;
    scoreGuest.textContent = guestScore;
    Winner();
}
function increaseGuestTwo() {
    guestScore += 2;
    scoreGuest.textContent = guestScore;
    Winner();
}
function increaseGuestThree() {
    guestScore += 3;
    scoreGuest.textContent = guestScore;
    Winner();
}
