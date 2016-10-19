(function() {
    'use strict';
})();

describe('Coverting', function() {
    describe('Arabic to Roman', function() {
        it('1 -> I', function() {
            expect(arabicToRoman(1)).toBe('I');
        });
        it('2 -> II', function() {
            expect(arabicToRoman(2)).toBe('II');
        });
        it('3 -> III', function() {
            expect(arabicToRoman(3)).toBe('III');
        });
        it('4 -> IV', function() {
            expect(arabicToRoman(4)).toBe('IV');
        });
        it('5 -> V', function() {
            expect(arabicToRoman(5)).toBe('V');
        });
        it('6 -> VI', function() {
            expect(arabicToRoman(6)).toBe('VI');
        });
        it('7 -> VII', function() {
            expect(arabicToRoman(7)).toBe('VII');
        });
        it('8 -> VIII', function() {
            expect(arabicToRoman(8)).toBe('VIII');
        });
        it('9 -> IX', function() {
            expect(arabicToRoman(9)).toBe('IX');
        });
        it('10 -> X', function() {
            expect(arabicToRoman(10)).toBe('X');
        });
        it('12 -> XII', function() {
            expect(arabicToRoman(12)).toBe('XII');
        });
        it('14 -> XIV', function() {
            expect(arabicToRoman(14)).toBe('XIV');
        });
        it('15 -> XV', function() {
            expect(arabicToRoman(15)).toBe('XV');
        });
        it('16 -> XVI', function() {
            expect(arabicToRoman(16)).toBe('XVI');
        });
        it('19 -> XIX', function() {
            expect(arabicToRoman(19)).toBe('XIX');
        });
        it('20 -> XX', function() {
            expect(arabicToRoman(20)).toBe('XX');
        });
        it('21 -> XXI', function() {
            expect(arabicToRoman(21)).toBe('XXI');
        });
        it('49 -> XLIX', function() {
            expect(arabicToRoman(49)).toBe('XLIX');
        });
        it('50 -> L', function() {
            expect(arabicToRoman(50)).toBe('L');
        });
        it('52 -> LII', function() {
            expect(arabicToRoman(52)).toBe('LII');
        });
        it('59 -> LIX', function() {
            expect(arabicToRoman(59)).toBe('LIX');
        });
        it('76 -> LXXVI', function() {
            expect(arabicToRoman(76)).toBe('LXXVI');
        });
        it('99 -> XCIX', function() {
            expect(arabicToRoman(99)).toBe('XCIX');
        });
        it('100 -> C', function() {
            expect(arabicToRoman(100)).toBe('C');
        });
        it('101 -> CI', function() {
            expect(arabicToRoman(101)).toBe('CI');
        });
        it('109 -> CIX', function() {
            expect(arabicToRoman(109)).toBe('CIX');
        });
        it('117 -> CXVII', function() {
            expect(arabicToRoman(117)).toBe('CXVII');
        });
        it('129 -> CXXIX', function() {
            expect(arabicToRoman(129)).toBe('CXXIX');
        });
        it('149 -> CXLIX', function() {
            expect(arabicToRoman(149)).toBe('CXLIX');
        });
        it('200 -> CC', function() {
            expect(arabicToRoman(200)).toBe('CC');
        });
        it('249 -> CCXLIX', function() {
            expect(arabicToRoman(249)).toBe('CCXLIX');
        });
        it('568 -> DLXVIII', function() {
            expect(arabicToRoman(568)).toBe('DLXVIII');
        });
        it('1000 -> M', function() {
            expect(arabicToRoman(1000)).toBe('M');
        });
        it('1248 -> MCCXLVIII', function() {
            expect(arabicToRoman(1248)).toBe('MCCXLVIII');
        });
        it('1897 -> MDCCCXCVII', function() {
            expect(arabicToRoman(1897)).toBe('MDCCCXCVII');
        });
        it('1066 -> MLXVI', function() {
            expect(arabicToRoman(1066)).toBe('MLXVI');
        });
        it('1442 -> MCDXLII', function() {
            expect(arabicToRoman(1442)).toBe('MCDXLII');
        });
        it('1989 -> MCMLXXXIX', function() {
            expect(arabicToRoman(1989)).toBe('MCMLXXXIX');
        });
        it('3001 -> MMMI', function() {
            expect(arabicToRoman(3001)).toBe('MMMI');
        });
    });
    describe('Roman to Arabic', function() {
        it('I -> 1', function() {
            expect(romanToArabic('I')).toEqual(1);
        });
        it('II -> 2', function() {
            expect(romanToArabic('II')).toEqual(2);
        });
        it('III -> 3', function() {
            expect(romanToArabic('III')).toEqual(3);
        });
        it('IV -> 4', function() {
            expect(romanToArabic('IV')).toEqual(4);
        });
        it('V -> 5', function() {
            expect(romanToArabic('V')).toEqual(5);
        });
        it('IX -> 9', function() {
            expect(romanToArabic('IX')).toEqual(9);
        });
        it('X -> 10', function() {
            expect(romanToArabic('X')).toEqual(10);
        });
        it('XIX -> 19', function() {
            expect(romanToArabic('XIX')).toEqual(19);
        });
        it('XL -> 40', function() {
            expect(romanToArabic('XL')).toEqual(40);
        });
        it('XLIX -> 49', function() {
            expect(romanToArabic('XLIX')).toEqual(49);
        });
        it('XCIV -> 94', function() {
            expect(romanToArabic('XCIV')).toEqual(94);
        });
        it('CXII -> 112', function() {
            expect(romanToArabic('CXII')).toEqual(112);
        });
        it('CCCXLVIII -> 348', function() {
            expect(romanToArabic('CCCXLVIII')).toEqual(348);
        });
        it('CDLXXVI -> 476', function() {
            expect(romanToArabic('CDLXXVI')).toEqual(476);
        });
        it('DCXXIV -> 624', function() {
            expect(romanToArabic('DCXXIV')).toEqual(624);
        });
        it('CMXXIII -> 923', function() {
            expect(romanToArabic('CMXXIII')).toEqual(923);
        });
        it('M -> 1000', function() {
            expect(romanToArabic('M')).toEqual(1000);
        });
        it('MXI -> 1011', function() {
            expect(romanToArabic('MXI')).toEqual(1011);
        });
        it('MCDXLIV -> 1444', function() {
            expect(romanToArabic('MCDXLIV')).toEqual(1444);
        });
    });
});
