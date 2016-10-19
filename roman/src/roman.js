(function() {
    'use strict';
})();

//Javascript refuses to reverse the arrays correctly for some reason, so I have to do this
var backwardKeys = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
];

var backwardNumerals = [
    'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
];

var forwardKeys = [
    1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000
];

var forwardNumerals = [
    'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'
];

//keys forward
//numerals backwards
function arabicToRoman(number) {
    for(var k = 0; k < backwardKeys.length; k++) {
        if(number >= backwardKeys[k]) {
            return backwardNumerals[k] + arabicToRoman(number - backwardKeys[k]);
        }
    }
    return '';
}

//keys backward
//numerals forward
function romanToArabic(numeral) {
    for(var n = 0; n < forwardNumerals.length; n++) {
        if(numeral.substring(numeral.length - forwardNumerals[n].length, numeral.length) === forwardNumerals[n]) {
            return parseInt(forwardKeys[n] + romanToArabic(numeral.substring(0, numeral.length - forwardNumerals[n].length)));
        }
    }
    return '';
}
