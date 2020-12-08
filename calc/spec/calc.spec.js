const mult = require('../calc_mult')
const del = require('../calc_del')
const plus = require('../calc_plus')
const sub = require('../calc_sub')

describe('Проверка калькулятора', function () {
    it('4 умножить на 2 = 8', function () {
        expect(mult(4, 2)).toBe(8);
    });
    it('4 разделить на 2 = 2', function () {
        expect(del(4, 2)).toBe(2);
    });
    it('4 плюс 2 = 6', function () {
        expect(plus(4, 2)).toBe(6);
    });
    it('вычесть из 4  2 = 2', function () {
        expect(sub(4, 2)).toBe(2);
    });
    it('вычесть из undefined  2 = 2', function () {
        expect(sub(undefined, 2)).toBeNaN();
    });
    it('вычесть из "4"  2 = 2', function () {
        expect(del('4', 2)).toBeNaN();
    });
});