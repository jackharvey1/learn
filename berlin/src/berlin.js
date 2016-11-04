/* jshint esversion: 6 */
(function () {
    'use strict';
})();

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

function singles(number, colour) {
    number %= 5;
    var row = "";
    for (var y = 0; y < number; y++) {
        row += colour;
    }
    for (var o = 0; o < (4 - number); o++) {
        row += 'O';
    }
    return row;
}
