/* jshint esversion:6 */
(function() {
    'use strict';
})();

var players = [];
var player;
var directory = {};
var snakes = [
    // [34, 2],
    // [19, 5],
    // [77, 52]
    [88, 49]
];
var ladders = [
    // [2,12]
];
var width = 10;
var height = 10;
var body, board, cellWidth, cellHeight;

function createBoard() {
    //Create board
    body = document.getElementsByTagName("body")[0];
    board = document.createElement("table");
    var row;
    var cell;

    body.appendChild(board);
    for (var i = 0; i < 10; i++) {
        row = document.createElement("tr");
        row.id = 'row-' + (i + 1);
        board.appendChild(row);
        for (var j = 0; j < 10; j++) {
            cell = document.createElement("td");
            row.appendChild(cell);
            cell.id = 'cell-' + (i+1) + '-' + (j + 1);
        }
    }

    cellHeight = board.offsetHeight / height;
    cellWidth = board.offsetWidth / width;

    var start, end, triangleWidth, triangleHeight,
        triangleHypotenuse, snake, ladder, imageHeight,
        startFromTop, endFromTop, startFromLeft, endFromLeft;

    for (var s = 0; s < snakes.length; s++) {
        drawEntity(snakes[s][0], snakes[s][1], "snake4.png");
    }

    for (var l = 0; l < ladders.length; l++) {
        drawEntity(ladders[l][1], ladders[l][0], "ladder.png");
    }
}

function drawEntity(start, end, image) {
    if ((start % 10) > (end % 10)) {
        triangleWidth = Math.round((start - end) % width) * cellWidth;
    } else {
        triangleWidth = Math.round((end - start) % width) * cellWidth;
    }

    if ((start / height) > (end / height)) {
        triangleHeight = Math.round((end - start) / height) * cellHeight;
    } else {
        triangleHeight = Math.round((start - end) / height) * cellHeight;
    }

    triangleHypotenuse = Math.sqrt(
        Math.pow(triangleWidth, 2) +
        Math.pow(triangleHeight, 2)
    );

    entity = document.createElement("img");
    body.appendChild(entity);

    entity.src = image;
    entity.style.height = `${triangleHypotenuse}px`;

    console.log(start, end, cellWidth, triangleHypotenuse);

    imageHeight = entity.offsetHeight;

    startFromTop = round(((height - Math.round(start / height)) * cellHeight) -
        (imageHeight - triangleHeight), cellHeight);
    endFromTop = round(((height - Math.round(end / height)) * cellHeight) -
        (imageHeight - triangleHeight), cellHeight);

    startFromLeft = round(((start % width) * cellWidth) - (cellWidth / 2), cellWidth / 2);
    endFromLeft = round(((end % width) * cellWidth) - (cellWidth / 2), cellWidth / 2);

    if (start > end) {
        entity.style.top = `${startFromTop}px`;
    } else {
        entity.style.top = `${endFromTop}px`;
    }

    if (start % width > end % width) {
        entity.style.transform = `rotate(${Math.acos(triangleHeight / triangleHypotenuse)}rad)`;
        entity.style.left = `${endFromLeft}px`;
    } else {
        entity.style.transform = `rotate(${(Math.PI * 2) - Math.acos(triangleWidth / triangleHypotenuse)}rad)`;
        entity.style.left = `${startFromLeft}px`;
    }
}

function round(value, to) {
    return Math.round(value/to) * to;
}

function initialise(numPlayers, numComputers) {
    addPlayers(numPlayers, numComputers);
    createLookup(numPlayers);
    initialRoll(numPlayers);
    checkForDuplicates();
    sortPlayers();
}

function reset() {
    var players = [];
    var player;
    var directory = {};
    var snakes = [[12,2]];
    var ladders = [[2,12]];
}

function addPlayers(numPlayers, numComputers) {
    for (p = 0; p < numPlayers; p++) {
        if (p >= numComputers) {
            players.push([p, 1, false]);
        } else {
            players.push([p, 1, true]);
        }
    }
}

function runGame() {
    var player = 0;
    while (!won(player)) {
        var pos = lookup(player);
        players[pos][1] += roll();

    }
}

function initialRoll(numPlayers) {
    for (var q = 0; q < numPlayers; q++) {
        players[q][1] = roll();
    }
}

function checkForDuplicates(numPlayers) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var q = 0; q < numPlayers; q++) {
            for (var p = q + 1; p < numPlayers; p++) {
                if (players[q][1] === players[p][1]) {
                    players[q][1] = roll();
                    players[p][1] = roll();
                    swapped = true;
                }
            }
        }
    }
}

function sortPlayers() {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var p = 0; p < players.length - 1; p++) {
            if (players[p][1] < players[p+1][1]) {
                var tempPlayer = players[p][0];
                var tempRoll = players[p][1];
                players[p][0] = players[p+1][0];
                players[p][1] = players[p+1][1];
                players[p+1][0] = tempPlayer;
                players[p+1][1] = tempRoll;
                swapped = true;
            }
        }
    }
    player = players[0][0];
}

function nextPlayer() {
    player = players[(lookup(player)+1) % players.length][0];
}

function move(player, squares) {
    var pos = lookup(player);
    players[pos][1] += squares;
}

//player: position in array
function createLookup(numPlayers) {
    for (var i = 0; i < numPlayers; i++) {
        directory[players[i][0]] = i;
    }
}

function lookup(player) {
    return directory[player];
}

function roll() {
    return Math.round(Math.random() * 5) + 1;
}

function won(player) {
    var pos = lookup(player);
    return players[pos][1] === 100;
}

function snake(player) {
    var pos = lookup(player);
    for (var s = 0; s < snakes.length; s++) {
        if (snakes[s][0] === players[pos][1]) {
            players[pos][1] = snakes[s][1];
            break;
        }
    }
}

function ladder(player) {
    var pos = lookup(player);
    for (var l = 0; l < ladders.length; l++) {
        if (ladders[l][0] === players[pos][1]) {
            players[pos][1] = ladders[l][1];
            break;
        }
    }
}
