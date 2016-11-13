/* jshint esversion:6 */
(function() {
    'use strict';
})();

var players = [];
var player;
var directory = {};
var snakes = [[24,2]];
var ladders = [[2,12]];

function createBoard() {
    //Create board
    var body = document.getElementsByTagName("body")[0];
    var board = document.createElement("table");
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

    var width = cell.offsetWidth;
    var height = cell.offsetHeight;

    //Create ladders

    for (var s = 0; s < snakes.length; s++) {
        var start = snakes[s][0];
        var end = snakes[s][1];

        var triangleWidth = (end - start) % 10;
        var triangleHeight = Math.floor((end - start)/10);
        var triangleHypotenuse = Math.sqrt(
            Math.pow(triangleWidth, 2) +
            Math.pow(triangleHeight, 2)
        );

        var holder = document.createElement("div");
        var circle1 = document.createElement("div");
        var circle2 = document.createElement("div");

        board.appendChild(holder);
        holder.appendChild(circle1);
        holder.appendChild(circle2);

        holder.className = "holder";
        circle1.className = "circle";
        circle2.className = "circle circle2";

        holder.style.transform = `rotate(${
            90 - toDegrees(Math.asin(triangleWidth / triangleHypotenuse))
        }deg)`;
        holder.style.width = `${triangleHypotenuse * width}px`;
        console.log();
        holder.style.top = `${(10 - Math.floor(end / 10)) * width}px`;
    }
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
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
