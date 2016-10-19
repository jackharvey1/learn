'use strict';

var score = 0;

function roll(pins) {
    score += pins;
}

function rollMany(rolls, pins) {
    score += (rolls * pins);
}

function returnScore() {
    return score;
}
