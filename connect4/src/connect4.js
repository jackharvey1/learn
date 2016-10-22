/*jshint esversion: 6 */
(function() {
    "use strict";
})();

//7 columns 6 rows

var board = [];





function hasWon() {

}

function getSubarray(startX, startY) {
    if (startX )
    for (var x = startX; i < startX + 4; i++) {

    }
}

function hasVertical() {
    var vertical = 'X\nX\nX\nX';
    for (var i = 0; i < board.length; i++) {
        var columnFlag = false;
        for(var j = 0; j < board[0].length - 4; j++) {
            var column = [
                board[i][j],
                board[i][j+1],
                board[i][j+2],
                board[i][j+3]
            ];
            if (column === vertical) {

            }
        }
    }
}

function hasHorizontal() {
    var horizontal = 'XXXX';
}

function hasDiagonal() {
    var diagonalRight = 'XOOO\nOXOO\nOOXO\nOOOX';
    var diagonalLeft = 'OOOX\nOOXO\nOXOO\nXOOO';
}

function getColours() {
    var colours = [];
    for (var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            if (colours.indexOf(board[i][j]) === -1 && board[i][j] !== 'O') {
                colours.push(board[i][j]);
            }
        }
    }
    return colours;
}

function insert(column, colour) {
    if (column > board.length) {
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

function instantiateBoard(columns, rows) {
    for (var i = 0; i < columns; i++) {
        board[i] = [];
        for(var j = 0; j < rows; j++) {
            board[i][j] = 'O';
        }
    }
}

function resetBoard() {
    for (var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            board[i][j] = 'O';
        }
    }
}

function printBoard() {
    for (var row = 0; row < board[0].length; row++) {
        var rowString = "";
        for (var col = 0; col < board.length; col++) {
            rowString += board[col][row];
        }
        console.log(rowString);
    }
    console.log('-------');
}
