'use strict';

//1 = 1
//10 = 2
//11 = 3
function binaryToDecimal(b) {
    var e = 1;

    if (!(String(b).match(/[2-9]/))) {
        if (b >= 10) {
            while (e < b) {
                e *= 2;
            }
            return Math.pow(10, Math.log2(e)) + binaryToDecimal(b - e);
        }
        return b;
    }

    return -1;
    // return Math.pow(2, Math.log10(e)) + binaryToDecimal(b - e);

    // if (b >= 1000) {
    //     return 8 + binaryToDecimal(b - 1000);
    // } else if (b >= 100) {
    //     return 4 + binaryToDecimal(b - 100);
    // } else if (b >= 10) {
    //     return 2 + binaryToDecimal(b - 10);
    // }
    // return b;
}

//1 = 1
//2 = 10
//3 = 11
function decimalToBinary(d) {
    if (d >= 2) {
        return 10 + decimalToBinary(d - 2);
    }
    return d;
}

function intDivision(a, b) {
    return (a - (a % b)) / b
}
