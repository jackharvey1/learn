/* jshint esversion:6 */
(function () {
    'use strict';
})();

describe('Towers of hanoi', function () {
    describe('instantiation', function() {
        beforeEach(function() {
            instantiate(3);
        });
        it('should instantiate in order', function() {
            expect(hanoi).toEqual({
                a: [3,2,1],
                b: [],
                c: []
            });
        });
        it('should instantiate on the leftmost peg only', function() {
            expect(hanoi.b).toEqual([]);
            expect(hanoi.c).toEqual([]);
        });
        it('only instantiates 3 pegs', function() {
            expect(hanoi[3]).toBe(undefined);
        });
    });
    describe('success detection', function() {
        it('should return true when an array is sorted descending', function() {
            var arr = [3, 2, 1];
            expect(sorted(arr)).toBeTruthy();
        });
        it('should return false when an array is not sorted descending', function() {
            var arr = [2, 3, 1];
            expect(sorted(arr)).toBeFalsy();
        });
        it('should return false when the sizes are not 1 different', function() {
            var arr = [4, 3, 1];
            expect(sorted(arr)).toBeFalsy();
        });
        it('should return true for single item', function() {
            var arr = [1];
            expect(sorted(arr)).toBeTruthy();
        });
        it('should return true for empty arr', function() {
            var arr = [];
            expect(sorted(arr)).toBeTruthy();
        });
        it('should not detect success', function() {
            var hanoi = [
                [3],
                [],
                [2, 1]
            ];
            expect(done(hanoi)).toBeFalsy();
        });
        it('should not detect success', function() {
            var hanoi = [
                [],
                [],
                [3, 2, 1],
                []
            ];
            expect(done(hanoi)).toBeFalsy();
        });
        it('should detect success', function () {
            var hanoi = [
                [],
                [],
                [3, 2, 1]
            ];
            expect(done(hanoi)).toBeTruthy();
        });
    });
    describe('not function', function() {
        it('works', function() {
            expect(missing([0,1])).toEqual(2);
        });
        it('works again', function() {
            expect(missing([1,2])).toEqual(0);
        });
        it('works once more', function() {
            expect(missing([0,2])).toEqual(1);
        });
    });
    describe('solver', function() {
        fit('should generate the correct states', function() {
            instantiate(3);
            move(hanoi.a.length, hanoi.a, hanoi.c, hanoi.b);
            expect(hanoiStates).toEqual([{
                a: [3, 2, 1],
                b: [],
                c: []
            }, {
                a: [3, 2],
                b: [],
                c: [1]
            }, {
                a: [3],
                b: [2],
                c: [1]
            }, {
                a: [3],
                b: [2, 1],
                c: []
            }, {
                a: [],
                b: [2, 1],
                c: [3]
            }, {
                a: [1],
                b: [2],
                c: [3]
            }, {
                a: [1],
                b: [],
                c: [3, 2]
            }, {
                b: [],
                a: [],
                c: [3, 2, 1]
            }]);
        });
        it('should solve the base case', function() {
            var hanoi = {
                a: [1],
                b: [],
                c: []
            };
            move(hanoi.a.length, hanoi.a, hanoi.c, hanoi.b);
            expect(hanoi).toEqual({
                a: [],
                b: [],
                c: [1]
            });
        });
        it('should solve the simple case', function() {
            var hanoi = {
                a: [3,2,1],
                b: [],
                c: []
            };
            move(hanoi.a.length, hanoi.a, hanoi.c, hanoi.b);
            expect(hanoi).toEqual({
                a: [],
                b: [],
                c: [3, 2, 1]
            });
        });
        it('should solve a big one', function() {
            var hanoi = {
                a: [7,6,5,4,3,2,1],
                b: [],
                c: []
            };
            move(hanoi.a.length, hanoi.a, hanoi.c, hanoi.b);
            expect(hanoi).toEqual({
                a: [],
                b: [],
                c: [7,6,5,4,3,2,1]
            });
        });
    });
    describe('get keys function', function() {
        it('returns the correct key', function() {
            var obj = {
                a: [1,2,3],
                b: []
            };
            expect(getKey(obj, [1,2,3])).toEqual('a');
        });
    });
});
