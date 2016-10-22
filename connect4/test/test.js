(function () {
    'use strict';
})();

describe('Connect 4', function() {
    beforeEach(function() {
        initialiseBoard(7, 6);
    });
    describe('initialisation', function() {
        it('works ', function() {
            for (var i = 0; i < 7; i++) { //columns or x
                for (var j = 0; j < 6; j++) { //rows or y
                    expect(board[i][j]).toBe(false);
                }
            }
        });
    describe('insertion', function() {
        it('in an empty column falls to the correct row', function() {
            expect(fallsTo(0)).toBe(6);
        });
        it('3 times falls to the correct row', function() {
            fallsTo(0);
            fallsTo(0);
            
        })
    });
        // it('can receive tokens', funtion() {
        //     insert(0);
        //     expect(board[0][6]).toBe(true);
        // });
    });
});
