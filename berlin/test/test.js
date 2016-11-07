/* jshint esversion:6*/
(function () {
    'use strict';
})();

describe('Berlin clock', function () {
    describe('single minute row', function() {
        it('should display zero minutes', function () {
            expect(singleMinutes(0)).toBe('OOOO');
        });
        it('should display one minute', function() {
            expect(singleMinutes(1)).toBe('YOOO');
        });
        it('should display two minutes', function() {
            expect(singleMinutes(32)).toBe('YYOO');
        });
        it('should display three minutes', function() {
            expect(singleMinutes(33)).toBe('YYYO');
        });
        it('should display four minutes', function() {
            expect(singleMinutes(34)).toBe('YYYY');
        });
        it('should display five minutes', function() {
            expect(singleMinutes(35)).toBe('OOOO');
        });
    });
    describe('five minute row', function() {
        it('displays no lights', function() {
            expect(fiveMinutes(0)).toEqual('OOOOOOOOOOO');
        });
        it('displays all lights', function() {
            expect(fiveMinutes(59)).toEqual('YYRYYRYYRYY');
        });
        it('displays three lights', function() {
            expect(fiveMinutes(15)).toEqual('YYROOOOOOOO');
        });
        it('displays five lights', function() {
            expect(fiveMinutes(25)).toEqual('YYRYYOOOOOO');
        });
        it('displays six lights', function() {
            expect(fiveMinutes(30)).toEqual('YYRYYROOOOO');
        });
    });
    describe('single hours row', function() {
        it('displays no lights', function() {
            expect(singleHours(0, 'R')).toEqual('OOOO');
        });
        it('displays one lights', function() {
            expect(singleHours(11, 'R')).toEqual('ROOO');
        });
        it('displays two lights', function() {
            expect(singleHours(22, 'R')).toEqual('RROO');
        });
        it('dislays three lights', function() {
            expect(singleHours(3, 'R')).toEqual('RRRO');
        });
        it('displays four lights', function() {
            expect(singleHours(14, 'R')).toEqual('RRRR');
        });
    });
    describe('five hours row', function() {
        it('displays no lights', function() {
            expect(fiveHours(0)).toEqual('OOOO');
        });
        it('displays one light', function() {
            expect(fiveHours(6)).toEqual('ROOO');
        });
        it('displays two lights', function() {
            expect(fiveHours(11)).toEqual('RROO');
        });
        it('displays three lights', function() {
            expect(fiveHours(16)).toEqual('RRRO');
        });
        it('displays four lights', function() {
            expect(fiveHours(23)).toEqual('RRRR');
        });
    });
    describe('the seconds lamp', function() {
        it('shows a light when the time is even', function() {
            expect(seconds(0)).toEqual('Y');
        });
        it('shows a light when the time is even', function() {
            expect(seconds(53)).toEqual('O');
        });
    });
    describe('berlin clock', function() {
        it('is correct for 0:0:0', function() {
            expect(berlinClock('0:0:0')).toEqual('YOOOOOOOOOOOOOOOOOOOOOOO');
        });
        it('is correct for 23:59:59', function() {
            expect(berlinClock('23:59:59')).toEqual('ORRRRRRROYYRYYRYYRYYYYYY');
        });
        it('is correct for 16:50:6', function() {
            expect(berlinClock('16:50:6')).toEqual('YRRROROOOYYRYYRYYRYOOOOO');
        });
        it('is correct for 11:37:1', function() {
            expect(berlinClock('11:37:1')).toEqual('ORROOROOOYYRYYRYOOOOYYOO');
        });
    });
});
