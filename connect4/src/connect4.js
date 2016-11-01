/*jshint esversion: 6 */
(function() {
    "use strict";
})();

var $ = require('jquery');

//7 columns 6 rows
var board = [];
var tokenColour = 'R';
var rows = 0;
var cols = 0;
var gameOver = false;

window.onload = function() {
    instantiateBoard(7,6);
    var table = $('#connect4');
    for(var row = 0; row < rows; row++) {
        table.append('<tr id="row-' + row + '">');
        var rowElement = $('#row-' + row);
        for(var col = 0; col < cols; col++) {
            rowElement.append('<td id="cell-' + col + '-' + row + '" onclick="addToken(' + col + ')"></td>"');
        }
        table.append('</tr>');
    }
};

function hasWon() {
    var colours = getColours();
    for(var c = 0; c < colours.length; c++) {
        if (hasDiagonal(colours[c]) || hasStraight(colours[c])) {
            gameOver = true;
            return colours[c];
        }
    }
    return false;
}

function hasStraight(colour) {
    return (hasHorizontal(colour) || hasVertical(colour));
}

function hasVertical(colour) {
    for (var i = 0; i < cols; i++) {
        var counter = 0;
        for(var j = 0; j < rows; j++) {
            if (board[i][j] === colour) {
                counter++;
            } else {
                counter = 0;
            }

            if (counter >= 4) {
                return true;
            }
        }
    }
    return false;
}

function hasHorizontal(colour) {
    for (var i = 0; i < rows; i++) {
        var counter = 0;
        for (var j = 0; j < cols; j++) {
            if (board[j][i] === colour) {
                counter++;
            } else {
                counter = 0;
            }

            if (counter >= 4) {
                return true;
            }
        }
    }
    return false;
}

function hasDiagonal(colour) {
    var leftCounter = 0;
    var rightCounter = 0;
    for(var col = 0; col < cols - 3; col++) {
        for(var row = 0; row < rows - 3; row++) {
            for(var step = 0; step < 4; step++) {
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

                if (leftCounter >= 4) {
                    console.log('diagonally left from column ', col, ' and row ', row);
                    return true;
                } else if (rightCounter >= 4) {
                    console.log('diagonally right from column ', col, ' and row ', row);
                    return true;
                }
            }
        }

    }
    return false;
}

function getColours() {
    return ['R', 'Y'];
}

function insert(column, colour) {
    for(var i = 0; i < rows; i++) {
        if (board[column][i + 1] === 'R' || board[column][i + 1] === 'Y' || i === rows - 1) {
            board[column][i] = colour;
            $('#cell-' + column + '-' + i).addClass(colour);
            break;
        }
    }

    if (hasWon() === 'R') {
        $('body').append('<p>Red wins!</p>');
    } else if (hasWon() === 'Y') {
        $('body').append('<p>Yellow wins!</p>');
    }
}

function addToken(column) {
    if (column > cols || board[column][0] !== 'O') {
        return;
    }

    if (!gameOver) {
        insert(column, tokenColour);
        swapTokenColour();
    }
}

function swapTokenColour() {
    if (tokenColour === 'R') {
        tokenColour = 'Y';
    } else {
        tokenColour = 'R';
    }
}

function instantiateBoard(numCols, numRows) {
    cols = numCols;
    rows = numRows;
    for(var i = 0; i < numCols; i++) {
        board[i] = [];
        for(var j = 0; j < numRows; j++) {
            board[i][j] = 'O';
        }
    }
}

function resetBoard() {
    gameOver = false;
    for(var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
            board[i][j] = 'O';
            $('#cell-' + i + '-' + j).removeClass('R Y');
        }
    }
    tokenColour = 'R';
}

function printBoard() {
    for(var row = 0; row < rows; row++) {
        var rowString = "";
        for(var col = 0; col < cols; col++) {
            rowString += board[col][row];
        }
    }
}
