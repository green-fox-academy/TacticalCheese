'use strict'

// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

let nameToGreet: string = 'Green fox';

function greet(i: string) {
    return "Greetings, dear " + i + '!'
}

console.log(greet(nameToGreet))