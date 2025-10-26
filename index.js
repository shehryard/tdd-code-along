// Our converter function
const Roman = ['X', 'IX', 'V', 'IV', 'I'];
const arabic = [10, 9, 5, 4, 1];

const numToRoman = (num) => {
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