const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter input: "));

const max_profit = (input) => {

    let min=input[0], profit = 0;

    for (let element of input) {
        
        if (min > element) {
            min = element;
        }

        if (profit < element - min) {
            profit = element - min;
        }
    }

    return profit;
}

const output = max_profit(input);
console.log("output: ", output);