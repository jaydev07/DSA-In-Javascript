const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter input: "));

const max_ones = (input) => {
    
    let current=0, max=0, i;

    for (i=0; i < input.length; i++) {

        if (input[i] === 1) {
            current++;
            max = max > current ? max : current;
        } else {
            current = 0;
        }
    }

    return max;
}

const output = max_ones(input);
console.log("output: ", output);