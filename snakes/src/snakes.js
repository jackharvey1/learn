(function() {
    'use strict';
})();

var players = [];
var player;
var directory = {};
var snakes = [[12,2]];
var ladders = [[2,12]];

function initialise(numPlayers) {
    for (p = 0; p < numPlayers; p++) {
        players.push([p, 1]);
    }
    createLookup(numPlayers);
    initialRoll(numPlayers);
    sortPlayers();
}

function runGame() {
    var player = 0;
    while (!won(player)) {
        var pos = lookup(player);
        players[pos][1] += roll();

    }
}

//inner loop starts with outer loop value

function initialRoll(numPlayers) {
    for (var q = 0; q < numPlayers; q++) {
        players[q][1] = roll();
    }
}

function checkForDuplicates(numPlayers) {
    var swapped = false;
    while (!swapped) {
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
