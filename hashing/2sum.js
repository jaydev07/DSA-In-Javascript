const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter array: "));
var target = parseInt(prompt("Enter target: "));

const sum_of_2 = (input, target) => {

    let hash_map = {}, output = new Array(2);

    for (let i=0; i < input.length; i++) {

        if (hash_map[target - input[i]] !== undefined) {
            output[0] = i;
            output[1] = hash_map[target - input[i]];
            return output;
        }

        hash_map[input[i]] = i;
    }

    return output;
}

const output = sum_of_2(input, target);
console.log("output: ", output);