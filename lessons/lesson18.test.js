/* Test file for testing lesson 18 code */
const {firstName, height, message, isEven, mathOperations} =
require('./lesson18.js');

describe('Name', () =>{
    it('should return Joe', () =>{
        expect(firstName).toEqual('Joe');
    });
});

describe('Height', () => {
    it('should be less than 80', () => {
        expect(height).toBeLessThan(80);
    });
});

describe('Message', () => {
    it('should include the name and height', () => {
        expect(message).toContain(firstName);
        expect(message).toContain(height.toString());
    });
});

describe('isEven function', () => {
    test('returns true if number is even', () => {
        expect(isEven(2)).toBe(true);
    });
    test('returns false if number is odd', () => {
        expect(isEven(3)).toBe(false);
    });
    test('throws error if number is negative', () => {
        expect(() => isEven(-1)).toThrow();
    });
    test('throws error if number is not a number', () => {
        expect(() => isEven('22')).toThrow();
    });
});