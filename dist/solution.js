"use strict";
function formatString(input, toUpper) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
const number = concatenateArrays([1, 2, 3], [4, 5, 6]);
console.log(number);
