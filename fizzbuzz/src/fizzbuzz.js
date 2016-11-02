/* jshint esversion: 6 */
(function() {
    'use strict';
})();

var rules = [];

function addRule(multiple, result) {
    rules.push({ multiple: multiple, result: result });
}

function customFizz(number) {
    if (rules.length > 0) {
        var results = [];
        for (var r = 0; r < rules.length; r++) {
            if (number % rules[r].multiple === 0) {
                results.push(rules[r].result);
            }
        }
        return results.join(' ');
    } else {
        return number;
    }
}

function fizzbuzz(number) {
    var str;
    if (number % 3 === 0 || number % 5 === 0) {
        str = String(number).replace(/\d+/g, '');
        if (number % 3 === 0) {
            str += 'fizz ';
        }
        if (number % 5 === 0) {
            str += 'buzz';
        }
    }
    return typeof(str) === 'string' ? str.trim() : number;
}

function pop(number) {
    if (number % 7 === 0) {
        var str = String(number).replace(/\d+/g, '');
        if (number % 3 === 0) {
            str += 'fizz ';
        }
        if (number % 5 === 0) {
            str += 'buzz ';
        }
        return (str += 'pop');
    }
    return number;
}
