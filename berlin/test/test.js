(function () {
    'use strict';
})();

describe('Berlin clock', function () {
    describe('single minute row', function() {
        it('should display zero minutes', function () {
            expect(singles('00', 'Y')).toBe('OOOO');
        });
        it('should display one minute', function() {
            expect(singles('01', 'Y')).toBe('YOOO');
        });
        it('should display two minutes', function() {
            expect(singles('32', 'Y')).toBe('YYOO');
        });
        it('should display three minutes', function() {
            expect(singles('33', 'Y')).toBe('YYYO');
        });
        it('should display four minutes', function() {
            expect(singles('34', 'Y')).toBe('YYYY');
        });
        it('should display five minutes', function() {
            expect(singles('35', 'Y')).toBe('OOOO');
        });
    });
    describe('five minute row', function() {
        it('displays no lights', function() {
            expect(fiveMinutes('00')).toEqual('OOOOOOOOOOO');
        });
        it('displays all lights', function() {
            expect(fiveMinutes('59')).toEqual('YYRYYRYYRYY');
        });
        it('displays three lights', function() {
            expect(fiveMinutes('15')).toEqual('YYROOOOOOOO');
        });
        it('displays five lights', function() {
            expect(fiveMinutes('25')).toEqual('YYRYYOOOOOO');
        });
        it('displays six lights', function() {
            expect(fiveMinutes('30')).toEqual('YYRYYROOOOO');
        });
    });
    describe('single hours row', function() {
        it('displays no lights', function() {
            expect(singles('00', 'R')).toEqual('OOOO');
        });
        it('displays one lights', function() {
            expect(singles('11', 'R')).toEqual('ROOO');
        });
        it('displays two lights', function() {
            expect(singles('22', 'R')).toEqual('RROO');
        });
        it('dislays three lights', function() {
            expect(singles('03', 'R')).toEqual('RRRO');
        });
        it('displays four lights', function() {
            expect(singles('14', 'R')).toEqual('RRRR');
        });
    });
});
