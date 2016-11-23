/* jshint esversion:6 */
(function() {
    'use strict';
})();

var hanoi;
var moves = [];
var left, middle, right, discs, interval;
var colours = {};

function runHTML(d, i) {
    interval = i;
    discs = d;
    instantiate(discs, 3);
    move(discs, hanoi.a, hanoi.c, hanoi.b);
    iterateAndAnimate(0);
}

function instantiateHTML() {
    left = document.getElementById('left').getContext("2d");
    middle = document.getElementById('middle').getContext("2d");
    right = document.getElementById('right').getContext("2d");

    drawPegs();
}

function iterateAndAnimate(n) {
    setTimeout(function() {
        hanoi = hanoiStates[n].clone();

        clearCanvas();
        drawPegs();
        drawDiscs();

        if (n < hanoiStates.length - 1) {
            iterateAndAnimate(n+1);
        }
    }, interval);
}

function move(n, from, to, not) {
    if (n > 0) {
        //move n-1 disks from source to auxiliary, so they are out of the way
        move(n-1, from, not, to);

        //move the nth disk from source to target
        to.push(from.pop());

        hanoiStates.push({
            a: hanoi.a.slice(),
            b: hanoi.b.slice(),
            c: hanoi.c.slice()
        });

        //move the n-1 disks that we left on auxiliary onto target
        move(n-1, not, to, from);
    }
}

function instantiate(discs) {
    hanoi = {
        a: [],
        b: [],
        c: []
    };

    hanoiStates = [{
        a: [],
        b: [],
        c: []
    }];

    for (var d = 0; d < discs; d++) {
        hanoi.a.push(discs - d);
        hanoiStates[0].a.push(discs - d);

        assignColours();
    }
}

function assignColours() {
    //Color 1: #ee0979
    //Color 2: #ff6a00

    var redInc = (parseInt('ff', 16) - parseInt('ee', 16)) / (discs - 1);
    var greenInc = (parseInt('6a', 16) - parseInt('09', 16)) / (discs - 1);
    var blueInc = (parseInt('00', 16) - parseInt('79', 16)) / (discs - 1);

    for (var i = 0; i < hanoi.a.length; i++) {
        var red = parseInt('ee', 16) + (i * redInc);
        var green = parseInt('09', 16) + (i * greenInc);
        var blue = parseInt('79', 16) + (i * blueInc);

        red = red < 10 ? '0' + Math.round(red).toString(16) : Math.round(red).toString(16);
        green = green < 10 ? '0' + Math.round(green).toString(16) : Math.round(green).toString(16);
        blue = blue < 10 ? '0' + Math.round(blue).toString(16) : Math.round(blue).toString(16);

        colours[discs - i] = '#' + red + green + blue;
    }
}

function drawDiscs() {
    var width = 150;
    var sizeDifference = width / discs;
    for (var i = 0; i < 3; i++) {
        var peg = String.fromCharCode(97 + i);
        for (var j = 0; j < hanoi[peg].length; j++) {
            var disc = hanoi[peg][j];

            var element = peg === 'a' ? left : (peg === 'b' ? middle : right);
            var inset = (width - (sizeDifference * disc)) * 0.5;

            element.fillStyle = colours[disc];
            element.fillRect(inset, 110 - (j*10), sizeDifference * disc, 10);
            element.stroke();
        }
    }
}

function drawPegs() {
    var canvases = [left, middle, right];
    for (var c = 0; c < 3; c++) {
        canvases[c].moveTo(0, 120);
        canvases[c].lineTo(150, 120);
        canvases[c].moveTo(75, 120);
        canvases[c].lineTo(75, 0);
        canvases[c].stroke();
    }
}

function clearCanvas() {
    left.fillStyle = '#FFFFFF';
    middle.fillStyle = '#FFFFFF';
    right.fillStyle = '#FFFFFF';
    left.fillRect(0, 0, 150, 120);
    middle.fillRect(0, 0, 150, 120);
    right.fillRect(0, 0, 150, 120);
}

Array.prototype.last = function() {
    return this[this.length - 1];
};

Object.prototype.clone = function() {
    var clone = {};
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            clone[i] = this[i];
        }
    }
    return clone;
};
