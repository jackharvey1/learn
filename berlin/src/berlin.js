/* jshint esversion: 6 */
(function () {
    'use strict';
})();

function updateHTML() {
    var clock = berlinClock(new Date()
        .toTimeString()
        .substring(0,8)
    ).split('');

    //seconds lamp
    for (var c = 0; c < 24; c++) {
        var cell = document.getElementById(c);
        cell.className = cell.className.replace(
            /(O|Y|R)/g, ''
        );
        cell.className += clock[c];
    }
}

function berlinClock(time) {
    var components = time.split(':');
    var h = components[0];
    var m = components[1];
    var s = components[2];
    return seconds(s) +
        fiveHours(h) +
        singleHours(h) +
        fiveMinutes(m) +
        singleMinutes(m);
}

function seconds(s) {
    return s % 2 === 0 ? 'Y' : 'O';
}

function fiveMinutes(minutes) {
    var row = "";
    for (var m = 5; m < 60; m+=5) {
        if (m <= minutes) {
            if (m % 15 === 0) {
                row += 'R';
            } else {
                row += 'Y';
            }
        } else {
            row += 'O';
        }
    }
    return row;
}

function singleMinutes(minutes) {
    return fourLights(minutes, 'Y');
}

function fiveHours(hours) {
    return fourLights(Math.floor(hours/5), 'R');
}

function singleHours(hours) {
    return fourLights(Math.floor(hours), 'R');
}

function fourLights(number, colour) {
    number %= 5;
    var row = "";
    for (var r = 0; r < number; r++) {
        row += colour;
    }
    for (var o = 0; o < (4 - number); o++) {
        row += 'O';
    }
    return row;
}
