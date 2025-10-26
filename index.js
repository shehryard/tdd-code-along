// Our converter function
const Roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const numToRoman = (num) => {
    if (num >3999) {
        return 'The Romans had no representation for values above 3999';
    }
    if (num <=0) {
        return 'The Romans had no representation for 0 and below';
    }
    let result = '';
    arabic.map((value, index) => {
        while(num >= value) {
            result += Roman [index];
            num -= value;
        }
    });
    return result;
};

// Exporting the function to be used in another file
module.exports = {numToRoman};