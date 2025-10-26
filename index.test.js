// Roman Numerals converter, with Ping-Pong TDD
const{numToRoman} = require('./index');

// Smoke Test - Checks that jest is working
test('That Jest is working', () => {
    expect(2+2).toBe(4);
});

describe("tests function numToRoman", () => {
    test("that 1 is I in Roman Numerals", () => {
        expect(numToRoman(1)).toBe("I");
    });
    test("that 2 is II in Roman Numerals", () => {
        expect(numToRoman(2)).toBe("II");
    });
    test("that 3 is III in Roman Numerals", () => {
        expect(numToRoman(3)).toBe("III");
    });
    test("that 4 is IV in Roman Numerals", () => {
        expect(numToRoman(4)).toBe("IV");
    });
    test("that 5 is V in Roman Numerals", () => {
        expect(numToRoman(5)).toBe("V");
    });
    test("that 6 is VI in Roman Numerals", () => {
        expect(numToRoman(6)).toBe("VI");
    });
    test("that 7 is VII in Roman Numerals", () => {
        expect(numToRoman(7)).toBe("VII");
    });
    test("that 8 is VIII in Roman Numerals", () => {
        expect(numToRoman(8)).toBe("VIII");
    });
    test("that 9 is IX in Roman Numerals", () => {
        expect(numToRoman(9)).toBe("IX");
    });
    test("that 10 is X in Roman Numerals", () => {
        expect(numToRoman(10)).toBe("X");
    });
})