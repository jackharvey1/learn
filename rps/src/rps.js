(function() {
    "use strict";
})();

var games = [
    [
        'rock',
        'scissors'
    ],
    [
        'scissors',
        'paper'
    ],
    [
        'paper',
        'rock'
    ]
];

function rps(player, computer) {
    var winner = computer;
    if (player === computer) {
        return 'draw';
    } else {
        games.forEach(function(g) {
            if (g[0] === player && g[1] === computer) {
                winner = player;
            }
        });
    }
    return winner;
}
