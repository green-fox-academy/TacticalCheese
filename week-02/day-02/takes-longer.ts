'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;


// let start: number = ('Hofstadter\'s Law: It').length;
// quote = quote.substring(0, start) + ' always takes longer than' + quote.substring(start);

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

console.log(insert(quote, 21, "always takes longer than "))