(function () {
    'use strict';
})();

describe('Snakes and ladders', function() {
    describe('token', function() {
        beforeEach(function() {
            initialise(1);
            players[0][1] = 1;
        });
        it('should start at square 1', function() {
            expect(players[0][1]).toEqual(1);
        });
        it('should move one square', function() {
            move(0, 1);
            expect(players[0][1]).toEqual(2);
        });
        it('should move three squares', function() {
            move(0, 3);
            expect(players[0][1]).toEqual(4);
        });
        it('should move to square 8', function() {
            move(0, 3);
            move(0, 4);
            expect(players[0][1]).toEqual(8);
        });
    });
    describe('dice', function() {
        it('should return 1-6 inclusive', function() {
            var result = roll();
            expect(result >= 1 && result <= 6).toBeTruthy();
        });
    });
    describe('win condition', function() {
        beforeEach(function() {
            players[0][1] = 97;
        });
        it('should be won when you hit square 100', function() {
            move(0, 3);
            expect(won(0)).toBeTruthy();
        });
        it('should not be won when you go past square 100', function() {
            move(0, 4);
            expect(won(0)).toBeFalsy();
        });
    });
    describe('snakes', function() {
        it('go down', function() {
            players[0][1] = 12;
            snake(0);
            expect(players[0][1]).toEqual(2);
        });
    });
    describe('ladders', function() {
        it('go up', function() {
            players[0][1] = 2;
            ladder(0);
            expect(players[0][1]).toEqual(12);
        });
    });
    describe('with multiple players', function() {
        it('should sort players based on their roll', function() {
            players = [
                [0, 3],
                [1, 1],
                [2, 2]
            ];
            sortPlayers();
            expect(players).toEqual([
                [0, 3],
                [2, 2],
                [1, 1]
            ]);
        });
        it('should roll for players to determine play order', function() {
            players[0][1] = 0;
            initialise(1);
            expect(players[0][1]).not.toEqual(0);
        });
        it('should reroll when players roll the same', function() {
            players = [
                [0, 1],
                [1, 1],
                [2, 1]
            ];
            checkForDuplicates(3);
            expect(players).not.toEqual(
                [
                    [0,1],
                    [1,1],
                    [2,1]
                ]
            );
        });
        it('should maintain player order', function() {
            players = [
                [1, 3],
                [0, 1]
            ];
            sortPlayers();
            createLookup(2);
            expect(player).toEqual(1);
            nextPlayer();
            expect(player).toEqual(0);
        });
        it('should restart at the first player after the last player has played', function() {
            players = [
                [1,3],
                [0,2],
                [2,1]
            ];
            sortPlayers();
            createLookup(3);
            expect(player).toEqual(1);
            nextPlayer();
            nextPlayer();
            expect(player).toEqual(2);
            nextPlayer();
            expect(player).toEqual(1);
        });
    });
    describe('against a computer player', function() {
        it('should add some computer players', function() {
            players = [];
            addPlayers(1, 1);
            expect(players).toEqual([
                [0, 1, true]
            ]);
        });
        it('should add some human and computer players', function() {
            players = [];
            addPlayers(3,1);
            expect(players).toEqual([
                [0, 1, true],
                [1, 1, false],
                [2, 1, false]
            ]);
        });
    });
    describe('lookup array', function() {
        it('gets the correct positions in the array', function() {
            players = [
                [2,1],
                [0,1],
                [1,1]
            ];
            createLookup(3);
            expect(directory).toEqual(
                {
                    2: 0,
                    0: 1,
                    1: 2
                }
            );
        });
    });
});
