const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter input: "));

const repeat_missing = (input) => {
    
    let hash_array = new Array(input.length + 1);
    let output = new Array(2);

    for (let element of input) {
        hash_array[element] = hash_array[element] ? hash_array[element] + 1 : 1;
    }

    for (let i=1; i<hash_array.length; i++) {
        if (!hash_array[i]) {
            output[0] = i;
        }
        else if (hash_array[i] > 1) {
            output[1] = i;
        }
    }

    return output;
}

const output = repeat_missing(input);
console.log("Missing: " + output[0] + " Repeat: " + output[1]);
