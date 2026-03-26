import sum from './sum.js';

describe('sum function', () => {
    
    test('adds two positive numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
        expect(sum(-2, -3)).toBe(-5);
    });

    test('adds positive and negative number', () => {
        expect(sum(5, -3)).toBe(2);
    });

    test('adds zero', () => {
        expect(sum(0, 5)).toBe(5);
    });

});