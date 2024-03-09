const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter input: "));

const max_sum = (input) => {

    let sum = 0, max = input[0];

    for (let element of input) {

        sum = sum + element >= 0 ? sum + element : 0;
        max = max < sum ? sum : max;
    }

    return max;
}

const output = max_sum(input);
console.log("output: ", output);