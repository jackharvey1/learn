 /*jshint esversion: 6 */
(function() {
    "use strict";
})();

var board = [];

function initialiseBoard(columns, rows) {
    for (var i = 0; i < columns; i++) {
        board[i] = [];
        for (var j = 0; j < rows; j++) {
            board[i][j] = false;
        }
    }
}

function fallsTo(column) {
    reverse(board[column]).forEach((cell) => {
        if (cell === false) {
            return
        }
    });
}
