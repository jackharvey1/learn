(function () {
    'use strict';
})();

describe('Chop', function () {
    describe('halfing functions', function () {
        it('should get the first half', function () {
            expect(getFirstHalf([1,2,3])).toEqual([1]);
            expect(getFirstHalf([1,2,3,4])).toEqual([1,2]);
        });
        it('should get the last half', function () {
            expect(getLastHalf([1,2,3])).toEqual([3]);
            expect(getLastHalf([1,2,3,4])).toEqual([3,4]);
        });
    });
    describe('successful searches', function () {
        // it('should succeed on the base case', function() {
        //     expect(chop(1, [1])).toEqual(0);
        // });
        // it('should find an element in the first half', function () {
        //     expect(chop(1, [1,2,3])).toEqual(0);
        // });
        // it('should find an element in the second half', function () {
        //     expect(chop(3, [1,2,3])).toEqual(2);
        // });
        // it('should find an element in the middle', function () {
        //     expect(chop(2, [1,2,3])).toEqual(1);
        // });
    });
    describe('unsuccessful searches', function () {
        it('should fail on an empty array', function () {
            expect(chop(1, [])).toEqual(-1);
        });
        it('should not find non-existant value', function () {
            expect(chop(5, [1,2,3])).toEqual(-1);
            expect(chop(0, [1,2,3])).toEqual(-1);
            expect(chop(200, [1,2,3])).toEqual(-1);
        });
    });
});
