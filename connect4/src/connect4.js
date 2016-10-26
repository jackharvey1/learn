/*jshint esversion: 6 */
(function() {
    "use strict";
})();

//7 columns 6 rows

var board = [];
var rows = 0;
var cols = 0;

function hasWon() {
    for (var colour in getColours()) {

    }
}

function getSubarray(startX, startY) {
    if (startX )
    for (var x = startX; i < startX + 4; i++) {

    }
}

function hasStraight(colour) {
    for (var i = 0; i < cols; i++) {
        var horizontalCounter = 0;
        var verticalCounter = 0;
        for(var j = 0; j < rows; j++) {
            if (board[i][j] === colour) {
                verticalCounter++;
            } else {
                verticalCounter = 0;
            }

            if (board[j][i] === colour) {
                horizontalCounter++;
            } else {
                horizontalCounter = 0;
            }

            if (verticalCounter >= 4 || horizontalCounter >= 4) {
                return true;
            }
        }
    }
    return false;
}

function hasDiagonal(colour) {
    var leftCounter = 0;
    var rightCounter = 0;
    for (var col = 0; col < cols - 3; col++) {
        for (var row = 0; row < rows - 3; row++) {
            for (var step = 0; step < 4; step++) {
                if (board[cols-col-step-1][row+step] === colour) {
                    leftCounter++;
                } else {
                    leftCounter = 0;
                }

                if (board[col+step][row+step] === colour) {
                    rightCounter++;
                } else {
                    rightCounter = 0;
                }

                if (leftCounter >= 4 || rightCounter >= 4) {
                    return true;
                }
            }
        }

    }
    return false;
}

function getColours() {
    var colours = [];
    for (var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
            if (colours.indexOf(board[i][j]) === -1 && board[i][j] !== 'O') {
                colours.push(board[i][j]);
            }
        }
    }
    return colours;
}

function insert(column, colour) {
    if (column > cols) {
        return;
    } else {
        for (var i = 0; i < board[column].length; i++) {
            if (board[column][i] === 'R' || board[column][i] === 'Y') {
                board[column][i - 1] = colour;
                return;
            } else if (i === board[column].length - 1) {
                board[column][i] = colour;
                return;
            }
        }
    }
}

function instantiateBoard(numCols, numRows) {
    cols = numCols;
    rows = numRows;
    for (var i = 0; i < numCols; i++) {
        board[i] = [];
        for(var j = 0; j < numRows; j++) {
            board[i][j] = 'O';
        }
    }
}

function resetBoard() {
    for (var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
            board[i][j] = 'O';
        }
    }
}

function printBoard() {
    for (var row = 0; row < rows; row++) {
        var rowString = "";
        for (var col = 0; col < cols; col++) {
            rowString += board[col][row];
        }
    }
}
