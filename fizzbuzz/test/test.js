(function() {
    'use strict';
})();

describe('Fizz buzz', function() {
    describe('variation 1', function() {
        it('should simply return a normal number', function() {
            expect(fizzbuzz(1)).toEqual(1);
            expect(fizzbuzz(2)).toEqual(2);
            expect(fizzbuzz(14)).toEqual(14);
        });
        it('should return fizz for multiples of 3', function() {
            expect(fizzbuzz(3)).toEqual('fizz');
            expect(fizzbuzz(12)).toEqual('fizz');
            expect(fizzbuzz(99)).toEqual('fizz');
        });
        it('should return buzz for multiples of 5', function() {
            expect(fizzbuzz(5)).toEqual('buzz');
            expect(fizzbuzz(20)).toEqual('buzz');
            expect(fizzbuzz(50)).toEqual('buzz');
        });
        it('should return fizz buzz for multiples of 3 and 5', function() {
            expect(fizzbuzz(15)).toEqual('fizz buzz');
            expect(fizzbuzz(30)).toEqual('fizz buzz');
            expect(fizzbuzz(90)).toEqual('fizz buzz');
        });
    });

    describe('variation 2', function() {
        //pop for 7
        //fizzpop for 3 & 7
        //buzzpop for 5 & 7
        //fizzbuzzpop for 3 & 5 & 7
        it('should simply return a normal number', function() {
            expect(pop(1)).toEqual(1);
            expect(pop(2)).toEqual(2);
            expect(pop(4)).toEqual(4);
        });
        it('should return pop for multiples of 7', function() {
            expect(pop(7)).toEqual('pop');
            expect(pop(14)).toEqual('pop');
            expect(pop(77)).toEqual('pop');
        });
        it('should return fizzpop for multiples of 3 and 7', function() {
            expect(pop(21)).toEqual('fizz pop');
            expect(pop(84)).toEqual('fizz pop');
            expect(pop(42)).toEqual('fizz pop');
        });
        it ('should return buzzpop for multiples of 5 and 7', function() {
            expect(pop(35)).toEqual('buzz pop');
            expect(pop(70)).toEqual('buzz pop');
        });
        it('should return fizzbuzzpop for multiples of 3, 5 and 7', function() {
            expect(pop(105)).toEqual('fizz buzz pop');
        });
    });

    describe('custom variations', function() {
        beforeEach(function() {
            rules = [];
        });

        it('accepts new variations', function() {
            addRule(5, 'crackle');
            addRule(3, 'boom');
            expect(rules).toEqual([
                {
                    multiple: 5, result: 'crackle'
                }, {
                    multiple: 3, result: 'boom' }
            ]);
        });
        it('works with a normal number', function() {
            addRule(4, 'gurgle');
            expect(customFizz(9)).toEqual(9);
        })
        it('works with one rule', function() {
            addRule(5, 'crackle');
            expect(customFizz(5)).toBe('crackle');
        });
        it('works with two rules', function() {
            addRule(3, 'boom');
            addRule(7, 'fizz');
            expect(customFizz(21)).toBe('boom fizz');
        });
        it('works with three rules', function() {
            addRule(4, 'puff');
            addRule(20, 'click');
            addRule(9, 'crack');
            expect(customFizz(180)).toBe('puff click crack');
        });
    });
});
