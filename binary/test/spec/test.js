
'use strict';

describe('Binary to Decimal', function () {
    it('0 -> 0', function () {
        expect(binaryToDecimal(0)).toBe(0);
    });
    it('1 -> 1', function () {
        expect(binaryToDecimal(1)).toBe(1);
    });
    it('10 -> 2', function () {
        expect(binaryToDecimal(10)).toBe(2);
    })
    it('11 -> 3', function () {
        expect(binaryToDecimal(11)).toBe(3);
    });
    it('100 -> 4', function() {
        expect(binaryToDecimal(100)).toBe(4);
    });
    it('101 -> 5', function () {
        expect(binaryToDecimal(101)).toBe(5);
    });
    it('110 -> 6', function () {
        expect(binaryToDecimal(110)).toBe(6);
    });
    it('111 -> 7', function () {
        expect(binaryToDecimal(111)).toBe(7);
    });
    it('1000 -> 8', function () {
        expect(binaryToDecimal(1000)).toBe(8);
    });
});

describe('Decimal to Binary',function() {
    it('0 -> 0', function () {
        expect(decimalToBinary(0)).toBe(0);
    });
    it('1 -> 1', function () {
        expect(decimalToBinary(1)).toBe(1);
    });
    it('2 -> 10', function () {
        expect(decimalToBinary(2)).toBe(10);
    });
    it('3 -> 11', function () {
        expect(decimalToBinary(3)).toBe(11);
    });
});

describe('Integer division', function () {
    it('10 \ 4 = 2', function () {
        expect(intDivision(10,4)).toBe(2);
    });
    it('24 \ 5 = 4', function () {
        expect(intDivision(24,5)).toBe(4);
    });
});
