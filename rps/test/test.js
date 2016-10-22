(function () {
    "use strict";
})();

describe('Player plays', function() {
    describe('rock', function() {
        it('and beats scissors', function() {
            expect(rps('rock', 'scissors')).toBe('rock');
        });
        it('and loses to paper', function() {
            expect(rps('rock', 'paper')).toBe('paper');
        });
        it('and draws', function() {
            expect(rps('rock', 'rock')).toBe('draw');
        });
    });

    describe('scissors', function() {
        it('and beats paper', function() {
            expect(rps('scissors', 'paper')).toBe('scissors');
        });
        it('and loses to rock', function() {
            expect(rps('scissors', 'rock')).toBe('rock');
        });
        it('and draws', function() {
            expect(rps('scissors', 'scissors')).toBe('draw');
        });
    });

    describe('paper', function() {
        it('and beats rock', function() {
            expect(rps('paper', 'rock')).toBe('paper');
        });
        it('and loses to scissors', function () {
            expect(rps('paper', 'scissors')).toBe('scissors');
        });
        it('and draws', function() {
            expect(rps('paper', 'paper')).toBe('draw');
        });
    });
});
