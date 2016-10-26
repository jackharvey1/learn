(function () {
    'use strict';
})();

describe('Connect 4', function() {
    beforeAll(function() {
        instantiateBoard(7, 6);
    });
    afterEach(function() {
        resetBoard();
    });
    describe('insertion', function() {
        it('works on an empty column', function() {
            insert(0, 'R');
            expect(board[0][5]).toBe('R');
        });
        it('accepts two tokens', function() {
            insert(0, 'R');
            insert(0, 'Y');
            expect(board[0][4]).toBe('Y');
        });
        it('rejects an invalid column', function() {
            insert(1000);
            expect(board[1000]).toBe(undefined);
        });
        it('cannot overfill', function() {
            for (var i = 0; i < 20; i++) {
                insert(0, 'R');
            }
            expect(board[0].length).toBe(6);
        });
    });
    describe('win conditional', function() {
        it('collects all the colours', function() {
            insert(0, 'Y');
            insert(0, 'R');
            var colours = getColours();
            expect(colours.sort()).toEqual(['R', 'Y']);
        });

        it('returns true for vertical', function() {
            insert(0, 'R');
            insert(0, 'R');
            insert(0, 'R');
            insert(0, 'R');
            expect(hasStraight('R')).toBe(true);
        });

        it('returns true for horizontal', function() {
            insert(0, 'R');
            insert(1, 'R');
            insert(2, 'R');
            insert(3, 'R');
            expect(hasStraight('R')).toBe(true);
        });

        it('doesn\'t think several spaced tokens mean a win', function() {
            insert(0, 'R');
            insert(0, 'R');
            insert(0, 'R');
            insert(0, 'Y');
            insert(0, 'R');
            expect(hasStraight('R')).toBe(false);
        });

        it('returns a right diagonal', function() {
            insert(0, 'R');
            insert(0, 'R');
            insert(0, 'R');
            insert(0, 'R');
            insert(1, 'R');
            insert(1, 'R');
            insert(1, 'R');
            insert(2, 'R');
            insert(2, 'R');
            insert(3, 'R');
            expect(hasDiagonal('R')).toBe(true);
        });

        it('returns a left diagonal', function() {
            insert(0, 'R');
            insert(1, 'R');
            insert(1, 'R');
            insert(2, 'R');
            insert(2, 'R');
            insert(2, 'R');
            insert(3, 'R');
            insert(3, 'R');
            insert(3, 'R');
            insert(3, 'R');
            expect(hasDiagonal('R')).toBe(true);
        });
    });
});
