const prompt = require("prompt-sync")();

var input_array = JSON.parse(prompt("Enter array: "));

const find_duplicate_hashing = (input_array) => {

    let hash_array = [];

    for (let element of input_array) {

        if (hash_array[element]) {
            return element;
        }

        hash_array[element] = 1;
    }
}

const output = find_duplicate_hashing(input_array);

console.log("output: ", output);