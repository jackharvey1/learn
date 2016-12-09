(function() {
    'use strict';
})();

function chop(value, arr) {
    if (arr.length > 0) {
        if (arr[Math.ceil(arr.length / 2)] > value) {
            // return chop(value, arr.slice(0, arr[Math.ceil(arr.length)]));
        } else if (arr[Math.ceil(arr.length / 2)] === value) {

        } else {
            // return chop(value, arr.slice(arr[Math.ceil(arr.length)]));
        }
    } else if (arr.length === 1) {
        return 0;
    }
    return -1;
}

function getFirstHalf(arr) {
    return arr.slice(0, Math.floor(arr.length / 2));
}

function getLastHalf(arr) {
    return arr.slice(Math.ceil(arr.length / 2));
}
